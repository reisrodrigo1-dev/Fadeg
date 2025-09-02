import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { ShoppingCartCheckout } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import Sticky from "components/Sticky";
import Topbar from "components/Topbar";
import { Footer1 } from "components/footer";
import Header from "components/header/Header";
import { MobileNavigationBar } from "components/mobile-navigation";
import Navbar from "components/navbar/Navbar";
import SearchInputWithCategory from "components/search-box/SearchInputWithCategory";
import { useBanners } from "hooks/useBanners";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import {
	type FC,
	Fragment,
	type ReactNode,
	useCallback,
	useState,
} from "react";
import useCartStore from "store/useCartStore";
import api from "utils/__api__/meu-curso";

/**
 *  Used in:
 *  1. market-1, matket-2, gadget-shop,
 *     fashion-shop, fashion-shop-2, fashion-shop-3, furniture-shop, grocery3, gift-shop
 *  2. product details page
 *  3. order-confirmation page
 *  4. product-search page
 *  5. shops and shops-details page
 *  6. checkoutNavLayout and CustomerDashboadLayout component
 */

// ===================================================
type ShopLayout1Props = {
	children: ReactNode;
	showTopbar?: boolean;
	showNavbar?: boolean;
	topbarBgColor?: string;
};
// ===================================================
const WhatsApp = styled(Image)({
	zIndex: 999,
	position: "fixed",
	bottom: "30px",
	right: "10px",
	"@media (max-width: 600px)": {
		width: "40px",
		height: "40px",
		bottom: "130px",
	},
});

const pulse = keyframes`
	from, 0%, 70%, 100%, to {
		/* transform: scale(0.95); */
		box-shadow: 0 0 0 0 rgba(255, 0, 0, 0.7);
	}

	70% {
		/* transform: scale(1); */
		box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
	}

	100% {
		/* transform: scale(0.95); */
		box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
	}
`;

const CartCTA = styled(Link)({
	alignItems: "center",
	animation: `${pulse} 2s infinite`,
	backgroundColor: "#f7f7f8",
	borderRadius: "100%",
	bottom: "90px",
	display: "flex",
	justifyContent: "center",
	padding: "6px",
	position: "fixed",
	right: "12px",
	zIndex: 9998,
	"@media (max-width: 600px)": {
		bottom: "190px",
		display: "flex",
		height: "40px",
		width: "40px",
	},
});

const Carnaval24 = styled("img")({
	display: "none",
	"@media (max-width: 1150px)": {
		display: "block",
		position: "fixed",
		right: "5px",
		bottom: "200px",
		borderRadius: "30px",
	},
});

// ===================================================

const ShopLayout1: FC<ShopLayout1Props> = ({
	children,
	topbarBgColor,
	showTopbar = true,
	showNavbar = true,
}) => {
	const [isFixed, setIsFixed] = useState(false);
	const toggleIsFixed = useCallback((fixed: boolean) => setIsFixed(fixed), []);
	const router = useRouter();

	/* Call to Action logic */
	const [cartProducts, fetchCartItems] = useCartStore((state) => [
		state.cartProducts,
		state.fetchCartItems,
	]);

	const { data: session } = useSession();

	const { pathname } = router;
	const hideCTAList: string[] = ["/carrinho"];
	const isCTAShow =
		session?.user && cartProducts.length > 0 && !hideCTAList.includes(pathname);

	//

	const { banners } = useBanners(api.getIndexBanners("1"));
	const { banners: eventBanner } = useBanners(api.getIndexBanners("13"));

	const handleConsumidor = () => {
		router.push(eventBanner[0].URL);
	};

	return (
		<Fragment>
			{/* TOPBAR */}
			{/* {showTopbar && <Topbar bgColor={topbarBgColor} />} */}

			{/* HEADER */}
			<Sticky fixedOn={0} onSticky={toggleIsFixed} scrollDistance={300}>
				<Header isFixed={isFixed} searchInput={<SearchInputWithCategory />} />
			</Sticky>

			<div className="section-after-sticky">
				{/* NAVIGATION BAR */}
				{showNavbar && <Navbar elevation={0} border={1} />}

				{/* BODY CONTENT */}
				{children}
			</div>

			{/* SMALL DEVICE BOTTOM NAVIGATION */}
			<MobileNavigationBar />
			{/* WHATSAPP ICON */}

			<a
				target="_blank"
				href="https://meucurso.com.br/matricula"
				rel="noreferrer"
			>
				<WhatsApp
					src="https://imagepng.org/whatsapp-icone-icon/whatsapp-icone/"
					width={40}
					height={40}
					alt="Ícone whatsapp de ajuda"
					priority
				/>
			</a>

			{/* Call To Action Button */}
			{isCTAShow && (
				<CartCTA href="/carrinho">
					<Tooltip title="Ir para o carrinho" placement="top-start">
						<ShoppingCartCheckout
							width={40}
							height={40}
							fontWeight={"bold"}
							style={{ color: "#808080" }}
						/>
					</Tooltip>
				</CartCTA>
			)}

			{banners.find((item) => item.BannerCategoryId === 13)?.Active ||
				(eventBanner[0]?.Active && (
					<div onKeyUp={handleConsumidor}>
						<Carnaval24
							width={50}
							height={50}
							alt="icone carnaval"
							src="https://campanhas.meucurso.com.br/button-event-mobile.png"
						/>
					</div>
				))}
			{/* FOOTER */}
			<Footer1 />
		</Fragment>
	);
};

export default ShopLayout1;

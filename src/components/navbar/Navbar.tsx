import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import {
	Box,
	Button,
	Container,
	type SvgIconProps,
	styled,
} from "@mui/material";
import BazaarCard from "components/BazaarCard";
import { Paragraph } from "components/Typography";
import CategoryMenu from "components/categories/CategoryMenu";
import CategoryMenuCard from "components/categories/CategoryMenuCard";
import CategoryMenuItem from "components/categories/CategoryMenuItem";
import { FlexBox } from "components/flex-box";
import Category from "components/icons/Category";
import { NavLink } from "components/nav-link";
import navigations from "data/navigations";
import { useBanners } from "hooks/useBanners";
import { useProduct } from "hooks/useProduct";
import { useProducts } from "hooks/useProducts";
import useSettings from "hooks/useSettings";
import Link from "next/dist/client/link";
import Image from "next/image";
import { type FC, useState } from "react";
import api from "utils/__api__/meu-curso";

// NavList props interface
type Navs = {
	url: string;
	title: string;
	Icon?: (props: SvgIconProps<"svg", {}>) => JSX.Element;
};

type NavList = {
	url: string;
	title: string;
	child: Navs[];
	megaMenu: boolean;
	megaMenuWithSub: boolean;
};

// const common css style
const navLinkStyle = {
	cursor: "pointer",
	color: "black",
	transition: "color 150ms ease-in-out",
	"&:hover": { color: "primary.main" },
	"&:last-child": { marginRight: 0 },
};
const blackLinkStyle = {
	"@keyframes pulsate-bck": {
		"0%": {
			transform: "scale(1);",
		},
		"50%": {
			transform: "scale(0.9);",
		},
		"100%": {
			transform: "scale(1);",
		},
	},
};
const BlackFridayLink = styled(NavLink)({
	...blackLinkStyle,
	animation: "pulsate-bck 2s ease-in-out infinite both",
});
// style components
const StyledNavLink = styled(NavLink)({ ...navLinkStyle });

const ParentNav = styled(Box)(({ theme }) => ({
	"&:hover": {
		color: theme.palette.primary.main,
		"& > .parent-nav-item": { display: "block" },
	},
}));

const ParentNavItem = styled(Box)(({ theme }) => ({
	top: 0,
	zIndex: 5,
	left: "100%",
	paddingLeft: 8,
	display: "none",
	position: "absolute",
	[theme.breakpoints.down(1640)]: {
		right: "100%",
		left: "auto",
		paddingRight: 8,
	},
}));

const NavBarWrapper = styled(BazaarCard)<{ border: number }>(
	({ theme, border }) => ({
		height: "60px",
		display: "block",
		borderRadius: "0px",
		position: "relative",
		...(border && {
			borderBottom: `1px solid ${theme.palette.grey[200]}`,
		}),
		[theme.breakpoints.down(1150)]: { display: "none" },
	}),
);

const InnerContainer = styled(Container)({
	height: "100%",
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
});

const CategoryMenuButton = styled(Button)(({ theme }) => ({
	width: "190px",
	height: "40px",
	border: "1px solid #000",
}));

const ChildNavsWrapper = styled(Box)({
	zIndex: 5,
	left: "50%",
	top: "100%",
	display: "none",
	position: "absolute",
	transform: "translate(-50%, 0%)",
});

// ==========================================================
type NavbarProps = {
	border?: number;
	elevation?: number;
	navListOpen?: boolean;
	hideCategories?: boolean;
};
// ==========================================================

const Navbar: FC<NavbarProps> = ({
	navListOpen,
	hideCategories,
	elevation,
	border,
}) => {
	const { settings } = useSettings();
	const { banners } = useBanners(api.getIndexBanners("1"));
	const { banners: eventBanner } = useBanners(api.getIndexBanners("13"));

	return (
		<NavBarWrapper hoverEffect={true} elevation={elevation} border={border}>
			{!hideCategories ? (
				<InnerContainer>
					{/* Horizontal menu */}
					<FlexBox gap={4} alignItems={"center"}>
						{/* {renderNestedNav(navbarNavigations, true)} */}

						{/* <StyledNavLink href={"/professor"}>/Professor</StyledNavLink> */}
						{/* <StyledNavLink href={"/primeiros-passos-na-advocacia"}>
              Primeiros Passos
            </StyledNavLink> */}
						{banners.find((item) => item.BannerCategoryId === 13)?.Active ||
							(eventBanner[0]?.Active && (
								<BlackFridayLink href={eventBanner[0].URL}>
									<Image
										width={150}
										height={50}
										style={{ maxWidth: "100%", margin: "0 auto" }}
										src="https://campanhas.meucurso.com.br/button-event.png"
										alt={eventBanner[0].Name}
									/>
								</BlackFridayLink>
							))}
						<StyledNavLink href={"/processo-seletivo"} sx={{ fontWeight: "bold" }}>
							Processo Seletivo
						</StyledNavLink>
						<StyledNavLink href={"/institucional"} sx={{ fontWeight: "bold" }}>
							Quem Somos
						</StyledNavLink>
						{/* <StyledNavLink href={"/embaixadores"}>
							Embaixadores / Parceiros
						</StyledNavLink> */}
						<StyledNavLink
							target="_blank"
							href={"https://blog.meucurso.com.br"}
						>
							Blog MeuCurso
						</StyledNavLink>
						{/* <StyledNavLink href={"/central-de-ajuda"}>
              Central de Ajuda
            </StyledNavLink> */}
					</FlexBox>
				</InnerContainer>
			) : (
				<InnerContainer sx={{ justifyContent: "center" }}>
					<FlexBox gap={4}>
						{/* {renderNestedNav(navbarNavigations, true)} */}
					</FlexBox>
				</InnerContainer>
			)}
		</NavBarWrapper>
	);
};

//  set default props data
Navbar.defaultProps = {
	elevation: 2,
	navListOpen: false,
	hideCategories: false,
};

export default Navbar;

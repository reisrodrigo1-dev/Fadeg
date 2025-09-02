import { ChevronRight } from "@mui/icons-material";
import {
	Box,
	Button,
	MenuItem,
	Paper,
	createFilterOptions,
	styled,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import { divide } from "lodash";
import Link from "next/link";
import { type FC, useCallback } from "react";
import { useEffect, useState } from "react";
import api from "../../utils/__api__/meu-curso";

// styled component
const Wrapper = styled(Box)<CategoryMenuCardProps>(
	({ theme, position, open }) => ({
		left: 0,
		zIndex: 98,
		right: "auto",
		borderRadius: 4,
		padding: "0.5rem 0px",
		transformOrigin: "top",
		boxShadow: theme.shadows[2],
		position: position || "unset",
		transition: "all 250ms ease-in-out",
		transform: open ? "scaleY(1)" : "scaleY(0)",
		backgroundColor: theme.palette.background.paper,
		top: position === "absolute" ? "calc(100% + 0.7rem)" : "0.5rem",
	}),
);

const WrapperCategory = styled(Box)(({ theme }) => ({
	"& .category-dropdown-link": {
		height: 40,
		display: "flex",
		minWidth: "100%",
		cursor: "pointer",
		whiteSpace: "pre",
		padding: "0px 1rem",
		alignItems: "center",
		transition: "all 250ms ease-in-out",
		"& .title": { flexGrow: 1, paddingLeft: "0.75rem" },
	},
}));

const SubMenu = styled(Box)<SubMenuProps>(({ theme, open }) => ({
	position: "absolute",
	left: "100.50%",
	right: "auto",
	top: 0,
	display: open ? "block" : "none",
	borderRadius: 4,
	zIndex: 99,
	boxShadow: theme.shadows[2],
	backgroundColor: theme.palette.background.paper,
}));

// ===============================================================
type CategoryMenuCardProps = {
	open?: boolean;
	position?: "absolute" | "relative";
};

type SubMenuProps = {
	open: boolean;
};

// ===============================================================

const CategoryMenuCard: FC<CategoryMenuCardProps> = (props) => {
	const { open, position } = props;
	const [categories, setCategories] = useState<any>();
	const [loading, setLoading] = useState(true);
	const [hoveredItemId, setHoveredItemId] = useState<number | null>(null);

	const fetchCategory = useCallback(async () => {
		try {
			const data = await api.getProductsCategories();
			setCategories(data);
			setLoading(false);
		} catch {
			console.log("Erro ao renderizar categorias");
			setLoading(false);
		}
	}, []);

	useEffect(() => {
		fetchCategory();
	}, [fetchCategory]);

	const handleItemHover = (itemId: number) => {
		setHoveredItemId(itemId);
	};

	const clearHoveredItem = () => {
		setHoveredItemId(null);
	};

	const renderSubMenu = (parentId: number | null) => {
		const children = categories?.filter(
			(item) => item.parentCategoryId === parentId,
		);
		const professor = categories?.find((item) => item.id === 31);
		if (!children || children.length === 0) return null;

		return (
			<Box>
				<SubMenu open={hoveredItemId === parentId}>
					{children.map((childItem, index) => (
						<Box key={index}>
							{childItem.active === true &&
								childItem.MenuVisible === true &&
								!childItem.URL && (
									<Link legacyBehavior href={`/categorias/${childItem.UrlKey}`}>
										<MenuItem
											className="category-dropdown-link"
											key={childItem.id}
										>
											<span className="title">{childItem.text}</span>
											{renderSubMenu(childItem.id)}
										</MenuItem>
									</Link>
								)}
							{childItem.active === true &&
								childItem.MenuVisible === true &&
								childItem.URL && (
									<Link legacyBehavior href={childItem.URL}>
										<MenuItem
											className="category-dropdown-link"
											key={childItem.id}
										>
											<span className="title">{childItem.text}</span>
											{renderSubMenu(childItem.id)}
										</MenuItem>
									</Link>
								)}
						</Box>
					))}
				</SubMenu>
			</Box>
		);
	};

	return (
		<Wrapper open={open} position={position}>
			{loading && (
				<MenuItem className="category-dropdown-link">
					<CircularProgress color="inherit" size={15} />
				</MenuItem>
			)}
			{!loading &&
				categories?.map((item, index) => (
					<WrapperCategory key={index}>
						{!item.parentCategoryId &&
							item.active === true &&
							item.MenuVisible === true && (
								<>
									{item.URL && (
										<Link href={item.URL}>
											<MenuItem
												className="category-dropdown-link"
												onMouseEnter={() => handleItemHover(item.id)}
												onMouseLeave={clearHoveredItem}
											>
												<span className="title">{item.text}</span>
												{renderSubMenu(item.id) && item.id !== 31 && (
													<>
														<ChevronRight fontSize="small" />
														{renderSubMenu(item.id)}
													</>
												)}
											</MenuItem>
										</Link>
									)}

									{!item.URL && (
										<Link href={`/categorias/${item.UrlKey}`}>
											<MenuItem
												className="category-dropdown-link"
												onMouseEnter={() => handleItemHover(item.id)}
												onMouseLeave={clearHoveredItem}
											>
												<span className="title">{item.text}</span>

												{renderSubMenu(item.id) && (
													<>
														<ChevronRight fontSize="small" />
														{renderSubMenu(item.id)}
													</>
												)}
											</MenuItem>
										</Link>
									)}
								</>
							)}
					</WrapperCategory>
				))}
		</Wrapper>
	);
};

CategoryMenuCard.defaultProps = { position: "absolute" };

export default CategoryMenuCard;

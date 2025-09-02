import { ChevronRight } from "@mui/icons-material";
import {
	Box,
	Button,
	MenuItem,
	Paper,
	createFilterOptions,
	styled,
} from "@mui/material";
import Link from "next/link";

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

const freeContent = [
	{
		id: 1,
		name: "OAB 1º FASE",
		link: "https://conteudo.meucurso.com.br/oab-1-fase-meucurso",
	},
	{
		id: 2,
		name: "OAB 2º FASE",
		link: "https://conteudo.meucurso.com.br/oab-2-fase-meucurso",
	},
	{
		id: 3,
		name: "SIMULADO CONCURSO",
		link: "https://conteudo.meucurso.com.br/simulados-concursos",
	},
	{
		id: 4,
		name: "CONGRESSO ADVOCACIA",
		link: "https://conteudo.meucurso.com.br/congresso-digital-meucurso",
	},
];

const CategoryMenuFreeContent = ({ open, position }: CategoryMenuCardProps) => {
	return (
		<Wrapper open={open} position={"absolute"}>
			{freeContent?.map((item) => (
				<WrapperCategory key={item.id}>
					<Link target="_blank" href={item.link}>
						<MenuItem className="category-dropdown-link">{item.name}</MenuItem>
					</Link>
				</WrapperCategory>
			))}
		</Wrapper>
	);
};

export { CategoryMenuFreeContent };

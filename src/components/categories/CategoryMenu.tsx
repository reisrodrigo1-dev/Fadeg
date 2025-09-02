import { Box, styled } from "@mui/material";
import { CategoryMenuFreeContent } from "components/categories/CategoryMenuFreeContent";
import React, {
	type FC,
	useCallback,
	useEffect,
	useRef,
	useState,
} from "react";
import CategoryMenuCard from "./CategoryMenuCard";

// styled component
const Wrapper = styled(Box)(({ theme: { direction } }) => ({
	cursor: "pointer",
	position: "relative",
	transition: "all 250ms ease-in-out",
	"& .dropdown-icon ": {
		transition: "all 250ms ease-in-out",
	},
	"&:hover": {
		"& .dropdown-icon ": {
			transition: "all 250ms ease-in-out",
			transform: `rotate(${direction === "rtl" ? "-90deg" : "90deg"})`,
		},
	},
}));

type CategoryMenuProps = {
	children: React.ReactElement;
	type?: "links";
};

const CategoryMenu: FC<CategoryMenuProps> = ({ children, type }) => {
	const [open, setOpen] = useState(false);
	const popoverRef = useRef<boolean>(false);

	const handleMouseEnter = useCallback(() => {
		setOpen(true);
	}, []);

	const handleMouseLeave = useCallback(() => {
		setOpen(false);
	}, []);

	useEffect(() => {
		popoverRef.current = open;
	}, [open]);

	return (
		<Wrapper onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
			{React.cloneElement(children, {
				open,
				className: `${children.props.className}`,
			})}

			{type !== "links" && <CategoryMenuCard open={open} />}
			{type === "links" && <CategoryMenuFreeContent open={open} />}
		</Wrapper>
	);
};

export default CategoryMenu;

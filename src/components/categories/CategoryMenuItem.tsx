import Link from "next/link";
import { FC, ReactNode } from "react";
import { Box, MenuItem, styled, Button } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import useSettings from "hooks/useSettings";
import { useRouter } from "next/router";
import { Paragraph } from "components/Typography";

//styled component
const Wrapper = styled(Box)(({ theme }) => ({
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
  "&:hover": {
    "& > .category-dropdown-link": {
      color: theme.palette.primary.main,
      background: theme.palette.action.hover,
    },
    "& > .mega-menu": {
      display: "block",
      height: 540,
    },
  },
}));

// =============================================================
type CategoryMenuItemProps = {
  icon?: any;
  href: string;
  title: string;
  caret?: boolean;
  children?: ReactNode;
};
// =============================================================

const CategoryMenuItem: FC<CategoryMenuItemProps> = (props) => {
  const { href, title, caret, children, ...rest } = props;
  const { settings } = useSettings();
  const router = useRouter();

  const handlePage = () => {
    if (href.includes("marketplace/index/")) {
    } else {
      router.push(href);
    }
  };

  return (
    <Wrapper>
      <Box onClick={handlePage}>
        {href.includes("marketplace/index/") ? (
          <a
            className="category-dropdown-link"
            target="_blank"
            href={href}
          >
            {rest.icon && <rest.icon fontSize="small" color="inherit" />}
            <span className="title">{title}</span>
            {caret &&
              (settings.direction === "ltr" ? (
                <ChevronRight fontSize="small" />
              ) : (
                <ChevronLeft fontSize="small" />
              ))}
          </a>
        ) : (
          <MenuItem className="category-dropdown-link">
            {rest.icon && <rest.icon fontSize="small" color="inherit" />}
            <span className="title">{title}</span>
            {caret &&
              (settings.direction === "ltr" ? (
                <ChevronRight fontSize="small" />
              ) : (
                <ChevronLeft fontSize="small" />
              ))}
          </MenuItem>
        )}
      </Box>
      {children}
    </Wrapper>
  );
};

CategoryMenuItem.defaultProps = { caret: true };

export default CategoryMenuItem;

import { FC } from "react";
import Link from "next/link";
import { Box, Grid } from "@mui/material";
import StyledMegaMenu from "./StyledMegaMenu";
import { FlexBox } from "components/flex-box";
import LazyImage from "components/LazyImage";
import { NavLink } from "components/nav-link";
import BazaarCard from "components/BazaarCard";
import { H3, Small } from "components/Typography";

// ====================================================================================
type Image = { imgUrl: string; href: string };
type SubCategory = { title: string; href: string };
type Category = {
  title: string;
  href?: string;
  subCategories: SubCategory[];
};
type MegaMenu = { categories: Category[]; rightImage?: Image };
type MegaMenuProps = { data: MegaMenu; minWidth?: string };
// ====================================================================================

const MegaMenu3: FC<MegaMenuProps> = ({
  data: { categories, rightImage },
  minWidth,
}) => {
  return categories ? (
    <StyledMegaMenu>
      <BazaarCard sx={{ ml: "1rem", minWidth }} elevation={2}>
        <FlexBox px={2.5} py={1.75}>
          <Box flex="1 1 0">
            <Grid maxWidth={"100%"} container>
              {categories?.map((item, ind) => (
                <Grid width={"10%"} item md={3} key={ind}>
                  {item.href ? (
                    <NavLink className="title-link" href={item.href}>
                      {item.title}
                    </NavLink>
                  ) : (
                    <Box className="title-link">{item.title}</Box>
                  )}
                  {item.subCategories?.map((sub, ind) => (
                    <NavLink
                      className="child-link"
                      href={sub.href}
                      key={ind}
                    >
                      {sub.title}
                    </NavLink>
                  ))}
                </Grid>
              ))}
            </Grid>
          </Box>

          {rightImage && (
            <Link href={rightImage.href}>
              <Box position="relative" width="153px" height="100%">
                <LazyImage alt="banner" src={rightImage.imgUrl} />
              </Box>
            </Link>
          )}
        </FlexBox>
      </BazaarCard>
    </StyledMegaMenu>
  ) : null;
};

MegaMenu3.defaultProps = {
  minWidth: "760px",
};

export default MegaMenu3;

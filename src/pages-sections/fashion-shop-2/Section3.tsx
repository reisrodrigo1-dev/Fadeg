import { Container, Grid } from "@mui/material";
import CategoryCard1 from "components/category-cards/CategoryCard1";
import { H2 } from "components/Typography";
import Link from "next/link";

// ===========================================================

// ===========================================================

const Section3 = ({ categories }) => {
  return (
    <Container sx={{ my: 8 }}>
      <H2 textAlign={"center"} my={3}>
        Navegue pela categoria que você procura
      </H2>
      <Grid
        container
        spacing={3}
        columns={categories.length <= 4 ? 16 : 15}
        justifyContent={"center"}
      >
        {categories.map((item, id) => (
          <Grid item md={4} sm={6} xs={15} key={id}>
            <Link href={item?.url}>
              <CategoryCard1
                image={item.image}
                imageMobile={item.imageMobile}
              />
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Section3;

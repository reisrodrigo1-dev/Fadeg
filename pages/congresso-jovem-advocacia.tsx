import React, { useState, useEffect, useMemo } from "react";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  InputAdornment,
  Pagination,
  Stack,
  TextField,
} from "@mui/material";
import { H1, H2, H3, H4, Paragraph } from "components/Typography";
import ShopLayout1 from "components/layouts/ShopLayout1";
import ProductCard21 from "components/product-cards/ProductCard21";
import { TypeAnimation } from "react-type-animation";
import {
  SearchOutlined as SearchOutlinedIcon,
  WhatsApp,
} from "@mui/icons-material";
import SEO from "components/SEO";
import Section1 from "pages-sections/fashion-shop-2/Section1";
import Blog from "components/Blog";
import Link from "next/link";
import { Sora } from "next/font/google";
import RdStationForm from "../src/pages-sections/adv-do-futuro/RdStationForm";
import { useBanners } from "hooks/useBanners";
import { useProducts } from "hooks/useProducts";
import api from "utils/__api__/meu-curso";

const sora = Sora({ subsets: ["latin"] });

const CongressoJovemAdvocaciaView = () => {
  const { banners } = useBanners(api.getIndexBanners("18"));
  const { products } = useProducts(api.getProductsById("16"));

  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams, setSearchParams] = useState("");

  const productsPerPage = 6;

  useEffect(() => {
    setCurrentPage(1);
  }, [searchParams]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setCurrentPage(1);
  };

  const getFilteredProducts = products.filter((product) =>
    product.Name.toLowerCase().includes(searchParams.toLowerCase())
  );

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = getFilteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  return (
    <ShopLayout1>
      <SEO
        title="Congresso Jovem Advocacia"
        sitename="MeuCurso - Do seu jeito. No seu tempo."
      />
      <Container
        disableGutters
        maxWidth="xl"
        sx={{ backgroundColor: "#161d24", pb: 5, color: "white" }}
      >
        <Section1 dotColor="orange" carouselData={banners} />

        <Container>
          <Grid container>
            <Grid item xs={12} md={12} mb={10}>
              {/* <H1 textAlign="center" color="white" fontWeight="bold">
                Congressos Jovem Advocacia
              </H1> */}
              <Paragraph
                sx={{
                  fontSize: { xs: "20px", md: "23px", xl: "23px" },
                }}
              >
                <TypeAnimation
                  preRenderFirstString
                  style={{
                    whiteSpace: "pre-line",
                    display: "block",
                    fontWeight: "bolder",
                    color: "orange",
                    textAlign: "center",
                  }}
                  sequence={[`Congressos Jovem Advocacia`, 5000, "", 1000]}
                  speed={45}
                  repeat={Infinity}
                  omitDeletionAnimation
                />
              </Paragraph>
            </Grid>
            <Grid item xs={12} md={12}>
              <form onSubmit={handleSearchSubmit}>
                <TextField
                  sx={{
                    my: 3,
                    input: { color: "white" },
                    width: "500px",
                    display: "flex",
                    mx: "auto",
                  }}
                  color="warning"
                  label="Pesquisar"
                  focused
                  onChange={(e) => setSearchParams(e.target.value)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <SearchOutlinedIcon color="warning" />
                      </InputAdornment>
                    ),
                  }}
                  variant="standard"
                />
              </form>
            </Grid>
          </Grid>
          <Grid
            key={currentPage}
            container
            spacing={1}
            sx={{ justifyContent: { xs: "center", md: "start" } }}
          >
            {currentProducts.map((product, index) => (
              <Grid key={index} item xs={12} md={4}>
                <ProductCard21 product={product} />
              </Grid>
            ))}
            {getFilteredProducts.length > productsPerPage && (
              <>
                <Grid item md={12} justifyContent={"center"} display={"grid"}>
                  <Stack mx="auto" spacing={2}>
                    <Pagination
                      sx={{
                        mx: "auto",
                        "& .MuiPaginationItem-root": {
                          color: "#a8a0ed",
                          borderColor: "#a8a0ed",
                        },
                        "& .MuiPaginationItem-root.Mui-selected": {
                          color: "#FFCD4E",
                          borderColor: "#FFCD4E",
                        },

                        "& .Mui-selected": {
                          color: "#FFCD4E",
                          transition: "0.2s",
                          backgroundColor: "rgba(255, 205, 78, 0.24)",
                          border: "1px solid rgba(255, 205, 78, 0.5)",
                          ":hover": {
                            backgroundColor: "rgba(255, 205, 78, 0.24)",
                            filter: "brightness(0.8)",
                          },
                        },
                      }}
                      count={Math.ceil(
                        getFilteredProducts.length / productsPerPage
                      )}
                      page={currentPage}
                      onChange={(_, page) => setCurrentPage(page)}
                    />
                  </Stack>
                </Grid>
              </>
            )}
          </Grid>
          <Grid
            container
            columnGap={10}
            padding={3}
            rowGap={15}
            display={"flex"}
            justifyContent={"center"}
            mt={10}
          >
            <Grid item>
              <H2 textAlign={"center"}>
                PARTICIPE DA NOSSA <br /> COMUNIDADE NO WHATSAPP
              </H2>
              <Card sx={{ backgroundColor: "#161D24" }}>
                <CardContent
                  sx={{
                    backgroundColor: "#161D24",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingX: "0.5rem",
                    marginY: "2rem",
                  }}
                >
                  <Link
                    href={"https://chat.whatsapp.com/HpsfEVswINFDEH84Qecvgf"}
                    target="_blank"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                    }}
                    className={sora.className}
                  >
                    <WhatsApp
                      color="success"
                      style={{ fontSize: "3.125rem" }}
                    />
                    <H3
                      color={"white"}
                      sx={{ fontSize: { xs: ".750rem", md: "1.20rem" } }}
                    >
                      Clique e participe da
                      <br />
                      <span style={{ whiteSpace: "nowrap" }}>
                        COMUNIDADE EXCLUSIVA WHATSAPP
                      </span>
                    </H3>
                  </Link>
                </CardContent>
              </Card>
            </Grid>
            <Grid item>
              <H2 textAlign={"center"}>
                INSCREVA-SE EM NOSSA <br /> NEWSLETTER
              </H2>
              <Card sx={{ backgroundColor: "#161D24" }}>
                <CardContent sx={{ xs: { maxWidth: "150px" } }}>
                  <RdStationForm />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid container mt={5}>
            <Grid item xs={12} md={12}>
              <Box my={5} ml={4} color={"white"}>
                <Blog title="Atualizações" />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </ShopLayout1>
  );
};

export default CongressoJovemAdvocaciaView;

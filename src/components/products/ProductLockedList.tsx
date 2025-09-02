import { Box, Button, Container, makeStyles, styled } from "@mui/material";
import Carousel from "components/carousel/Carousel";
import { carouselStyled } from "components/carousel/styles";
import ProductCard18 from "components/product-cards/ProductCard18";
import { H2 } from "components/Typography";
import useWindowSize from "hooks/useWindowSize";
import Product from "../../models/Product.model";
import { Fragment, useEffect, useState } from "react";
import ProductLockedCard from "./ProductLockedCard";
import { Timer } from "components/Timer";
import NewCountdown from "components/NewCountdown";

const ProductLockedList = ({ title = 'Em Breve', dateToOpen }: { title?: string, dateToOpen?: Date }) => {
    const products = [1, 2, 3, 4]

    const width = useWindowSize();

    const [visibleSlides, setVisibleSlides] = useState(4);

    useEffect(() => {
        if (width < 426) setVisibleSlides(1);
        else if (width < 650) setVisibleSlides(2);
        else if (width < 1024) setVisibleSlides(3);
        else setVisibleSlides(4);
    }, [width]);

    const Timer = styled(NewCountdown)()

    return (
        <>
            <Container sx={{ mt: 8, pb: 8 }}>
                <H2 textAlign="center" my={3}>
                    {title}
                </H2>
                {
                    dateToOpen &&
                    <Timer expirationDate={dateToOpen} />
                }
                <Carousel
                    totalSlides={4}
                    visibleSlides={4}
                    sx={carouselStyled}
                >
                    {products.map((_, index) => (
                        <ProductLockedCard key={index} />
                    ))}
                </Carousel>
                <Box sx={{ display: "flex", justifyContent: "end", mt: '3rem' }}>
                    <Button variant="outlined">
                        Em breve
                    </Button>
                </Box>
            </Container>
        </>
    );
};

export { ProductLockedList }
import React, { useState, useEffect } from "react";
import { Box, Button, Grid } from "@mui/material";
import ProductCard18 from "components/product-cards/ProductCard18";

export default function CustomCarousel({ products }) {
  // Responsivo: 1 no xs, 2 no sm, 4 no md+
  const getItemsPerPage = () => {
    if (typeof window === 'undefined') return 4;
    if (window.innerWidth < 600) return 1;
    if (window.innerWidth < 900) return 2;
    return 4;
  };
  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage);
  const [start, setStart] = useState(0);
  const max = products.length;
  const canPrev = start > 0;
  const canNext = start + itemsPerPage < max;

  useEffect(() => {
    function handleResize() {
      setItemsPerPage(getItemsPerPage());
      setStart(0); // volta para o início ao mudar o tamanho
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function handlePrev() {
    if (canPrev) setStart(start - itemsPerPage);
  }
  function handleNext() {
    if (canNext) setStart(start + itemsPerPage);
  }

  return (
    <Box position="relative">
      <Grid container spacing={3} justifyContent="center" alignItems="stretch">
        {products.slice(start, start + itemsPerPage).map((product, idx) => (
          <Grid item xs={12} sm={itemsPerPage === 1 ? 12 : 6} md={itemsPerPage >= 4 ? 3 : 12 / itemsPerPage} key={product.ProductId || idx}>
            <Box sx={{
              animation: 'fadeInUp 0.7s',
              animationDelay: `${idx * 0.15}s`,
              animationFillMode: 'both',
              '@keyframes fadeInUp': {
                '0%': { opacity: 0, transform: 'translate3d(0, 40px, 0)' },
                '100%': { opacity: 1, transform: 'none' },
              },
              height: '100%',
            }}>
              <ProductCard18 product={product} />
            </Box>
          </Grid>
        ))}
      </Grid>
      <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
        <Button
          variant="outlined"
          onClick={handlePrev}
          disabled={!canPrev}
          sx={{ minWidth: 48, minHeight: 48, borderRadius: '50%', fontSize: 24 }}
        >
          &#8592;
        </Button>
        <Button
          variant="outlined"
          onClick={handleNext}
          disabled={!canNext}
          sx={{ minWidth: 48, minHeight: 48, borderRadius: '50%', fontSize: 24 }}
        >
          &#8594;
        </Button>
      </Box>
    </Box>
  );
}

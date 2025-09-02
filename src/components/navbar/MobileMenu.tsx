import { FC, Fragment, useState, useCallback, useEffect } from "react";
import { Clear, ExpandMore, Menu } from "@mui/icons-material";
import {
  Accordion,
  AccordionSummary,
  Box,
  Drawer,
  IconButton,
} from "@mui/material";
import { H6 } from "components/Typography";
import Scrollbar from "components/Scrollbar";
import { NavLink } from "components/nav-link";
import api from "../../utils/__api__/meu-curso";

const MobileMenu: FC = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [categories, setCategories] = useState<any>();
  const [loading, setLoading] = useState(true);

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

  const groupedData = groupByParentCategory(categories);

  const renderAccordion = (data: any) => {
    return data?.map((group: any, index: any) => {
      const parentItem = group.find(
        (item: any) => item.parentCategoryId === null
      );

      const hasChildren = group.some(
        (item: any) => item.parentCategoryId === parentItem?.id
      );
      return (
        <>
          {parentItem?.active === true &&
            parentItem.MenuVisible === true &&
            parentItem.id !== 31 && (
              <>
                {hasChildren && (
                  <Accordion key={index} square elevation={0} disableGutters>
                    <AccordionSummary expandIcon={<ExpandMore />}>
                      <H6>{parentItem ? parentItem.text : "Sem Título"}</H6>
                    </AccordionSummary>
                    <Box mx={2}>{renderLevels(group)}</Box>
                  </Accordion>
                )}
                {!hasChildren && parentItem.URL && (
                  <Box key={index} py={1} ml={2}>
                    <NavLink href={parentItem.URL}>{parentItem.text}</NavLink>
                  </Box>
                )}
                {!hasChildren && !parentItem.URL && (
                  <Box key={index} py={1} ml={2}>
                    <NavLink href={`/categorias/${parentItem.UrlKey}`}>
                      {parentItem.text}
                    </NavLink>
                  </Box>
                )}
              </>
            )}
        </>
      );
    });
  };

  const renderLevels = (data: any) => {
    return data
      ?.filter((item) => item.active === true && item.MenuVisible === true)
      .map((item: any, index: any) => (
        <>
          {item.parentCategoryId && (
            <Box key={index} py={1}>
              <NavLink href={`/categorias/${item.UrlKey}`}>{item.text}</NavLink>
            </Box>
          )}

          {!item.parentCategoryId && item.id !== 31 && item.URL && (
            <Box key={index} py={1}>
              <NavLink href={item.URL}>{item.text}</NavLink>
            </Box>
          )}
        </>
      ));
  };

  function groupByParentCategory(data: any) {
    const groupedData: any = {};

    data?.forEach((item: any) => {
      const parentId = item.parentCategoryId || item.id;
      if (!groupedData[parentId]) {
        groupedData[parentId] = [];
      }
      groupedData[parentId].push(item);
    });

    return Object.values(groupedData);
  }

  return (
    <Fragment>
      <IconButton
        onClick={() => setOpenDrawer(true)}
        sx={{ flexShrink: 0, color: "grey.600" }}
      >
        <Menu />
      </IconButton>

      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        sx={{ zIndex: 15001 }}
      >
        <Box sx={{ width: "100vw", height: "100%", position: "relative" }}>
          <Scrollbar autoHide={false} sx={{ height: "100vh" }}>
            <Box
              maxWidth={500}
              margin="auto"
              position="relative"
              height="100%"
              px={5}
              py={8}
            >
              <IconButton
                onClick={() => setOpenDrawer(false)}
                sx={{ position: "absolute", right: 30, top: 15 }}
              >
                <Clear fontSize="small" />
              </IconButton>

              {/* MENU DE CATEGORIAS OCULTO */}
              {/* {renderAccordion(groupedData)} */}
              <Box py={1} ml={2}>
                <NavLink href={`/livraria`}>Livraria</NavLink>
              </Box>
              <Box py={1} ml={2}>
                <NavLink href={`/professor`}>Professor</NavLink>
              </Box>
              <Box py={1} ml={2}>
                <NavLink href={`/contato`}>Contato</NavLink>
              </Box>
            </Box>
          </Scrollbar>
        </Box>
      </Drawer>
    </Fragment>
  );
};

export default MobileMenu;

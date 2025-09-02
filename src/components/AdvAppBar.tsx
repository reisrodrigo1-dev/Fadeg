import * as React from "react";
import { Montserrat } from "next/font/google";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import CartBag from "./icons/CartBag";
import { ShoppingCart } from "@mui/icons-material";
import Image from "next/image";

const montserrat = Montserrat({ subsets: ["latin"] });

const pages = [
  "Portal da Advocacia",
  "Serviços",
  "Parceiros",
  "MeusConteúdos",
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function AdvAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] =
    React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      sx={{
        backgroundColor: "transparent",
        backdropFilter: "blur(19px)",
        zIndex: 99999999,
      }}
      position="static"
    >
      <Toolbar className={montserrat.className}>
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <img
            width={150}
            height={150}
            src="/assets/advhub.png"
            alt="logo"
            style={{
              maxWidth: "100dvw",
              height: "auto",
              filter:
                " brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(1%) hue-rotate(13deg) brightness(107%) contrast(102%)",
            }}
          />
        </Box>

        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{page}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>

        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <img
            width={150}
            height={150}
            src="/assets/advhub.png"
            alt="logo"
            style={{
              display: "flex",
              flexGrow: 1,
              marginRight: "5rem",
              maxWidth: "100dvw",
              height: "auto",
              filter:
                " brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(1%) hue-rotate(13deg) brightness(107%) contrast(102%)",
            }}
          />
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          {pages.map((page) => (
            <Button
              key={page}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              {page}
            </Button>
          ))}
          <ShoppingCart />
          <Button sx={{ padding: 1, backgroundColor: "#FF3B00" }}>
            Assinatura
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
export default AdvAppBar;

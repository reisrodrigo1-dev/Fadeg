import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import SchoolIcon from "@mui/icons-material/School";
import DescriptionIcon from "@mui/icons-material/Description";
import Image from "next/image";
import Link from "next/link";
import {
  Dialog,
  ListItemIcon,
  Modal,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Logout, Person, Settings } from "@mui/icons-material";
import { signOut, useSession } from "next-auth/react";
import { useState, useEffect, useCallback, Fragment } from "react";
import axios from "axios";
import LastOrders from "./LastOrders";

import Login from "pages-sections/sessions/Login";
import useSignoutStore from "store/useSignoutStore";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "none",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

function ResponsiveAppBar({ bgColor, image, pages, fontColor }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const { data: session } = useSession();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [lastOrders, setLastOrders] = useState<any>([]);
  const [openModalLastOrders, setOpenModalLastOrders] = useState(false);
  const [userConfigs, setUserConfigs] = useState<any>();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const { handleSignOut } = useSignoutStore();

  const open = Boolean(anchorEl);
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseOrdersModal = () => setOpenModalLastOrders(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleOrdersModal = () => setOpenModalLastOrders(true);
  const handleCloseModal = () => setOpenModal(false);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const toggleDialog = () => setDialogOpen(!dialogOpen);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const fetchOrdersList = useCallback(async () => {
    setLoading(true);
    if (session && openModalLastOrders) {
      await axios
        .get(
          `https://apiecommerce.meucurso.com.br/BIPEStore/OrdersHistory?studentId=${session.user.StudentAddress[0].StudentId}`,
          { headers: { Authorization: `Bearer ${session.user.Token}` } }
        )
        .then((response) => {
          setLoading(false);
          setLastOrders(response.data);
        })
        .catch((err) => {
          setLoading(false);
          console.log(err);
        });
    }
  }, [openModalLastOrders, session]);

  useEffect(() => {
    const fetchUserConfigs = async () => {
      if (session) {
        await axios
          .get(
            `https://apiecommerce.meucurso.com.br/Student/%7BcustomerId%7D?customerId=${session?.user?.CustomerId}`,
            {
              headers: { Authorization: `Bearer ${session?.user?.Token}` },
            }
          )
          .then((response) => setUserConfigs(response.data))
          .catch((err) => console.log(err));
      }
    };
    fetchUserConfigs();
    fetchOrdersList();
  }, [
    fetchOrdersList,
    session,
    session?.user?.CustomerId,
    session?.user?.Token,
    setUserConfigs,
  ]);

  const DIALOG_DRAWER = (
    <Fragment>
      {!session && (
        <Dialog
          scroll="body"
          open={dialogOpen}
          fullWidth={isMobile}
          onClose={toggleDialog}
          sx={{ zIndex: 9999 }}
        >
          <Login />
        </Dialog>
      )}
    </Fragment>
  );

  return (
    <AppBar position="static">
      <Container maxWidth="xl" sx={{ backgroundColor: bgColor }}>
        <Container>
          <Modal
            open={openModal}
            onClose={handleCloseModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                textAlign={"center"}
              >
                Configurações
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <p>
                  {" "}
                  <strong>Nome:</strong> {userConfigs?.FirstName}
                </p>
                <p>
                  {" "}
                  <strong>Sobrenome:</strong> {userConfigs?.LastName}
                </p>
                <p>
                  <strong>Email:</strong> {userConfigs?.Email}
                </p>
                <p>
                  {" "}
                  <strong>CPF:</strong> {userConfigs?.CPF}
                </p>
                <p>
                  <strong>Telefone Principal:</strong> {userConfigs?.MainPhone}
                </p>
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mt: 5,
                }}
              >
                <Button
                  style={{ display: "block", margin: "0 auto " }}
                  variant="outlined"
                  color="success"
                >
                  <a
                    target="_blank"
                    href="http://aluno.fadeg.com.br/Account/MyAccount"
                  >
                    {" "}
                    Editar
                  </a>
                </Button>
                <Button
                  onClick={handleCloseModal}
                  style={{ display: "block", margin: "0 auto " }}
                  variant="outlined"
                  color="error"
                >
                  Fechar
                </Button>
              </Box>
            </Box>
          </Modal>
          <LastOrders
            loading={loading}
            lastOrders={lastOrders}
            openModalLastOrders={openModalLastOrders}
            handleCloseOrdersModal={handleCloseOrdersModal}
          />
          <Toolbar disableGutters>
            <Tooltip title="Voltar">
              <Box component={Button} p={1} href="/professor" color={fontColor}>
                <KeyboardReturnIcon sx={{ mr: 2 }} />
              </Box>
            </Tooltip>

            <Image
              src={image}
              width={150}
              height={50}
              alt="logo"
              style={{ objectFit: "contain" }}
            />

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                justifyContent: "end",
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color={fontColor}
                sx={{ display: "flex", justifyContent: "end" }}
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
                {pages
                  .filter((link) => link.Text !== null)
                  .map((page) => (
                    <MenuItem key={page.id}>
                      <Typography sx={{ color: fontColor }} textAlign="center">
                        <a href={page.Link}>{page.Text}</a>
                      </Typography>
                    </MenuItem>
                  ))}
                <Box
                  sx={{
                    display: {
                      xs: "grid",
                      md: "none",
                    },
                    pt: "8px",
                    pb: "8px",
                    pl: "8px",
                    pr: "8px",
                  }}
                >
                  {!session && (
                    <>
                      <Tooltip title="Entrar">
                        <Box
                          textAlign="center"
                          component={Button}
                          onClick={toggleDialog}
                          color={fontColor}
                          disabled={!!session}
                          sx={{ marginLeft: "-15px" }}
                        >
                          <Person />
                        </Box>
                      </Tooltip>
                    </>
                  )}

                  {/* Quando estiver logado */}
                  {session && (
                    <>
                      <Tooltip title="Sua conta">
                        <Box onClick={handleClick} component={Button} p={0.5}>
                          <p
                            style={{
                              fontSize: "13px",
                              fontWeight: "lighter",
                              marginLeft: "5px",
                              color: fontColor,
                            }}
                          >
                            Ola! {session?.user?.Name}
                          </p>
                          {/* <Box color={"grey"} component={IconButton}> */}
                          <Person sx={{ color: fontColor, margin: 1 }} />
                          {/* </Box> */}
                        </Box>
                      </Tooltip>
                      <Menu
                        anchorEl={anchorEl}
                        id="account-menu"
                        open={open}
                        onClose={handleClose}
                        onClick={handleClose}
                        PaperProps={{
                          elevation: 0,
                          sx: {
                            overflow: "visible",
                            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                            mt: 1.5,
                            "& .MuiAvatar-root": {
                              width: 32,
                              height: 32,
                              ml: -0.5,
                              mr: 1,
                            },
                            "&:before": {
                              content: '""',
                              display: "block",
                              position: "absolute",
                              top: 0,
                              right: 14,
                              width: 10,
                              height: 10,
                              bgcolor: "background.paper",
                              transform: "translateY(-50%) rotate(45deg)",
                              zIndex: 0,
                            },
                          },
                        }}
                        transformOrigin={{
                          horizontal: "right",
                          vertical: "top",
                        }}
                        anchorOrigin={{
                          horizontal: "right",
                          vertical: "bottom",
                        }}
                      >
                        <MenuItem onClick={handleOpenModal}>
                          <ListItemIcon>
                            <Settings fontSize="small" />
                          </ListItemIcon>
                          Configurações
                        </MenuItem>

                        <MenuItem onClick={handleOrdersModal}>
                          <ListItemIcon>
                            <DescriptionIcon fontSize="small" />
                          </ListItemIcon>
                          Meus Pedidos
                        </MenuItem>

                        <MenuItem onClick={handleSignOut}>
                          <ListItemIcon>
                            <Logout fontSize="small" />
                          </ListItemIcon>
                          Sair da conta
                        </MenuItem>
                      </Menu>
                    </>
                  )}
                  <Tooltip title="Área do Aluno">
                    <Link
                      href={"http://aluno.fadeg.com.br/"}
                      target="_blank"
                    >
                      <Box p={1.25} color={"grey"} component={Button}>
                        <SchoolIcon sx={{ color: fontColor }} />
                      </Box>
                    </Link>
                  </Tooltip>
                </Box>
              </Menu>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages
                .filter((link) => link.Text !== null)
                .map((page) => (
                  <Button
                    key={page.id}
                    href={page.Link}
                    sx={{ my: 2, color: fontColor, display: "block" }}
                  >
                    {page.Text}
                  </Button>
                ))}
            </Box>

            <Box sx={{ flexGrow: 0, display: { xs: "none", md: "block" } }}>
              {!session && (
                <>
                  <Tooltip title="Entrar">
                    <Box
                      component={Button}
                      p={1.25}
                      onClick={toggleDialog}
                      color={fontColor}
                      disabled={!!session}
                    >
                      <Person />
                    </Box>
                  </Tooltip>
                </>
              )}

              {/* Quando estiver logado */}
              {session && (
                <>
                  <Tooltip sx={{ mr: 2 }} title="Sua conta">
                    <Box onClick={handleClick} component={Button} p={0.5}>
                      <p
                        style={{
                          fontSize: "10px",
                          marginLeft: "5px",
                          color: fontColor,
                        }}
                      >
                        Ola! {session?.user?.Name}
                      </p>
                      {/* <Box color={"grey"} component={IconButton}> */}
                      <Person sx={{ color: fontColor, margin: 1 }} />
                      {/* </Box> */}
                    </Box>
                  </Tooltip>
                  <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                      elevation: 0,
                      sx: {
                        overflow: "visible",
                        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                        mt: 1.5,
                        "& .MuiAvatar-root": {
                          width: 32,
                          height: 32,
                          ml: -0.5,
                          mr: 1,
                        },
                        "&:before": {
                          content: '""',
                          display: "block",
                          position: "absolute",
                          top: 0,
                          right: 14,
                          width: 10,
                          height: 10,
                          bgcolor: "background.paper",
                          transform: "translateY(-50%) rotate(45deg)",
                          zIndex: 0,
                        },
                      },
                    }}
                    transformOrigin={{
                      horizontal: "right",
                      vertical: "top",
                    }}
                    anchorOrigin={{
                      horizontal: "right",
                      vertical: "bottom",
                    }}
                  >
                    <MenuItem onClick={handleOpenModal}>
                      <ListItemIcon>
                        <Settings fontSize="small" />
                      </ListItemIcon>
                      Configurações
                    </MenuItem>

                    <MenuItem onClick={handleOrdersModal}>
                      <ListItemIcon>
                        <DescriptionIcon fontSize="small" />
                      </ListItemIcon>
                      Meus Pedidos
                    </MenuItem>

                    <MenuItem onClick={handleSignOut}>
                      <ListItemIcon>
                        <Logout fontSize="small" />
                      </ListItemIcon>
                      Sair da conta
                    </MenuItem>
                  </Menu>
                </>
              )}
              <Tooltip title="Área do Aluno">
                <Link href={"http://aluno.fadeg.com.br/"} target="_blank">
                  <Box p={1.25} color={"grey"} component={Button}>
                    <SchoolIcon sx={{ color: fontColor }} />
                  </Box>
                </Link>
              </Tooltip>
            </Box>
          </Toolbar>
          {DIALOG_DRAWER}
        </Container>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;

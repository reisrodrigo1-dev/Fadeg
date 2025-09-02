import Link from "next/link";
import {
  FC,
  Fragment,
  ReactElement,
  useCallback,
  useEffect,
  useState,
} from "react";
import { Badge, Box, Button, Dialog, Drawer, styled } from "@mui/material";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  Clear,
  KeyboardArrowDown,
  Person,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import clsx from "clsx";
import Icon from "components/icons";
import { layoutConstant } from "utils/constants";
import MiniCart from "components/MiniCart";
import Category from "components/icons/Category";
import { Paragraph } from "components/Typography";
import MobileMenu from "components/navbar/MobileMenu";
import { FlexBetween, FlexBox } from "components/flex-box";
import CategoryMenu from "components/categories/CategoryMenu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Tooltip from "@mui/material/Tooltip";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { useSession, signOut } from "next-auth/react";
import HelpIcon from "@mui/icons-material/Help";
import axios from "axios";
import BipeIcon from "components/icons/BipeIcon";
import DescriptionIcon from "@mui/icons-material/Description";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import useCartStore from "store/useCartStore";
import LastOrders from "components/LastOrders";
import Image from "next/image";
import SignupModal from "pages-sections/sessions/SignupModal";
import LoginModal from "pages-sections/sessions/LoginModal";
import useSignoutStore from "store/useSignoutStore";

// styled component
export const HeaderWrapper = styled(Box)(({ theme }) => ({
  zIndex: 3,
  position: "relative",
  height: layoutConstant.headerHeight,
  transition: "height 250ms ease-in-out",
  background: theme.palette.background.paper,
  [theme.breakpoints.down("sm")]: {
    height: layoutConstant.mobileHeaderHeight,
  },
}));

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

const StyledContainer = styled(Container)({
  gap: 2,
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

// ==============================================================
type HeaderProps = {
  isFixed?: boolean;
  className?: string;
  searchInput: ReactElement;
};
// ==============================================================

const Header: FC<HeaderProps> = ({ isFixed, className, searchInput }) => {
  const theme = useTheme();
  const [userConfigs, setUserConfigs] = useState<any>();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogSignUpOpen, setDialogSignupOpen] = useState(false);
  const [sidenavOpen, setSidenavOpen] = useState(false);
  const [searchBarOpen, setSearchBarOpen] = useState(false);
  const [openModalLastOrders, setOpenModalLastOrders] = useState(false);
  const [lastOrders, setLastOrders] = useState<any>([]);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const downMd = useMediaQuery(theme.breakpoints.down(1150));

  const toggleDialog = () => setDialogOpen(!dialogOpen);
  const toggleDialogSignup = () => setDialogSignupOpen(!dialogSignUpOpen);
  const toggleSidenav = () => setSidenavOpen(!sidenavOpen);
  const toggleSearchBar = () => setSearchBarOpen(!searchBarOpen);

  const { data: session } = useSession();
  const { handleSignOut } = useSignoutStore();
  const [cartProducts, fetchCartItems] = useCartStore((state) => [
    state.cartProducts,
    state.fetchCartItems,
  ]);

  const handleOrdersModal = () => setOpenModalLastOrders(true);
  const handleCloseOrdersModal = () => setOpenModalLastOrders(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  const open = Boolean(anchorEl);

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
    fetchCartItems(session);
  }, [
    cartProducts.length,
    fetchCartItems,
    fetchOrdersList,
    session,
    session?.user?.CustomerId,
    session?.user?.Token,
    setUserConfigs,
    sidenavOpen,
  ]);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // LOGIN AND MINICART DRAWER
  const DIALOG_DRAWER = (
    <Fragment>
      {!session && (
        <>
          <Dialog
            scroll="body"
            open={dialogOpen}
            fullWidth={isMobile}
            onClose={toggleDialog}
            sx={{ zIndex: 999 }}
          >
            <LoginModal
              handleModal={{
                modalSignUp: toggleDialogSignup,
                modalLogin: toggleDialog,
              }}
            />
          </Dialog>
          <Dialog
            scroll="body"
            open={dialogSignUpOpen}
            fullWidth={isMobile}
            onClose={toggleDialogSignup}
            sx={{ zIndex: 999 }}
          >
            <SignupModal
              handleModal={{
                modalSignUp: toggleDialogSignup,
                modalLogin: toggleDialog,
              }}
            />
          </Dialog>
        </>
      )}

      <Drawer
        open={sidenavOpen}
        anchor="right"
        onClose={toggleSidenav}
        sx={{ zIndex: 9999 }}
      >
        <MiniCart toggleSidenav={toggleSidenav} />
      </Drawer>
    </Fragment>
  );

  // FOR SMALLER DEVICE
  if (downMd) {
    const ICON_STYLE = { color: "grey.600", fontSize: 20 };

    return (
      <HeaderWrapper className={clsx(className)}>
        <StyledContainer>
          <FlexBetween width="100%">
            {/* LEFT CONTENT - NAVIGATION ICON BUTTON */}
            <Box flex={1}>
              <MobileMenu />
            </Box>

            {/* MIDDLE CONTENT - LOGO */}
            <Link href="/">
              <Image
                priority
                width={140}
                height={60}
                src="/logofdg.png"
                alt="logo"
              />
            </Link>

            {/* RIGHT CONTENT - LOGIN, CART, SEARCH BUTTON */}
            <FlexBox justifyContent="end" flex={1}>
              <Box component={IconButton} onClick={toggleSearchBar}>
                <Icon.Search sx={ICON_STYLE} />
              </Box>

              <Box component={Button} onClick={toggleSidenav}>
                <Badge badgeContent={cartProducts.length} color="primary">
                  <ShoppingCartOutlined
                    sx={{ color: "grey.600", fontSize: 23 }}
                  />
                </Badge>
              </Box>
            </FlexBox>
          </FlexBetween>

          {/* SEARCH FORM DRAWER */}
          <Drawer
            open={searchBarOpen}
            anchor="top"
            onClose={toggleSearchBar}
            sx={{ zIndex: 9999 }}
          >
            <Box sx={{ width: "auto", padding: 2, height: "100vh" }}>
              <FlexBetween mb={1}>
                <Paragraph>Pesquisar no MeuCurso</Paragraph>

                <IconButton onClick={toggleSearchBar}>
                  <Clear />
                </IconButton>
              </FlexBetween>

              {/* CATEGORY BASED SEARCH FORM */}
              {searchInput}
            </Box>
          </Drawer>

          {/* LOGIN FORM DIALOG AND CART SIDE BAR  */}
          {DIALOG_DRAWER}
        </StyledContainer>
      </HeaderWrapper>
    );
  }

  return (
    <HeaderWrapper className={clsx(className)}>
      <StyledContainer>
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
        {/* LEFT CONTENT - LOGO AND CATEGORY */}
        <FlexBox mr={2} minWidth="170px" alignItems="center">
          <Link href="/">
            <Image
              priority
              width={140}
              height={60}
              src="/logofdg.png"
              alt="logo"
            />
          </Link>

          {/* SHOW DROP DOWN CATEGORY BUTTON WHEN HEADER FIXED - OCULTO */}
          {/* {isFixed && (
            <CategoryMenu>
              <FlexBox color="grey.600" alignItems="center" ml={2}>
                <Button color="inherit">
                  <Category fontSize="small" color="inherit" />
                  <KeyboardArrowDown fontSize="small" color="inherit" />
                </Button>
              </FlexBox>
            </CategoryMenu>
          )} */}
        </FlexBox>

        {/* SEARCH FORM */}
        <FlexBox justifyContent="center" flex="1 1 0">
          {searchInput}
        </FlexBox>

        {/* LOGIN AND CART BUTTON */}
        <FlexBox gap={1.5} alignItems="center">
          {!session && (
            <>
              <Tooltip data-testid="login-button" title="Entrar">
                <Box
                  component={Button}
                  p={1.25}
                  bgcolor="grey.200"
                  onClick={toggleDialog}
                  color={"grey"}
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
              <Tooltip title="Sua conta">
                <Box
                  onClick={handleClick}
                  component={Button}
                  p={0.5}
                  bgcolor="grey.200"
                >
                  <p style={{ fontSize: "10px", marginLeft: "5px" }}>
                    Ola! {session?.user?.Name}
                  </p>
                  {/* <Box color={"grey"} component={IconButton}> */}
                  <Person sx={{ color: "grey", margin: 1 }} />
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
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
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
              <Box
                p={1.25}
                bgcolor="grey.200"
                color={"grey"}
                component={Button}
              >
                <BipeIcon />
              </Box>
            </Link>
          </Tooltip>
          <Tooltip title="Central de Ajuda">
            <Box
              color={"grey"}
              p={1.25}
              bgcolor="grey.200"
              component={Button}
              href="/central-de-ajuda"
            >
              <HelpIcon />
            </Box>
          </Tooltip>

          <Badge badgeContent={cartProducts?.length} color="primary">
            <Tooltip title="Carrinho">
              <Box
                data-testid="cart-button"
                color={"grey"}
                p={1.25}
                bgcolor="grey.200"
                component={Button}
                onClick={toggleSidenav}
              >
                <ShoppingCartIcon />
              </Box>
            </Tooltip>
          </Badge>
        </FlexBox>

        {/* LOGIN FORM DIALOG AND CART SIDE BAR  */}
        {DIALOG_DRAWER}
      </StyledContainer>
    </HeaderWrapper>
  );
};

export default Header;

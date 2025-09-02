import { FC, useEffect, useState } from "react";
import Link from "next/link";
import {
  Box,
  Grid,
  Modal,
  styled,
  Button,
  debounce,
  Checkbox,
  TextField,
  IconButton,
  FormControlLabel,
  ClickAwayListener,
} from "@mui/material";
import { H1, Paragraph, Span } from "./Typography";
import { FlexRowCenter } from "./flex-box";
import Facebook from "./icons/Facebook";
import { Twitter, Instagram, Google, Clear } from "@mui/icons-material";

// styled components
const Wrapper = styled(Box)<{ img: string }>(({ theme, img }) => ({
  top: "50%",
  padding: 0,
  left: "50%",
  width: "100%",
  maxWidth: 1020,
  height: "auto",
  borderRadius: 8,
  outline: "none",
  position: "absolute",
  boxShadow: theme.shadows[3],
  transform: "translate(-50%, -50%)",
  backgroundColor: theme.palette.background.paper,
  [theme.breakpoints.between("sm", "md")]: { maxWidth: 620, padding: 24 },
  [theme.breakpoints.up("md")]: {
    padding: 32,
    height: 550,
    backgroundImage: `url(${img})`,
    backgroundRepeat: "no-repeat",
    //   backgroundSize: "contain",
    backgroundPosition: "left",
  },
}));

// ======================================================
type Props = { image?: string };
// ======================================================

const NewsletterLogin: FC<Props> = ({
  image = "/assets/images/newsletter/bg-test.png",
}) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    debounce(() => setOpen(true), 200)();
  }, []);

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ zIndex: 999999999 }}
      >
        <Wrapper img={image}>
          <Grid container spacing={2}>
            <Grid
              item
              lg={6}
              md={6}
              display={{ md: "flex", xs: "none" }}
            />
            <Grid item lg={6} md={6} xs={12} alignItems="center">
              <Box textAlign="center" p={3}>
                <Paragraph
                  color="primary.main"
                  fontSize={25}
                  fontWeight={700}
                >
                  Atenção!
                </Paragraph>

                <Paragraph mt={10} mb={10}>
                  Informamos que a nossa loja possui agora um{" "}
                  <Span sx={{ fontWeight: "bold" }} color="primary.main">
                    novo site
                  </Span>{" "}
                  . A senha para a Área do Aluno e para o site agora são a{" "}
                  <Span sx={{ fontWeight: "bold" }} color="primary.main">
                    mesma
                  </Span>{" "}
                  . Se você não se recorda da sua senha da Área do Aluno,
                  clique no botão abaixo para recuperá-la:
                </Paragraph>
                <Button color="error" variant="contained">
                  <Link
                    target="_blank"
                    href={
                      "http://aluno.fadeg.com.br/Account/NewPassword/"
                    }
                  >
                    Recuperar senha
                  </Link>
                </Button>
                <Paragraph mt={10}>Atenciosamente, MeuCurso</Paragraph>
              </Box>
            </Grid>
          </Grid>

          <IconButton
            onClick={handleClose}
            sx={{ position: "absolute", top: 8, right: 8 }}
          >
            <Clear sx={{ color: "grey.900" }} />
          </IconButton>
        </Wrapper>
      </Modal>
    </ClickAwayListener>
  );
};

export default NewsletterLogin;

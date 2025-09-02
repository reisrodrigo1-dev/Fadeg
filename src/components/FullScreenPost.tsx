import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { Box, Container } from "@mui/material";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { setDefaultOptions } from "date-fns";
import Image from "next/image";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenPost({
  open,
  setOpen,
  iconColor,
  bgColor,
  color,
  postTitle,
  postImg,
  teacherName,
  postDate,
  postContent,
  postDateAtt,
}): any {
  const handleClose = () => {
    setOpen(false);
  };

  setDefaultOptions({ locale: ptBR });

  return (
    <React.Fragment>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative", backgroundColor: bgColor }}>
          <Toolbar>
            <IconButton
              sx={{ color: iconColor }}
              edge="start"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography
              sx={{
                ml: 2,
                display: "block",
                margin: "0 auto",
                color: color,
              }}
              variant="h6"
              component="div"
              textAlign={"center"}
            >
              {postTitle}
            </Typography>
          </Toolbar>
        </AppBar>
        <Container>
          <Box display="flex">
            <Image
              style={{
                maxWidth: "100dvw",
                height: "45vh",
                margin: "0 auto",
                objectFit: "cover",
                marginTop: "5rem",
              }}
              src={postImg}
              alt={postTitle}
            />
          </Box>
          <p style={{ textAlign: "center" }}>{teacherName}</p>
          <p style={{ textAlign: "center", fontStyle: "italic" }}>
            Postado em:{" "}
            {postDate &&
              format(new Date(postDate), "dd 'de' LLLL 'de' yyyy")}{" "}
            - Atualizado em:
            {postDateAtt &&
              format(new Date(postDateAtt), "dd 'de' LLLL 'de' yyyy")}
            ;
          </p>
          <div
            style={{ marginBottom: "5rem" }}
            dangerouslySetInnerHTML={{
              __html: postContent,
            }}
          />
        </Container>
      </Dialog>
    </React.Fragment>
  );
}

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  CircularProgress,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
} from "@mui/material";
import { H5 } from "./Typography";
import { ExpandMore } from "@mui/icons-material";
import Link from "next/link";

const statusColors = {
  1: "blue",
  2: "orange",
  4: "green",
  5: "red",
};

const statusName = {
  1: "Em Criação",
  2: "Pagamento Pendente",
  4: "Pago",
  5: "Cancelado",
};

const LastOrders = ({
  lastOrders,
  openModalLastOrders,
  handleCloseOrdersModal,
  loading,
}) => {
  return (
    <Dialog
      fullWidth={true}
      maxWidth={"lg"}
      open={openModalLastOrders}
      onClose={handleCloseOrdersModal}
    >
      <DialogTitle>
        <H5>Meus Pedidos</H5>
      </DialogTitle>
      <DialogContent>
        {loading && <CircularProgress />}
        {!loading && (
          <>
            {lastOrders.map((item) => (
              <div key={item.OrderId}>
                <Accordion
                  sx={{
                    mb: 5,
                    borderLeft: `7px solid ${
                      statusColors[item.OrderStatusId] || "transparent"
                    }`,
                  }}
                >
                  <AccordionSummary expandIcon={<ExpandMore />}>
                    Pedido :
                    <span style={{ fontWeight: "bold", marginRight: 10 }}>
                      #{item.OrderId}
                    </span>
                    Status : {statusName[item.OrderStatusId]}
                  </AccordionSummary>
                  <AccordionDetails>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={3}>
                        <p style={{ fontWeight: "bold" }}>Produtos</p>
                        {item.Items.map((it, index) => (
                          <div key={index}>
                            <p>{it.ProductName}</p>
                          </div>
                        ))}
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <p style={{ fontWeight: "bold" }}>Forma de pagamento</p>
                        <p>
                          {item.OperatorStr === "OpenPix"
                            ? "Pix"
                            : "Cartão de Crédito"}
                        </p>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <p style={{ fontWeight: "bold" }}>Valor total</p>
                        <p>{item.OriginalPriceMoney}</p>
                      </Grid>
                      {item.OperatorStr === "OpenPix" && (
                        <Grid item xs={12} md={3}>
                          <p style={{ fontWeight: "bold" }}>
                            Link para pagamento
                          </p>
                          <p>
                            <Link
                              target="_blank"
                              href={
                                item.Financial.OrderFinancialPayments[0].Link
                              }
                            >
                              <span
                                style={{
                                  textDecoration: "underline",
                                  color: "blue",
                                }}
                              >
                                {item.Financial.OrderFinancialPayments[0].Link}
                              </span>
                            </Link>
                          </p>
                        </Grid>
                      )}
                    </Grid>
                  </AccordionDetails>
                </Accordion>
              </div>
            ))}
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default LastOrders;

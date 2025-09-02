import { Box, Grid } from "@mui/material";
import { H2, Paragraph } from "components/Typography";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";


export interface AttributesProps { attributes: [{}], color: string }

const Attributes = ({ attributes, color }: AttributesProps) => {
    return (
        <Box display={'flex'}
            sx={{
                mt: '1rem',
                justifyContent: { xs: 'center', md: 'space-evenly' },
                backgroundColor: "#D9D9D9",
                color: "#494748",
                borderRadius: "10px",
                flexDirection: { xs: 'column', md: 'row' }
            }}
            p={3}
            alignItems={'center'}
        >
            {attributes.map(
                (item, index) =>
                    Object.values(item)[0] && (
                        <Box
                            minWidth={150}
                            key={index}
                            width={'100%'}
                            textAlign={"center"}
                            sx={{
                                borderBottom: { xs: "1px solid white", md: "none" },
                                borderRight: { xs: "none", md: "1px solid white" },
                                height: { xs: "auto", md: "170px" },
                                p: { xs: 3, md: 0 },
                                ":last-child": {
                                    borderRight: "none",
                                    borderBottom: "none",
                                },
                            }}
                        >

                            <CheckCircleIcon sx={{ color, fontSize: 40 }} />
                            <H2 sx={{ fontSize: { md: "3rem" } }}>
                                {(Object.values(item)[0] as string) || ""}
                            </H2>
                            <Paragraph sx={{ fontWeight: "bold", fontSize: "18px" }}>
                                {(Object.values(item)[1] as string) || ""}
                            </Paragraph>
                        </Box>
                    ),
            )}
        </Box>
    );
};

export { Attributes }
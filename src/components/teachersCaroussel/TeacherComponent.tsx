import { Box, Chip, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const TeacherComponent = ({ teacher }: {teacher: Teacher}) => {
    const [isHidden, setIsHidden] = useState({
        showTextContainer: false,
        expandText: false,
    });

    const { expandText, showTextContainer } = isHidden;

    const insta = "meucursooficial";

    const toggleHidden = (type: "container" | "text") => {
        setIsHidden((prevState) => {
            switch (type) {
                case "container":
                    return { ...prevState, showTextContainer: !prevState.showTextContainer };
                case "text":
                    return { ...prevState, expandText: !prevState.expandText };
                default:
                    return prevState;
            }
        });
    };

    const contentRef = useRef<HTMLDivElement>(null);
    const [contentHeight, setContentHeight] = useState(0);

    useEffect(() => {
        if (contentRef.current) {
            setContentHeight(contentRef.current.scrollHeight);
        }
    }, [expandText, teacher.ResumeOverview]);


    return (
        <Box
            display="flex"
            flexDirection="column"
            onMouseEnter={() => toggleHidden("container")}
            onMouseLeave={() => toggleHidden("container")}
            onMouseDown={() => toggleHidden('text')}
            sx={{ cursor: "pointer", maxWidth: 300, width: "100%" }}
            width={'max-content'}
            alignItems={'center'}
        >
            {/* Container da imagem */}
            <Box position="relative" sx={{
                width: 200, height: 200, overflow: "hidden",
                display: 'flex', alignItems: "end", justifyContent: "center"
            }}>
                <motion.div
                    initial={{ scale: 1, filter: "grayscale(100%) contrast(40%)" }}
                    animate={{
                        scale: showTextContainer ? 1.05 : 1,
                        filter: showTextContainer
                            ? "grayscale(0%) contrast(100%)"
                            : "grayscale(100%) contrast(40%)",
                    }}
                    transition={{ duration: 0.5 }}
                    style={{ width: 200, height: 200, }}
                >
                    <Image
                        src={teacher?.TeacherFormalPhotoFileUrl ?? ""}
                        fill
                        alt={teacher?.Name ?? ""}
                        style={{ objectFit: "cover" }}
                    />
                </motion.div>
            </Box>
            {/* Nome do professor */}
            <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: showTextContainer ? 0 : 1 }}
                transition={{ duration: 0.5 }}
            >
                <Typography
                    fontSize={24}
                    fontWeight={700}
                    color="whitesmoke"
                    textAlign="center"
                >
                    {teacher.Name}
                </Typography>
            </motion.div>
            {/* Container do resumo */}
            <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{
                    opacity: showTextContainer ? 1 : 0,
                    height: showTextContainer
                        ? expandText
                            ? contentHeight
                            : 150
                        : 0,
                }}
                transition={{ duration: 0.5 }}
                style={{
                    overflow: "hidden",
                    cursor: "pointer",
                    maxWidth: 350,
                    borderRadius: 16
                }}
            >
                <Box
                    sx={{
                        backgroundColor: "white",
                        borderRadius: "16px",
                        display: "flex",
                        flexDirection: "column",
                        width: "max-content",
                        marginBottom: -5,
                        position: "relative",
                        borderTopLeftRadius: '20px',
                        borderTopRightRadius: '20px',
                        zIndex: 10
                    }}
                >
                    <Chip
                        color="secondary"
                        label={teacher.Name}
                        sx={{
                            fontSize: 24,
                            maxWidth: 300,
                            height: "auto",
                            "& .MuiChip-label": {
                                display: "block",
                                whiteSpace: "normal",
                            },
                        }}
                    />
                    <Link
                        href={`https://instagram.com/${teacher?.Instagram ?? "meucursooficial"}`}
                        target="_blank"
                        style={{
                            textAlign: "start",
                            fontSize: 18,
                            fontWeight: 700,
                            paddingLeft: ".75rem",
                        }}
                    >
                        @{teacher?.Instagram ?? "meucursooficial"}
                    </Link>
                </Box>
                <Box
                    ref={contentRef}
                    sx={{
                        overflow: "hidden",
                        position: "relative",
                        backgroundColor: "#E8E5E5",
                        padding: "16px",
                        paddingTop: "42px",
                        paddingBottom: "42px",
                        textAlign: "start",
                        borderRadius: "16px"
                    }}
                >
                    <Typography
                        sx={{
                            overflow: "hidden",
                            textJustify: "inter-word",
                            textAlign: "justify",
                            textOverflow: "ellipsis",
                        }}
                    >
                        {teacher.About ?? "O professor não possui um resumo"}
                    </Typography>
                </Box>
            </motion.div>
        </Box>
    );
};

export { TeacherComponent };

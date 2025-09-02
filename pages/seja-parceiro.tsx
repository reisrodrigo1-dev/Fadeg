import styled from "@emotion/styled";
import {
        AttachMoney,
        AttachMoneyOutlined,
        AttachMoneyRounded,
        ChatBubble,
        GraphicEqTwoTone,
        MiscellaneousServices,
        Money,
        PermPhoneMsg,
        PermPhoneMsgOutlined,
        PlayArrow,
        PlayCircle,
        PlayCircleOutline,
        Send,
        Settings,
        SettingsOutlined,
        SouthAmerica,
        TrendingUp,
        Upload,
        UploadOutlined,
        Language,
        BarChart,
        CameraAlt,
        Favorite,
        Share,
        Visibility,
        Notifications,
        Star,
} from "@mui/icons-material";
import { Box, Container, Grid, Typography, Card, CardContent } from "@mui/material";
import ShopLayout1 from "components/layouts/ShopLayout1";
import SEO from "components/SEO";
import { H1, H2 } from "components/Typography";
import type { ReactNode } from "react";

interface Steps {
        step: number;
        title: string;
        content: { icon: ReactNode; text: string }[];
}

const MainContainer = styled(Container)({
        backgroundColor: "#ffffff",
        minHeight: "100vh",
        padding: 0,
        maxWidth: "100% !important",
        width: "100%",
        position: "relative",
        "&::before": {
                content: '""',
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: `
                        radial-gradient(circle at 20% 80%, rgba(220, 38, 38, 0.03) 0%, transparent 50%),
                        radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.03) 0%, transparent 50%),
                        radial-gradient(circle at 40% 40%, rgba(168, 85, 247, 0.02) 0%, transparent 50%),
                        linear-gradient(135deg, rgba(220, 38, 38, 0.01) 0%, rgba(59, 130, 246, 0.01) 100%)
                `,
                backgroundSize: "100% 100%, 100% 100%, 100% 100%, 100% 100%",
                zIndex: -2,
                pointerEvents: "none",
        },
        "&::after": {
                content: '""',
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: `
                        url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23dc2626' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"),
                        url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='0.015'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
                `,
                backgroundPosition: "0 0, 30px 30px",
                backgroundSize: "60px 60px, 40px 40px",
                zIndex: -1,
                pointerEvents: "none",
        },
});

const VideoSection = styled(Box)({
        width: "100vw",
        marginLeft: "calc(-50vw + 50%)",
        marginBottom: "3rem",
        position: "relative",
        overflow: "hidden",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12)",
        animation: "videoReveal 1.5s ease-out",
        "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "linear-gradient(45deg, rgba(220, 38, 38, 0.1), rgba(59, 130, 246, 0.1))",
                opacity: 0,
                animation: "overlayPulse 4s ease-in-out infinite",
                pointerEvents: "none",
                zIndex: 1,
        },
        "@keyframes videoReveal": {
                "0%": { 
                        transform: "scale(0.9) translateY(50px)",
                        opacity: 0,
                },
                "100%": { 
                        transform: "scale(1) translateY(0)",
                        opacity: 1,
                },
        },
        "@keyframes overlayPulse": {
                "0%, 100%": { opacity: 0 },
                "50%": { opacity: 0.1 },
        },
});

const VideoContainer = styled(Box)({
        position: "relative",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "100%",
        background: "linear-gradient(135deg, #1e1e1e 0%, #000000 100%)",
});

const VideoElement = styled("video")({
        width: "100%",
        height: "auto",
        maxWidth: "100%",
        border: "none",
        display: "block",
});

const TitleSection = styled(Box)({
        textAlign: "center",
        marginBottom: "3rem",
});

const MainTitle = styled(Typography)({
        fontSize: "2.5rem",
        fontWeight: 700,
        color: "#1a1a1a",
        marginBottom: "1rem",
        lineHeight: 1.2,
});

const SubTitle = styled(Typography)({
        fontSize: "1.8rem",
        fontWeight: 600,
        color: "#dc2626",
        marginBottom: "1.5rem",
});

const Description = styled(Typography)({
        fontSize: "1.1rem",
        color: "#6b7280",
        marginBottom: "1rem",
        lineHeight: 1.6,
});

const SectionTitle = styled(Typography)({
        fontSize: "2rem",
        fontWeight: 700,
        color: "#1a1a1a",
        textAlign: "center",
        marginBottom: "1rem",
        animation: "titleSlide 1s ease-out",
        position: "relative",
        "&::after": {
                content: '""',
                position: "absolute",
                bottom: "-10px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "60px",
                height: "3px",
                background: "linear-gradient(90deg, #dc2626, #ea580c)",
                borderRadius: "2px",
                animation: "underlineGrow 2s ease-in-out infinite",
        },
        "@keyframes titleSlide": {
                "0%": { 
                        opacity: 0,
                        transform: "translateY(-30px)",
                },
                "100%": { 
                        opacity: 1,
                        transform: "translateY(0)",
                },
        },
        "@keyframes underlineGrow": {
                "0%, 100%": { 
                        width: "60px",
                        opacity: 1,
                },
                "50%": { 
                        width: "80px",
                        opacity: 0.7,
                },
        },
});

const SectionDescription = styled(Typography)({
        fontSize: "1.1rem",
        color: "#6b7280",
        textAlign: "center",
        marginBottom: "3rem",
        lineHeight: 1.6,
        animation: "textFadeIn 1s ease-out 0.3s both",
        position: "relative",
        "&::before": {
                content: '""',
                position: "absolute",
                top: "50%",
                left: "-20px",
                width: "10px",
                height: "2px",
                background: "#dc2626",
                animation: "lineSlide 2s ease-in-out infinite",
        },
        "&::after": {
                content: '""',
                position: "absolute",
                top: "50%",
                right: "-20px",
                width: "10px",
                height: "2px",
                background: "#dc2626",
                animation: "lineSlide 2s ease-in-out infinite reverse",
        },
        "@keyframes textFadeIn": {
                "0%": { 
                        opacity: 0,
                        transform: "translateY(20px)",
                },
                "100%": { 
                        opacity: 1,
                        transform: "translateY(0)",
                },
        },
        "@keyframes lineSlide": {
                "0%, 100%": { 
                        width: "10px",
                        opacity: 1,
                },
                "50%": { 
                        width: "20px",
                        opacity: 0.5,
                },
        },
});

const StepCard = styled(Card)({
        height: "100%",
        padding: "2rem",
        border: "1px solid #e5e7eb",
        borderRadius: "12px",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
        transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        background: "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(10px)",
        animation: "cardPulse 4s ease-in-out infinite",
        "&:hover": {
                boxShadow: "0 8px 25px rgba(220, 38, 38, 0.2)",
                transform: "translateY(-8px) scale(1.02) rotateX(5deg)",
                background: "rgba(255, 255, 255, 0.98)",
                "& .step-number": {
                        transform: "scale(1.1) rotate(360deg)",
                        boxShadow: "0 0 20px rgba(220, 38, 38, 0.5)",
                },
        },
        "&:nth-of-type(odd)": {
                animationDelay: "0.5s",
        },
        "&:nth-of-type(even)": {
                animationDelay: "1s",
        },
        "@keyframes cardPulse": {
                "0%, 100%": { 
                        transform: "translateY(0px) scale(1)",
                        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                },
                "50%": { 
                        transform: "translateY(-2px) scale(1.005)",
                        boxShadow: "0 4px 12px rgba(220, 38, 38, 0.1)",
                },
        },
});

const FloatingIcon = styled(Box)({
        position: "fixed",
        color: "#dc2626",
        opacity: 0.15,
        fontSize: "3rem",
        zIndex: 0,
        pointerEvents: "none",
        animation: "complexFloat 8s ease-in-out infinite",
        "@keyframes complexFloat": {
                "0%": { 
                        transform: "translateY(0px) translateX(0px) rotate(0deg) scale(1)",
                        opacity: 0.1,
                },
                "25%": { 
                        transform: "translateY(-30px) translateX(15px) rotate(90deg) scale(1.1)",
                        opacity: 0.2,
                },
                "50%": { 
                        transform: "translateY(-20px) translateX(-10px) rotate(180deg) scale(0.9)",
                        opacity: 0.15,
                },
                "75%": { 
                        transform: "translateY(10px) translateX(20px) rotate(270deg) scale(1.05)",
                        opacity: 0.18,
                },
                "100%": { 
                        transform: "translateY(0px) translateX(0px) rotate(360deg) scale(1)",
                        opacity: 0.1,
                },
        },
        "&:nth-of-type(even)": {
                animation: "reverseFloat 10s ease-in-out infinite",
                "@keyframes reverseFloat": {
                        "0%": { 
                                transform: "translateY(0px) translateX(0px) rotate(0deg) scale(1)",
                                opacity: 0.12,
                        },
                        "30%": { 
                                transform: "translateY(25px) translateX(-20px) rotate(-60deg) scale(0.8)",
                                opacity: 0.2,
                        },
                        "60%": { 
                                transform: "translateY(-15px) translateX(25px) rotate(-120deg) scale(1.2)",
                                opacity: 0.08,
                        },
                        "100%": { 
                                transform: "translateY(0px) translateX(0px) rotate(-360deg) scale(1)",
                                opacity: 0.12,
                        },
                },
        },
});

const StepNumber = styled(Box)({
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        backgroundColor: "#dc2626",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1.5rem",
        fontWeight: 700,
        marginBottom: "1.5rem",
        transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        animation: "numberGlow 3s ease-in-out infinite",
        position: "relative",
        "&::before": {
                content: '""',
                position: "absolute",
                top: "-5px",
                left: "-5px",
                right: "-5px",
                bottom: "-5px",
                borderRadius: "50%",
                background: "linear-gradient(45deg, #dc2626, #ea580c, #dc2626)",
                zIndex: -1,
                opacity: 0.3,
                animation: "ringPulse 2s ease-in-out infinite",
        },
        "@keyframes numberGlow": {
                "0%, 100%": { 
                        boxShadow: "0 0 10px rgba(220, 38, 38, 0.3)",
                        transform: "scale(1)",
                },
                "50%": { 
                        boxShadow: "0 0 20px rgba(220, 38, 38, 0.6)",
                        transform: "scale(1.05)",
                },
        },
        "@keyframes ringPulse": {
                "0%, 100%": { 
                        transform: "scale(1)",
                        opacity: 0.3,
                },
                "50%": { 
                        transform: "scale(1.2)",
                        opacity: 0.1,
                },
        },
});

const StepTitle = styled(Typography)({
        fontSize: "1.25rem",
        fontWeight: 600,
        color: "#1a1a1a",
        marginBottom: "1.5rem",
        lineHeight: 1.3,
});

const StepContent = styled(Box)({
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
});

const ContentItem = styled(Box)({
        display: "flex",
        alignItems: "flex-start",
        gap: "0.75rem",
});

const ContentText = styled(Typography)({
        fontSize: "0.95rem",
        color: "#4b5563",
        lineHeight: 1.5,
});

const Iframe = styled("iframe")({
        alignSelf: "center",
        marginTop: "2rem",
        border: 0,
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
});

export default function SejaParceiroPage() {
        return (
                <ShopLayout1>
                        <SEO
                                title="Seja um parceiro MeuCurso"
                                description="Seja um representante do MeuCurso Educacional"
                        />
                        <MainContainer>
                                {/* Floating Influencer Icons - Primeira camada */}
                                <FloatingIcon sx={{ top: "15%", left: "5%", fontSize: "3rem", color: "#dc2626" }}>
                                        <CameraAlt fontSize="inherit" />
                                </FloatingIcon>
                                <FloatingIcon sx={{ top: "25%", right: "8%", animationDelay: "1s", fontSize: "2.5rem", color: "#3b82f6" }}>
                                        <Favorite fontSize="inherit" />
                                </FloatingIcon>
                                <FloatingIcon sx={{ top: "45%", left: "3%", animationDelay: "2s", fontSize: "3.5rem", color: "#a855f7" }}>
                                        <Share fontSize="inherit" />
                                </FloatingIcon>
                                <FloatingIcon sx={{ top: "60%", right: "5%", animationDelay: "3s", fontSize: "2.8rem", color: "#ea580c" }}>
                                        <Visibility fontSize="inherit" />
                                </FloatingIcon>
                                <FloatingIcon sx={{ top: "75%", left: "7%", animationDelay: "4s", fontSize: "3.2rem", color: "#10b981" }}>
                                        <Notifications fontSize="inherit" />
                                </FloatingIcon>
                                <FloatingIcon sx={{ top: "85%", right: "10%", animationDelay: "5s", fontSize: "2.6rem", color: "#f59e0b" }}>
                                        <Star fontSize="inherit" />
                                </FloatingIcon>

                                {/* Segunda camada de ícones */}
                                <FloatingIcon sx={{ top: "30%", left: "15%", animationDelay: "0.5s", fontSize: "2rem", color: "#ec4899" }}>
                                        <TrendingUp fontSize="inherit" />
                                </FloatingIcon>
                                <FloatingIcon sx={{ top: "50%", right: "15%", animationDelay: "1.5s", fontSize: "2.3rem", color: "#06b6d4" }}>
                                        <PlayCircle fontSize="inherit" />
                                </FloatingIcon>
                                <FloatingIcon sx={{ top: "70%", left: "20%", animationDelay: "2.5s", fontSize: "2.7rem", color: "#8b5cf6" }}>
                                        <ChatBubble fontSize="inherit" />
                                </FloatingIcon>
                                <FloatingIcon sx={{ top: "20%", right: "20%", animationDelay: "3.5s", fontSize: "2.1rem", color: "#f97316" }}>
                                        <Send fontSize="inherit" />
                                </FloatingIcon>

                                {/* Terceira camada - ícones menores */}
                                <FloatingIcon sx={{ top: "40%", left: "25%", animationDelay: "6s", fontSize: "1.8rem", color: "#dc2626", opacity: 0.08 }}>
                                        <AttachMoney fontSize="inherit" />
                                </FloatingIcon>
                                <FloatingIcon sx={{ top: "65%", right: "25%", animationDelay: "7s", fontSize: "1.6rem", color: "#059669", opacity: 0.06 }}>
                                        <BarChart fontSize="inherit" />
                                </FloatingIcon>

                                {/* Video Section */}
                                <VideoSection>
                                        <VideoContainer>
                                                <VideoElement
                                                        autoPlay
                                                        muted
                                                        loop
                                                        playsInline
                                                        disablePictureInPicture
                                                        controlsList="nodownload nofullscreen noremoteplayback"
                                                >
                                                        <source src="/banner-afiliados.mp4" type="video/mp4" />
                                                        Seu navegador não suporta o elemento de vídeo.
                                                </VideoElement>
                                        </VideoContainer>
                                </VideoSection>

                                {/* Content Container */}
                                <Box sx={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
                                        {/* Como funciona Section */}
                                        <Box sx={{ marginBottom: "4rem" }}>
                                                <SectionTitle>Como funciona?</SectionTitle>
                                                <SectionDescription>
                                                        É muito simples! Faça o cadastro online, será gerado um cupom personalizado e, a cada venda realizada
                                                        com esse cupom em nosso site, é gerada um comissionamento pela indicação do MeuCurso.
                                                </SectionDescription>
                                                <Description sx={{ textAlign: "center", fontWeight: 600 }}>
                                                        Você pode indicar o MeuCurso e ser remunerado pelas vendas diretas geradas por isso!
                                                </Description>
                                        </Box>

                                        {/* Steps Section */}
                                        <Grid container spacing={4} sx={{ marginBottom: "4rem" }}>
                                                {steps.map((item) => (
                                                        <Grid item xs={12} md={4} key={item.step}>
                                                                <StepCard>
                                                                        <CardContent sx={{ padding: 0 }}>
                                                                                <StepNumber className="step-number">{item.step}</StepNumber>
                                                                                <StepTitle>{item.title}</StepTitle>
                                                                                <StepContent>
                                                                                        {item.content.map((content, i) => (
                                                                                                <ContentItem key={`${item.step}-${i}`}>
                                                                                                        {content.icon}
                                                                                                        <ContentText>{content.text}</ContentText>
                                                                                                </ContentItem>
                                                                                        ))}
                                                                                </StepContent>
                                                                        </CardContent>
                                                                </StepCard>
                                                        </Grid>
                                                ))}
                                        </Grid>

                                        {/* Cadastro Section */}
                                        <Box sx={{ textAlign: "center", marginBottom: "2rem" }}>
                                                <SectionTitle>Cadastro</SectionTitle>
                                                <Description>
                                                        Após realizar login na Plataforma e gerar usuário e senha
                                                </Description>
                                        </Box>

                                        <Box
                                                sx={{
                                                        maxWidth: 845,
                                                        maxHeight: 800,
                                                        overflow: "hidden",
                                                        borderRadius: "12px",
                                                        marginTop: "2rem",
                                                        alignSelf: "center",
                                                        mx: "auto",
                                                }}
                                        >
                                                <Iframe
                                                        width="850px"
                                                        height="850px"
                                                        src="https://forms.office.com/r/Xj2ruqV5pb?embed=true"
                                                        allowFullScreen
                                                        title="Form"
                                                />
                                        </Box>
                                </Box>
                        </MainContainer>
                </ShopLayout1>
        );
}
const steps: Steps[] = [
        {
                step: 1,
                title: "Cadastro Online do Influenciador",
                content: [
                        {
                                icon: <Language sx={{ color: "#dc2626" }} />,
                                text: `Acesse: meucurso.com.br/influenciador. Preencha o cadastro e aceite online dos termos da Plataforma`,
                        },
                        {
                                icon: <PermPhoneMsgOutlined sx={{ color: "#dc2626" }} />,
                                text: `Se precisar de alguma ajuda ou desejar tirar dúvidas, nossa equipe Comercial estará à disposição`,
                        },
                ],
        },
        {
                step: 2,
                title: `Ativação do cadastro e liberação do cupom e painel de acompanhamento das vendas no BIPE.`,
                content: [
                        {
                                icon: <PlayCircleOutline sx={{ color: "#ea580c" }} />,
                                text: `Recebido o cadastro, nossa equipe ativará seu cupom e o acesso ao Painel de vendas.`,
                        },
                        {
                                icon: <SouthAmerica sx={{ color: "#ea580c" }} />,
                                text: `Ingresso na comunidade de Influenciadores do MeuCurso para recebimento do material de divulgação, notícias, lançamentos e orientações.`,
                        },
                ],
        },
        {
                step: 3,
                title: `Apuração dos créditos e repasse ao Influenciador`,
                content: [
                        {
                                icon: <BarChart sx={{ color: "#dc2626" }} />,
                                text: `O painel de vendas dá visibilidades online de cada venda realizada, com a indicação da comissão de 10% sobre a venda líquida efetiva.`,
                        },
                        {
                                icon: <AttachMoneyRounded sx={{ color: "#dc2626" }} />,
                                text: `A cada fechamento do período mensal de apuração... o influenciador poderá requerer o resgate da comissão em sua conta bancária.`,
                        },
                ],
        },
];

import ShopLayout1 from "components/layouts/ShopLayout1";
import api from "utils/__api__/meu-curso";
import { Box, Button, Container, Grid, styled } from "@mui/material";
import SEO from "components/SEO";
import { H1, H2, Paragraph } from "components/Typography";
import Image from "next/image";
import { css, keyframes, jsx } from "@emotion/react";
// import pres_oab_1 from '../public/assets/images/presentes/pres_oab_1.png'
// import pres_oab_2 from '../public/assets/images/presentes/pres_oab_2.png'
// import pres_pos from '../public/assets/images/presentes/pres_pos.png'
// import pres_assinaturas from '../public/assets/images/presentes/pres_assinaturas.png'
import banner_6anos from "../public/assets/images/banners/banner_7anos.png";
import banner_6anos_mobile from "../public/assets/images/banners/banner_7anos_mobile.png";
import seisAnosLogo from "../public/6anos_logo.png";
import { useProducts } from "hooks/useProducts";
import Section6 from "pages-sections/fashion-shop-2/Section6";
import ProductCard18 from "components/product-cards/ProductCard18";
import CustomCarousel from "../components/CustomCarousel";
// import { CarouselCard1 } from "components/carousel-cards";
import desconto from "../public/desconto.png";
import Link from "next/link";
// import { CarouselCard1 } from "components/carousel-cards";


// Gradienty keyframes e classe para CTA animado
const focusInExpandFwd = keyframes`
  0% { letter-spacing: -0.5em; transform: translateZ(-800px); filter: blur(12px); opacity: 0; }
  100% { transform: translateZ(0); filter: blur(0); opacity: 1; }
`;

const ctaAnimStyle = css`
  animation: ${focusInExpandFwd} 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0s 1 normal both;
  font-weight: 800;
  color: #fff;
  background: linear-gradient(90deg, #c62c2d 0%, #574ab9 100%);
  border-radius: 8px;
  padding: 12px 32px;
  font-size: 1.3rem;
  margin: 32px auto 24px auto;
  display: block;
  text-align: center;
  box-shadow: 0 2px 16px 0 rgba(0,0,0,0.18);
  letter-spacing: 0.04em;
`;

const Card = styled(Box)({
	":hover": {
		"& .product-actions": { right: 10 },
		"& .product-view-action": { opacity: 1 },
	},
});

const CardMedia = styled(Box)(({ theme }) => ({
	width: "50%",
	cursor: "pointer",
	overflow: "hidden",
	position: "relative",
	transition: " all .15s",
	"& img": { transition: "0.3s" },
	":hover": {
		"& img": {
			filter: "brightness(0.5)",
		},
		transform: "translateY(-10px)",
		boxShadow: "2px 2px 20px 2px black",
	},
}));
const QuickViewButton = styled(Button)({
	left: 0,
	bottom: 0,
	opacity: 0,
	borderRadius: 0,
	position: "absolute",
	transition: "all 0.5s",
});


// Novo background animado com bolhas
import { useEffect } from "react";
const backgroundStyle: React.CSSProperties = {
  position: "fixed",
  width: "100vw",
  height: "100vh",
  top: 0,
  left: 0,
  margin: 0,
  padding: 0,
  background: "#e8e8e8",
  overflow: "hidden",
  zIndex: -1,
};

const bubbleList = [
  { left: "3%", width: 172, height: 172, bottom: -172, delay: "1s" },
  { left: "5%", width: 103, height: 103, bottom: -103, delay: "2s" },
  { left: "61%", width: 191, height: 191, bottom: -191, delay: "6s" },
  { left: "6%", width: 135, height: 135, bottom: -135, delay: "6s" },
  { left: "13%", width: 186, height: 186, bottom: -186, delay: "2s" },
  { left: "10%", width: 146, height: 146, bottom: -146, delay: "12s" },
  { left: "62%", width: 161, height: 161, bottom: -161, delay: "13s" },
  { left: "31%", width: 167, height: 167, bottom: -167, delay: "18s" },
  { left: "38%", width: 145, height: 145, bottom: -145, delay: "15s" },
  { left: "25%", width: 148, height: 148, bottom: -148, delay: "27s" },
];

const bubbleKeyframes = `
@keyframes animate {
  0% {
	transform: translateY(0) rotate(0deg);
	opacity: 1;
	border-radius: 0;
  }
  100% {
	transform: translateY(-1000px) rotate(720deg);
	opacity: 0;
	border-radius: 50%;
  }
}`;

function AnimatedBackground() {
  useEffect(() => {
	// Adiciona o keyframes globalmente
	const style = document.createElement('style');
	style.innerHTML = bubbleKeyframes;
	document.head.appendChild(style);
	return () => { document.head.removeChild(style); };
  }, []);
  return (
	<ul style={backgroundStyle} className="background">
	  {bubbleList.map((b, i) => (
		<li key={i} style={{
		  position: 'absolute',
		  display: 'block',
		  listStyle: 'none',
		  left: b.left,
		  width: b.width,
		  height: b.height,
		  bottom: b.bottom,
		  background: 'rgba(255,255,255,0.2)',
		  animation: `animate 19s linear infinite`,
		  animationDelay: b.delay,
		}} />
	  ))}
	</ul>
  );
}





// Banner images (ajuste para o banner desejado)
// Substitua pelos caminhos corretos dos banners disponíveis no seu projeto
import bannerRecursoDesktop from "../public/banner_full.png";
import bannerRecursoMobile from "../public/banner_mobile.png";

const areasSegundaFase = [
  "Direito Administrativo",
  "Direito Civil",
  "Direito Constitucional",
  "Direito Empresarial",
  "Direito Penal",
  "Direito do Trabalho",
  "Direito Tributário",
];

export default function RecursoOABPage() {
  // Fetch products for Mentoria de Recursos (categoria 194)
  const { products } = useProducts(api.getProductsById("194"));
  return (
	<>
	  <AnimatedBackground />
	  <ShopLayout1>
		<SEO title="Recurso OAB - MeuCurso" sitename="MeuCurso" />
		{/* Banner responsivo */}
		{/* Banner responsivo: desktop (full) e mobile */}
		<Box
		  position={"relative"}
		  width="100%"
		  maxWidth="1232px"
		  margin="0 auto"
		  sx={{
			borderRadius: 0,
			boxShadow: "0 8px 32px 0 rgba(0,0,0,0.35)",
			overflow: "hidden",
			transition: "transform 0.4s cubic-bezier(.4,2,.6,1)",
			"&:hover": {
			  transform: "scale(1.025)",
			  boxShadow: "0 12px 40px 0 rgba(0,0,0,0.45)",
			},
		  }}
		>
		  <Box display={{ xs: 'none', md: 'block' }}>
			<Image
			  src={bannerRecursoDesktop}
			  alt="Banner Recurso OAB"
			  width={1232}
			  height={340}
			  style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
			  priority
			/>
		  </Box>
		  <Box display={{ xs: 'block', md: 'none' }}>
			<Image
			  src={bannerRecursoMobile}
			  alt="Banner Recurso OAB Mobile"
			  width={400}
			  height={220}
			  style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
			  priority
			/>
		  </Box>
		</Box>

		{/* Texto à esquerda e vídeo à direita (primeiro vídeo) */}
		<Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
		  <Grid container spacing={4} alignItems="center">
			<Grid item xs={12} md={6}>
			  <Box>
				<H1 sx={{
				  mb: 2,
				  color: '#111',
				  fontWeight: 900,
				  fontSize: { xs: 20, md: 28 },
				  lineHeight: 1.1,
				  letterSpacing: '-1px',
				  display: 'flex',
				  flexDirection: 'column',
				  alignItems: 'flex-start',
				  position: 'relative',
				}}>
				  COMO INTERPOR<br />
				  <span style={{
					color: '#fff',
					background: '#c21a38',
					borderRadius: 8,
					padding: '2px 12px',
					fontWeight: 900,
					fontSize: '1.1em',
					marginTop: 6,
					display: 'inline-block',
					boxShadow: '0 2px 12px 0 rgba(0,0,0,0.10)'
				  }}>
					RECURSO NA <span style={{ color: '#fff', textShadow: '0 2px 8px #c21a38' }}>2ª FASE</span>
				  </span>
				</H1>
				<Paragraph sx={{ fontSize: 18, color: "#222", mb: 2 }}>
				  Com a publicação do resultado preliminar da 2ª fase do Exame de Ordem, muitos candidatos desejam avaliar a viabilidade no recurso e as chances de aprovação.<br /><br />
				  Assim, preparamos esse guia especial com todas as orientações, modelos, respostas às dúvidas e acesso à Plataforma de Recurso do MeuCurso Educacional.
				</Paragraph>
			  </Box>
			</Grid>
			<Grid item xs={12} md={6}>
			  <Box sx={{ position: "relative", paddingTop: "56.25%", borderRadius: 8, overflow: "hidden", boxShadow: "0 4px 24px 0 rgba(0,0,0,0.12)" }}>
				<iframe
				  src="https://www.youtube.com/embed/1Q8fG0TtVAY" // Substitua pelo vídeo correto
				  title="Como funciona o recurso OAB"
				  frameBorder="0"
				  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				  allowFullScreen
				  style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
				></iframe>
			  </Box>
			</Grid>
		  </Grid>
		</Container>

	{/* Sessão 1: Insuficiência de nota (label gratuito) */}
	<Container maxWidth="xl" sx={{ mb: 8 }}>
	  <H2 sx={{ color: "#574ab9", mb: 3, textAlign: "center", fontWeight: 800 }}>
		Insuficiência de Nota <span style={{fontSize:16, color:'#fff', background:'#c62c2d', borderRadius:4, padding:'2px 10px', marginLeft:8}}>Gratuito</span>
	  </H2>
	  <Grid container spacing={2} justifyContent="center">
		<Grid item xs={12} md={8}>
		  <Paragraph sx={{ fontSize: 18, color: "#222", textAlign: 'center' }}>
			A Plataforma MeuCurso elabora de forma gratuita e individual os recursos contra reprovação por insuficiência de nota.
		  </Paragraph>
	  <Box mt={4} display="flex" flexWrap="wrap" justifyContent="center" gap={2}>
		{/* Botões das áreas da 2ª Fase com links específicos */}
		<Button
		  component="a"
		  href="http://aluno.fadeg.com.br/Diagnosis/Exams/?c=rfu6T3EhHOoVjNPyOYNMBg==&e=yfYATiaKu/7BCiHJUq9PPw==&t=fDmD281tyshRomztoTXkaQ=="
		  target="_blank"
		  rel="noopener noreferrer"
		  variant="contained"
		  color="primary"
		  sx={{
			minWidth: 220,
			minHeight: 48,
			fontWeight: 700,
			fontSize: 16,
			background: "linear-gradient(90deg, #c62c2d 0%, #574ab9 100%)",
			borderRadius: 2,
			boxShadow: "0 2px 12px 0 rgba(0,0,0,0.10)",
			mb: 1,
			transition: "transform 0.2s",
			'&:hover': {
			  transform: 'scale(1.04)',
			  background: "linear-gradient(90deg, #574ab9 0%, #c62c2d 100%)",
			},
		  }}
		  title="Saiba mais sobre recurso em Administrativo"
		  aria-label="Saiba mais sobre recurso em Administrativo"
		>
		  Administrativo
		</Button>
		<Button
		  component="a"
		  href="http://aluno.fadeg.com.br/Diagnosis/Exams/?c=rfu6T3EhHOoVjNPyOYNMBg==&e=PhT/1CGSQQs8qE/vee+RUw==&t=fDmD281tyshRomztoTXkaQ=="
		  target="_blank"
		  rel="noopener noreferrer"
		  variant="contained"
		  color="primary"
		  sx={{
			minWidth: 220,
			minHeight: 48,
			fontWeight: 700,
			fontSize: 16,
			background: "linear-gradient(90deg, #c62c2d 0%, #574ab9 100%)",
			borderRadius: 2,
			boxShadow: "0 2px 12px 0 rgba(0,0,0,0.10)",
			mb: 1,
			transition: "transform 0.2s",
			'&:hover': {
			  transform: 'scale(1.04)',
			  background: "linear-gradient(90deg, #574ab9 0%, #c62c2d 100%)",
			},
		  }}
		  title="Saiba mais sobre recurso em Civil"
		  aria-label="Saiba mais sobre recurso em Civil"
		>
		  Civil
		</Button>
		<Button
		  component="a"
		  href="http://aluno.fadeg.com.br/Diagnosis/Exams/?c=rfu6T3EhHOoVjNPyOYNMBg==&e=yrhmTMLgOHEJAn1ss26Kew==&t=fDmD281tyshRomztoTXkaQ=="
		  target="_blank"
		  rel="noopener noreferrer"
		  variant="contained"
		  color="primary"
		  sx={{
			minWidth: 220,
			minHeight: 48,
			fontWeight: 700,
			fontSize: 16,
			background: "linear-gradient(90deg, #c62c2d 0%, #574ab9 100%)",
			borderRadius: 2,
			boxShadow: "0 2px 12px 0 rgba(0,0,0,0.10)",
			mb: 1,
			transition: "transform 0.2s",
			'&:hover': {
			  transform: 'scale(1.04)',
			  background: "linear-gradient(90deg, #574ab9 0%, #c62c2d 100%)",
			},
		  }}
		  title="Saiba mais sobre recurso em Constitucional"
		  aria-label="Saiba mais sobre recurso em Constitucional"
		>
		  Constitucional
		</Button>
		<Button
		  component="a"
		  href="http://aluno.fadeg.com.br/Diagnosis/Exams/?c=rfu6T3EhHOoVjNPyOYNMBg==&e=c36B8l3ekUWrEdqcQn9FTQ==&t=fDmD281tyshRomztoTXkaQ=="
		  target="_blank"
		  rel="noopener noreferrer"
		  variant="contained"
		  color="primary"
		  sx={{
			minWidth: 220,
			minHeight: 48,
			fontWeight: 700,
			fontSize: 16,
			background: "linear-gradient(90deg, #c62c2d 0%, #574ab9 100%)",
			borderRadius: 2,
			boxShadow: "0 2px 12px 0 rgba(0,0,0,0.10)",
			mb: 1,
			transition: "transform 0.2s",
			'&:hover': {
			  transform: 'scale(1.04)',
			  background: "linear-gradient(90deg, #574ab9 0%, #c62c2d 100%)",
			},
		  }}
		  title="Saiba mais sobre recurso em Empresarial"
		  aria-label="Saiba mais sobre recurso em Empresarial"
		>
		  Empresarial
		</Button>
		<Button
		  component="a"
		  href="http://aluno.fadeg.com.br/Diagnosis/Exams/?c=rfu6T3EhHOoVjNPyOYNMBg==&e=pCseFvwKWsy+ruKn8YJYog==&t=fDmD281tyshRomztoTXkaQ=="
		  target="_blank"
		  rel="noopener noreferrer"
		  variant="contained"
		  color="primary"
		  sx={{
			minWidth: 220,
			minHeight: 48,
			fontWeight: 700,
			fontSize: 16,
			background: "linear-gradient(90deg, #c62c2d 0%, #574ab9 100%)",
			borderRadius: 2,
			boxShadow: "0 2px 12px 0 rgba(0,0,0,0.10)",
			mb: 1,
			transition: "transform 0.2s",
			'&:hover': {
			  transform: 'scale(1.04)',
			  background: "linear-gradient(90deg, #574ab9 0%, #c62c2d 100%)",
			},
		  }}
		  title="Saiba mais sobre recurso em Penal"
		  aria-label="Saiba mais sobre recurso em Penal"
		>
		  Penal
		</Button>
		<Button
		  component="a"
		  href="http://aluno.fadeg.com.br/Diagnosis/Exams/?c=rfu6T3EhHOoVjNPyOYNMBg==&e=UNQGA7yZDOOVQnAt/6BHFw==&t=fDmD281tyshRomztoTXkaQ=="
		  target="_blank"
		  rel="noopener noreferrer"
		  variant="contained"
		  color="primary"
		  sx={{
			minWidth: 220,
			minHeight: 48,
			fontWeight: 700,
			fontSize: 16,
			background: "linear-gradient(90deg, #c62c2d 0%, #574ab9 100%)",
			borderRadius: 2,
			boxShadow: "0 2px 12px 0 rgba(0,0,0,0.10)",
			mb: 1,
			transition: "transform 0.2s",
			'&:hover': {
			  transform: 'scale(1.04)',
			  background: "linear-gradient(90deg, #574ab9 0%, #c62c2d 100%)",
			},
		  }}
		  title="Saiba mais sobre recurso em Trabalho"
		  aria-label="Saiba mais sobre recurso em Trabalho"
		>
		  Trabalho
		</Button>
		<Button
		  component="a"
		  href="http://aluno.fadeg.com.br/Diagnosis/Exams/?c=rfu6T3EhHOoVjNPyOYNMBg==&e=Ha4GncKsPL4hWNs8sHANSQ==&t=fDmD281tyshRomztoTXkaQ=="
		  target="_blank"
		  rel="noopener noreferrer"
		  variant="contained"
		  color="primary"
		  sx={{
			minWidth: 220,
			minHeight: 48,
			fontWeight: 700,
			fontSize: 16,
			background: "linear-gradient(90deg, #c62c2d 0%, #574ab9 100%)",
			borderRadius: 2,
			boxShadow: "0 2px 12px 0 rgba(0,0,0,0.10)",
			mb: 1,
			transition: "transform 0.2s",
			'&:hover': {
			  transform: 'scale(1.04)',
			  background: "linear-gradient(90deg, #574ab9 0%, #c62c2d 100%)",
			},
		  }}
		  title="Saiba mais sobre recurso em Tributário"
		  aria-label="Saiba mais sobre recurso em Tributário"
		>
		  Tributário
		</Button>
	  </Box>
		</Grid>
	  </Grid>
	</Container>

	{/* Sessão 2: Eliminação por inadequação da peça | Trabalhista (label gratuito) */}
	<Container maxWidth="xl" sx={{ mb: 8 }}>
	  <H2 sx={{ color: "#c62c2d", mb: 3, textAlign: "center", fontWeight: 800 }}>
		Eliminação por Inadequação da Peça | Trabalhista <span style={{fontSize:16, color:'#fff', background:'#574ab9', borderRadius:4, padding:'2px 10px', marginLeft:8}}>Gratuito</span>
	  </H2>
	  <Grid container spacing={2} justifyContent="center">
		<Grid item xs={12} md={8}>
		  <Paragraph sx={{ fontSize: 18, color: "#222", textAlign: 'center' }}>
			Para os alunos da área Trabalhista, no 43º Exame, nossa equipe de professores está auxiliando, gratuitamente, na elaboração de recursos para pedido de correção de peças inadequadas.
		  </Paragraph>
		  <Box mt={4} display="flex" justifyContent="center">
			<Button
			  variant="contained"
			  color="secondary"
			  href="/recurso-ia"
			  sx={{
				minWidth: 220,
				minHeight: 48,
				fontWeight: 700,
				fontSize: 18,
				background: "linear-gradient(90deg, #574ab9 0%, #c62c2d 100%)",
				borderRadius: 2,
				boxShadow: "0 2px 12px 0 rgba(0,0,0,0.10)",
				transition: "transform 0.2s",
				'&:hover': {
				  transform: 'scale(1.04)',
				  background: "linear-gradient(90deg, #c62c2d 0%, #574ab9 100%)",
				},
			  }}
			>
			  Fazer meu recurso
			</Button>
		  </Box>
		</Grid>
	  </Grid>
	</Container>

	{/* Sessão 3: Mentoria de recursos | com professores */}
  <Container maxWidth="xl" sx={{ mb: 8 }}>
	<H2 sx={{ color: "#574ab9", mb: 3, textAlign: "center", fontWeight: 800 }}>
	  Mentoria de Recursos | com Professores
	</H2>
	<Grid container spacing={2} justifyContent="center">
	  <Grid item xs={12} md={8}>
		<Paragraph sx={{ fontSize: 18, color: "#222", textAlign: 'center' }}>
		  Caso deseje ter uma mentoria personalizada, com acesso ao professor para a análise, discussão da prova e elaboração do recurso, estão disponíveis no site MeuCurso planos de Mentorias para Recurso de 2ª fase OAB.
		</Paragraph>
	  </Grid>
	</Grid>
	{/* Carrossel de produtos mentoria */}
	<Box mt={6}>
	  <Section6
		products={products}
		showProducts={4}
		productColor="#fff"
		category="Mentoria de Recursos"
	  />
	</Box>
  </Container>
	  </ShopLayout1>
	</>
  );
}

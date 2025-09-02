import { useState } from "react";
import axios from "axios";
import {
	Box,
	Button,
	Container,
	Grid,
	TextField,
	Typography,
	Radio,
	RadioGroup,
	FormControlLabel,
	FormControl,
	FormLabel,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function RecursoIAForm() {
	const route = useRouter();
	const [showNotas, setShowNotas] = useState(false);
	const [submitted, setSubmitted] = useState(false);
	const [loading, setLoading] = useState(false);
	const [recursoGerado, setRecursoGerado] = useState("");
	const [error, setError] = useState("");

	// ...existing code...

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm((prev) => ({ ...prev, [name]: value }));
	};

	const handleRadioChange = (e) => {
		setForm((prev) => ({ ...prev, peca: e.target.value, outraPeca: "" }));
	};

	const handleCheckboxChange = (e) => {
		const { name, checked } = e.target;
		setForm((prev) => ({
			...prev,
			itensPeca: { ...prev.itensPeca, [name]: checked },
		}));
	};

// Estrutura para 4 questões, cada uma com 2 itens (texto e nota)
const questoesList = [
  [
	{ key: "q1_item1", label: "Item 1" },
	{ key: "q1_item2", label: "Item 2" },
  ],
  [
	{ key: "q2_item1", label: "Item 1" },
	{ key: "q2_item2", label: "Item 2" },
  ],
  [
	{ key: "q3_item1", label: "Item 1" },
	{ key: "q3_item2", label: "Item 2" },
  ],
  [
	{ key: "q4_item1", label: "Item 1" },
	{ key: "q4_item2", label: "Item 2" },
  ],
];

	// Novo estado único para o formulário, incluindo notas das questões
const [form, setForm] = useState({
  nome: "",
  inscricao: "",
  cpf: "",
  whatsapp: "",
  peca: "",
  outraPeca: "",
  itensPeca: {
	enderecamento: false,
	partes_celina: false,
	partes_ana: false,
	justica_gratuita_requerer: false,
	justica_gratuita_indicacao: false,
	nulidade_citacao_requerer: false,
	nulidade_citacao_indicacao: false,
	bem_familia_requerer: false,
	bem_familia_indicacao: false,
	beneficio_previdenciario_requerer: false,
	beneficio_previdenciario_indicacao: false,
	prescricao_intercorrente_requerer: false,
	prescricao_intercorrente_indicacao: false,
	tutela_provisoria_requerer: false,
	tutela_provisoria_indicacao: false,
	honorarios_adv_requerer: false,
	honorarios_adv_indicacao: false,
	encerramento_renovacao: false,
	encerramento_procedencia: false,
	encerramento_final: false,
  },
  questoes: {
	q1_item1: { texto: "", nota: "" },
	q1_item2: { texto: "", nota: "" },
	q2_item1: { texto: "", nota: "" },
	q2_item2: { texto: "", nota: "" },
	q3_item1: { texto: "", nota: "" },
	q3_item2: { texto: "", nota: "" },
	q4_item1: { texto: "", nota: "" },
	q4_item2: { texto: "", nota: "" },
  },
  notaQuestoesRecebida: "",
});


const handleQuestoesTextChange = (e) => {
  const { name, value } = e.target;
  const [qKey, field] = name.split("__");
  setForm((prev) => ({
	...prev,
	questoes: {
	  ...prev.questoes,
	  [qKey]: {
		...prev.questoes[qKey],
		[field]: value,
	  },
	},
  }));
};

const handleNotaQuestoesRecebidaChange = (e) => {
  setForm((prev) => ({ ...prev, notaQuestoesRecebida: e.target.value }));
};

	const handleNotasSubmit = (e) => {
		e.preventDefault();
		setShowNotas(true);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setSubmitted(true);
		setLoading(true);
		setError("");
		setRecursoGerado("");

		// Montar os dados para o prompt
		const nomePeca = form.peca === "outras" ? form.outraPeca : form.peca;
		const itensCorretos = Object.entries(form.itensPeca)
			.filter(([_, v]) => v)
			.map(([k]) => {
				const item = itensPecaList.find((i) => i.key === k);
				return item ? item.label : k;
			})
			.join("\n");

		// Novo prompt conforme instruções detalhadas e jurídicas
		// Montar os itens das questões marcadas
const itensQuestoesMarcados = Object.entries(form.questoes)
  .filter(([_, v]) => v.texto || v.nota)
  .map(([k, v]) => {
	const item = questoesList.flat().find((i) => i.key === k);
	return item ? `${item.label}: ${v.texto} (Nota: ${v.nota})` : `${k}: ${v.texto} (Nota: ${v.nota})`;
  })
  .join("\n");

		// Prompt ajustado conforme orientações detalhadas do usuário
		// Montar string dos itens da peça na ordem do espelho, com nota ao lado
		const itensPecaEspelho = itensPecaList
			.filter((item) => form.itensPeca[item.key])
			.map((item) => `${item.label} (${item.nota})`)
			.join(", ");
		const somaItensPeca = itensPecaList
			.filter((item) => form.itensPeca[item.key])
			.reduce((acc, item) => acc + item.nota, 0)
			.toFixed(2);

	const prompt = `Você é um assistente jurídico e deve redigir um recurso administrativo a ser apresentado à Banca Recursal da OAB/FGV, referente à prova prático-profissional da 2ª fase do 43º Exame da OAB – área trabalhista.\n\nSiga rigorosamente as seguintes instruções:\n\n1. Regras obrigatórias:\n- O texto deve ter no máximo 5.000 caracteres com espaços.\n- Não pode conter nome, número de inscrição ou qualquer dado que identifique o candidato.\n- Não utilize expressões ofensivas, irônicas ou desrespeitosas.\n- O texto deve ser impessoal, técnico e objetivo.\n- Nunca inclua a expressão 'Respeitosamente, [Assinatura do Advogado]' ou similares.\n\n2. Estrutura do recurso:\n- Saudação inicial: \"Excelentíssimos Doutores Membros da Banca Recursal da OAB/FGV\".\n- Exposição do caso: O candidato realizou a prova na área trabalhista, entendeu cabível a apresentação da peça ${nomePeca}, e teve sua prova anulada (nota zero) por suposta inadequação da peça.\n- Fundamentação jurídica:\n  - A peça apresentada deve ser aceita, assim como já ocorreu neste mesmo exame com o agravo de petição.\n  - Conforme os artigos 518 e 803 do CPC, é possível realizar alegações por simples petição, sem formalidades.\n  - Mesmo sem garantia do juízo, é viável o conhecimento da peça, especialmente se tratar de matéria de ordem pública.\n  - Nesse sentido, há julgados que aceitam a análise da matéria, por se tratar de questão de ordem pública, como se vê:\n    [apresentar a transcrição do julgado]\n    - TRT da 8ª Região, processo 0000577-23.2022.5.08.0013: transcreva o trecho relevante do julgado que reconhece que a nulidade de citação pode ser arguida por simples petição, sem necessidade de garantia do juízo.\n    - TRT da 6ª Região, processo 0001133-63.2023.5.06.0201: transcreva o trecho relevante do julgado que admite embargos à execução em razão da impenhorabilidade de salários, matéria de ordem pública.\n  - Caso a peça tivesse sido corrigida, o candidato teria obtido pontuação suficiente para aprovação, conforme os itens corretos da peça: (obrigatório trazer essa informação) ${itensPecaEspelho}${itensPecaEspelho ? ` (total: ${somaItensPeca})` : ""}.\n  - Também indicar os itens corretos das questões discursivas, se houver: ${itensQuestoesMarcados ? itensQuestoesMarcados : "-"}.\n\nObservações:\n- Sempre que citar um julgado, apresente a transcrição do mesmo, conforme o exemplo: 'Nesse sentido, há julgados que aceitam a análise da matéria, por se tratar de questão de ordem pública, como se vê: [apresentar a transcrição do julgado]'.\n- Adapte a linguagem do recurso com base nos termos jurídicos apropriados para uma petição administrativa.\n- O tom deve ser respeitoso e fundamentado tecnicamente, visando à reforma da nota atribuída pela banca.\n- Nunca inclua assinatura ou saudação final do advogado.\n\nFinalize o texto exatamente com a seguinte frase, sem qualquer saudação ou assinatura após ela:\n\nDiante do exposto, requer-se que o recurso seja conhecido e provido, com a correção da peça e das questões, afastando a nota zero atribuída e promovendo a aprovação do candidato.`;

		try {
			const response = await axios.post(
				"https://api.openai.com/v1/chat/completions",
				{
					model: "gpt-3.5-turbo",
					messages: [
						{
							role: "system",
							content:
								"Você é um advogado especialista em recursos de 2ª fase do Exame da OAB. Siga rigorosamente as instruções fornecidas e a persona descrita.",
						},
						{ role: "user", content: prompt },
					],
					max_tokens: 1500,
					temperature: 0.2,
				},
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
					},
				},
			);
			const texto = response.data.choices[0].message.content;
			setRecursoGerado(texto);
		} catch (err) {
			setError("Erro ao gerar o recurso. Tente novamente mais tarde.");
		} finally {
			setLoading(false);
		}
	};

	// Soma dos itens da peça selecionados
const itensPecaList = [
  { key: "enderecamento", label: "Endereçamento - 22ª Vara do Trabalho de Campo Grande", nota: 0.1 },
  { key: "partes_celina", label: "Identificação das partes: Celina Macedo", nota: 0.1 },
  { key: "partes_ana", label: "Identificação das partes: Ana Lucena", nota: 0.1 },
  { key: "justica_gratuita_requerer", label: "Requerer a justiça gratuita", nota: 0.2 },
  { key: "justica_gratuita_indicacao", label: "Indicação do art. 790, § 3º OU § 4º da CLT", nota: 0.1 },
  { key: "nulidade_citacao_requerer", label: "Requerer a nulidade de todo o processo porque nula/inexistente a citação", nota: 0.7 },
  { key: "nulidade_citacao_indicacao", label: "Indicação Art. 803, inciso II ou Art. 239 ou Art. 280, todos do CPC", nota: 0.1 },
  { key: "bem_familia_requerer", label: "Requerer a impenhorabilidade do imóvel porque é bem de família", nota: 0.7 },
  { key: "bem_familia_indicacao", label: "Indicação do Art. 1º da Lei nº 8.009/90", nota: 0.1 },
  { key: "beneficio_previdenciario_requerer", label: "Requerer a liberação total da aposentadoria pela sua natureza alimentar/impenhorabilidade OU parcial", nota: 0.7 },
  { key: "beneficio_previdenciario_indicacao", label: "Indicação Art. 833, inciso IV, do CPC OU Art. 529, § 3º, ou Art. 833, § 2º, ambos do CPC", nota: 0.1 },
  { key: "prescricao_intercorrente_requerer", label: "Requerer decretação da prescrição intercorrente execução ficou paralisada por mais 2 anos", nota: 0.7 },
  { key: "prescricao_intercorrente_indicacao", label: "Indicação do Art. 11-A, ou 11-A, § 1º, ou 11-A, § 2º, da CLT", nota: 0.1 },
  { key: "tutela_provisoria_requerer", label: "Requerer a tutela provisória/de urgência/de evidência para suspender as medidas já adotadas", nota: 0.6 },
  { key: "tutela_provisoria_indicacao", label: "Indicação do Art. 294 ou Art. 300 ou Art. 311, todos do CPC", nota: 0.1 },
  { key: "honorarios_adv_requerer", label: "Requerer honorários advocatícios", nota: 0.1 },
  { key: "honorarios_adv_indicacao", label: "Indicação do Art. 791-A da CLT", nota: 0.1 },
  { key: "encerramento_renovacao", label: "Renovação da tutela provisória/de urgência/de evidência", nota: 0.1 },
  { key: "encerramento_procedencia", label: "A procedência dos pedidos", nota: 0.1 },
  { key: "encerramento_final", label: "Encerramento", nota: 0.1 },
];

	const somaItensSelecionados = itensPecaList.reduce(
		(acc, item) => acc + (form.itensPeca[item.key] ? item.nota : 0),
		0,
	);





	return (
		<Box
			minHeight="100vh"
			display="flex"
			alignItems="center"
			justifyContent="center"
			sx={{ background: "#f7f7fa" }}
		>
			<Container maxWidth="md">
				<Box
					display="flex"
					justifyContent="center"
					alignItems="center"
					mb={2}
					mt={4}
				>
					<Image
						src={"/logofdg.png"}
						alt="Logo MeuCurso"
						width={180}
						height={80}
						style={{ maxWidth: "100%", height: "auto" }}
					/>
								</Box>


{/* ...existing code... */}
				{!showNotas ? (
					<Box
						component="form"
						onSubmit={handleNotasSubmit}
						sx={{
							background: "#fff",
							borderRadius: 4,
							boxShadow: "0 4px 24px 0 rgba(0,0,0,0.10)",
							p: { xs: 3, md: 5 },
							mt: 2,
						}}
					>
						<Typography
							variant="h4"
							fontWeight={800}
							color="#c62c2d"
							mb={1.5}
							textAlign="center"
						>
							Eliminação por Inadequação da Peça | Trabalhista
						</Typography>
				<Typography
					sx={{ fontSize: 18, color: "#222", mb: 3, textAlign: "center" }}
				>
					Com a publicação do NOVO ESPELHO de correção para os candidatos que tiveram a peça de direito do trablaho zeradas, preparamos uma &quot;calculadora&quot; da nota atingida. Dia 7/8 liberaremos a ferramenta de recurso para quem precisar.
				</Typography>
						<Grid container spacing={2}>
							<Grid item xs={12} md={6}>
								<TextField
									label="Nome Completo"
									name="nome"
									value={form.nome}
									onChange={handleChange}
									fullWidth
									required
								/>
							</Grid>
							<Grid item xs={12} md={6}>
								<TextField
									label="Inscrição OAB/FGV"
									name="inscricao"
									value={form.inscricao}
									onChange={handleChange}
									fullWidth
									required
								/>
							</Grid>
							<Grid item xs={12} md={6}>
								<TextField
									label="CPF"
									name="cpf"
									value={form.cpf}
									onChange={handleChange}
									fullWidth
									required
									inputProps={{ maxLength: 14 }}
								/>
							</Grid>
							<Grid item xs={12} md={6}>
								<TextField
									label="Whatsapp (receber resposta)"
									name="whatsapp"
									value={form.whatsapp}
									onChange={handleChange}
									fullWidth
									required
								/>
							</Grid>
							<Grid item xs={12}>
								<FormControl component="fieldset" required>
									<FormLabel component="legend">Qual peça elaborou?</FormLabel>
									<RadioGroup
										name="peca"
										value={form.peca}
										onChange={handleRadioChange}
										row
									>
										<FormControlLabel
											value="embargos à execução"
											control={<Radio />}
											label="Embargos à execução"
										/>
										<FormControlLabel
											value="mandado de segurança"
											control={<Radio />}
											label="Mandado de segurança"
										/>
										<FormControlLabel
											value="ação rescisória"
											control={<Radio />}
											label="Ação rescisória"
										/>
										<FormControlLabel
											value="outras"
											control={<Radio />}
											label="Outras"
										/>
									</RadioGroup>
								</FormControl>
							</Grid>
							{form.peca === "outras" && (
								<Grid item xs={12}>
									<TextField
										label="Qual?"
										name="outraPeca"
										value={form.outraPeca}
										onChange={handleChange}
										fullWidth
										required
									/>
								</Grid>
							)}
							<Grid item xs={12}>
								<Button
									type="submit"
									variant="contained"
									color="primary"
									fullWidth
									sx={{
										fontWeight: 600,
										fontSize: 18,
										py: 1.5,
										mt: 2,
										background: "#f5f5f7",
										color: "#333",
										borderRadius: 2,
										boxShadow: "0 2px 8px 0 rgba(0,0,0,0.07)",
										border: "1px solid #d1d1e0",
										transition: "transform 0.2s, background 0.2s, color 0.2s",
										"&:hover": {
											transform: "scale(1.04)",
											background: "#ececf3",
											color: "#222",
										},
									}}
								>
								Cálculo de Nota
								</Button>
							</Grid>
						</Grid>
					</Box>
				) : (
					<Box
						component="form"
						onSubmit={handleSubmit}
						sx={{
							background: "#fff",
							borderRadius: 4,
							boxShadow: "0 4px 24px 0 rgba(0,0,0,0.10)",
							p: { xs: 3, md: 5 },
							mt: 6,
						}}
					>
						<Typography
							variant="h5"
							fontWeight={700}
							color="#574ab9"
							mb={2}
							textAlign="center"
						>
							Em relação à PEÇA, quais itens você teria nota se a prova tivesse
							sido corrigida?
						</Typography>
						{/* Itens da peça numerados e distribuídos em duas colunas */}
						<Grid container spacing={2}>
							{itensPecaList.map((item, idx) => (
								<Grid item xs={12} key={item.key}>
									<Box display="flex" alignItems="center" gap={2} mb={1}>
										<Typography minWidth={24} fontWeight={700}>
											{idx + 1}.
										</Typography>
										<FormControlLabel
											control={
												<input
													type="checkbox"
													name={item.key}
													checked={form.itensPeca[item.key]}
													onChange={handleCheckboxChange}
												/>
											}
											label={item.label}
											sx={{ flex: 1, mr: 2 }}
										/>
										<TextField
											label="Nota do item"
											value={item.nota}
											size="small"
											InputProps={{ readOnly: true }}
											sx={{ width: 80, mx: 1 }}
										/>
									</Box>
								</Grid>
							))}
						</Grid>
{/* Soma dos itens selecionados */}
<Box display="flex" alignItems="center" gap={2} mt={2} mb={2}>
  <Typography fontWeight={700} color="#574ab9">
	Soma dos itens selecionados:
  </Typography>
  <TextField
	value={somaItensSelecionados.toFixed(2)}
	size="small"
	InputProps={{ readOnly: true }}
	sx={{ width: 80 }}
  />
</Box>
{/* Cálculo final e regra - ao final do formulário */}

{/* QUESTÕES - texto e nota por item, e nota recebida final */}
<Typography variant="h5" fontWeight={700} color="#574ab9" mt={4} mb={2} textAlign="center">
  Em relação às QUESTÕES, qual a pontuação que entende ter obtido se a prova tivesse sido corrigida.
</Typography>
<Grid container spacing={2}>
  {questoesList.map((questao, idx) => (
	<Grid item xs={12} key={idx}>
	  <Typography fontWeight={600} color="#c62c2d" mb={1}>{`Questão ${idx + 1}`}</Typography>
	  <Grid container spacing={2}>
		{questao.map((item, i) => (
		  <Grid item xs={12} md={6} key={item.key}>
			<Box display="flex" alignItems="center" gap={2} mb={2} sx={{ background: '#f8f8fc', borderRadius: 2, p: 2, width: '100%' }}>
			  <Typography sx={{ minWidth: 60 }}>{item.label}</Typography>
			  <TextField
				label="Nota"
				name={`${item.key}__nota`}
				value={form.questoes[item.key].nota}
				onChange={handleQuestoesTextChange}
				type="number"
				inputProps={{ min: 0, step: 0.01 }}
				sx={{ width: 100 }}
			  />
			</Box>
		  </Grid>
		))}
	  </Grid>
	</Grid>
  ))}
</Grid>
<Box display="flex" alignItems="center" gap={2} mt={2} mb={2}>
  <Typography fontWeight={700} color="#574ab9">
	Nota que tirou nas questões (já teve a correção):
  </Typography>
  <TextField
	value={Object.values(form.questoes).reduce((acc, q) => acc + (parseFloat(q.nota) || 0), 0).toFixed(2)}
	size="small"
	type="number"
	InputProps={{ readOnly: true }}
	sx={{ width: 100 }}
  />
</Box>
{/* Cálculo final e regra - agora logo abaixo da nota das questões */}
<Box display="flex" alignItems="center" gap={2} mt={2} mb={2} sx={{ background: '#f0f7fa', border: '1px solid #91d5ff', borderRadius: 2, p: 2 }}>
  <Typography fontWeight={700} color="#1890ff" minWidth={120}>
	Cálculo final:
  </Typography>
  <TextField
	value={(() => {
	  const somaItens = somaItensSelecionados;
	  const somaQuestoes = Object.values(form.questoes).reduce((acc, q) => acc + (parseFloat(q.nota) || 0), 0);
	  return (somaItens + somaQuestoes).toFixed(2);
	})()}
	size="small"
	InputProps={{ readOnly: true }}
	sx={{ width: 100 }}
  />
  <Typography fontWeight={700} color={(() => {
	const somaItens = somaItensSelecionados;
	const somaQuestoes = Object.values(form.questoes).reduce((acc, q) => acc + (parseFloat(q.nota) || 0), 0);
	return (somaItens + somaQuestoes) >= 6 ? '#52c41a' : '#faad14';
  })()}>
	{(() => {
	  const somaItens = somaItensSelecionados;
	  const somaQuestoes = Object.values(form.questoes).reduce((acc, q) => acc + (parseFloat(q.nota) || 0), 0);
	  return (somaItens + somaQuestoes) >= 6 ? 'Chance de aprovação' : 'Chance de precisar de recurso';
	})()}
  </Typography>
</Box>
						{/* Soma total dos itens e do aluno removida pois não é mais relevante para marcação */}
<Grid container spacing={2} mt={2}>
  <Grid item xs={12}>
	<Box display="flex" alignItems="center" justifyContent="center" mt={2} mb={2} sx={{ background: '#fffbe6', border: '1px solid #ffe58f', borderRadius: 2, p: 2 }}>
	  <svg style={{ marginRight: 8 }} width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#faad14"/><text x="12" y="17" textAnchor="middle" fontSize="16" fill="#fff" fontWeight="bold">!</text></svg>
	  <Typography fontWeight={700} color="#ad8b00" textAlign="center">
		Recurso - liberação&nbsp;em&nbsp;7/8
	  </Typography>
	</Box>
  </Grid>
							{error && (
								<Grid item xs={12}>
									<Typography color="error" mt={2} textAlign="center">
										{error}
									</Typography>
								</Grid>
							)}
							{recursoGerado && (
								<Grid item xs={12}>
									<Typography
										color="success.main"
										mt={2}
										textAlign="center"
										fontWeight={700}
									>
										Recurso gerado com sucesso!
									</Typography>
									<Box mt={2} p={2} bgcolor="#f5f5f5" borderRadius={2}>
										<Typography
											component="pre"
											sx={{
												whiteSpace: "pre-wrap",
												wordBreak: "break-word",
												fontSize: 16,
											}}
										>
											{recursoGerado}
										</Typography>
										<Box
											display="flex"
											justifyContent="space-between"
											alignItems="center"
											mt={1}
											mb={1}
										>
											<Typography
												variant="caption"
												color={
													recursoGerado.length > 5000
														? "error"
														: "text.secondary"
												}
											>
												{`Caracteres: ${recursoGerado.length} / 5000`}
											</Typography>
										</Box>
										<Button
											variant="outlined"
											color="primary"
											sx={{
												mt: 2,
												fontWeight: 600,
												background: "#f5f5f7",
												color: "#333",
												borderRadius: 2,
												border: "1px solid #d1d1e0",
												transition:
													"transform 0.2s, background 0.2s, color 0.2s",
												"&:hover": {
													transform: "scale(1.04)",
													background: "#ececf3",
													color: "#222",
												},
											}}
											onClick={() => {
												navigator.clipboard.writeText(recursoGerado);
											}}
											fullWidth
										>
											Copiar texto do recurso
										</Button>
									</Box>
								</Grid>
							)}
						</Grid>
					</Box>
				)}
			</Container>
		</Box>
	);
}

import {
	Box,
	Card,
	Grid,
	List,
	ListItem,
	Paper,
	Typography,
} from "@mui/material";
import { H2 } from "components/Typography";

interface ModuleItem {
	ModuleItemId: number;
	Text: string;
}

interface ModuleInterface {
	ProductModuleId: number;
	Title: string;
	Description: string;
	ModuleItems: string | ModuleItem[];
}

interface ModulesInterfaceProps {
	modules: ModuleInterface[];
	titleColor?: string;
}

const Modules = ({ modules, titleColor }: ModulesInterfaceProps) => {
	return (
		<Grid container spacing={2}>
			{modules.map(({ Description, ModuleItems, ProductModuleId, Title }) => (
				<Grid item md={6} key={ProductModuleId}>
					<Paper
						sx={{
							borderRadius: "16px",
							display: "flex",
							flexDirection: "column",
							px: 2,
						}}
					>
						<H2
							color={titleColor}
							pt={2}
							sx={{ fontSize: "18px", textAlign: "center" }}
						>
							{Title}
						</H2>
						<List sx={{ pr: 4, pt: 2 }}>
							{JSON.parse(ModuleItems as string).map(
								({ ModuleItemId, Text }) => (
									<ListItem
										sx={{ ml: "1rem", textAlign: "Start", pt: 0 }}
										key={ModuleItemId}
									>
										<Typography
											sx={{
												fontWeight: 600,
												fontSize: 16,
												textJustify: "inter-word",
											}}
										>
											• {Text}
										</Typography>
									</ListItem>
								),
							)}
						</List>
					</Paper>
				</Grid>
			))}
		</Grid>
	);
};

export { Modules };

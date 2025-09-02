import styled from "@emotion/styled";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Container, Tab } from "@mui/material";
import Section13 from "pages-sections/fashion-shop-2/Section13";
import { useState } from "react";

type CategoryId = {
	id: number;
	UrlKey: string;
};

type Tabs = {
	id: number;
	name: string;
	value: string;
	textTemplate: string;
	buttonColor: string;
	categoryId: CategoryId;
};

interface CousesTabsProps {
	tabs: Tabs[];
	textColor?: string;
	visibleItems?: 1 | 2 | 3 | 4 | 5;
}

export default function CoursesTabs({
	tabs,
	textColor,
	visibleItems = 3,
}: CousesTabsProps) {
	const [value, setValue] = useState("1");

	const handleChange = (event: React.SyntheticEvent, newValue: string) => {
		setValue(newValue);
	};

	const getSelectedTabColor = () => {
		const selectedTab = tabs.find((tab) => tab.value === value);
		return selectedTab ? selectedTab.buttonColor : "#ff9d00";
	};

	return (
		<Container sx={{ mt: 3 }}>
			<TabContext value={value}>
				<Box
					sx={{
						background: "white",
						borderRadius: "50px",
						boxShadow: "1px 10px 20px  #d5d3d3",
						py: 0.5,
						width: { xs: "100%", md: "max-content" },
						margin: { xs: 0, md: "0 auto" },
					}}
				>
					<TabList
						allowScrollButtonsMobile
						variant="scrollable"
						sx={{
							justifyContent: { xs: "unset", md: "center" },
							button: {
								borderRadius: "50px",
							},
							".MuiTabs-indicator": {
								height: "50px",
								borderRadius: "50px",
								backgroundColor: getSelectedTabColor(),
							},
							".MuiTabs-flexContainer": {
								pt: 0.5,
								borderRadius: "50px",
								justifyContent: { xs: "unset", md: "center" },
							},
						}}
						onChange={handleChange}
					>
						{tabs.map((tab) => (
							<Tab
								key={tab.id}
								sx={{
									fontWeight: "bold",
									zIndex: 5,
									"&.Mui-selected": {
										color: "white",
									},
								}}
								label={tab.name}
								value={tab.value}
							/>
						))}
					</TabList>
				</Box>
				{tabs.map((tab) => (
					<TabPanel
						key={tab.id}
						sx={{
							marginTop: -8,
							".button": {
								zIndex: 0,
							},
						}}
						value={value}
						hidden={value !== tab.value}
					>
						<Section13
							visibleItems={visibleItems}
							textColor={textColor}
							textTemplate={tab.textTemplate}
							productCategory={tab.categoryId.id}
							category={tab.categoryId.UrlKey}
						/>
					</TabPanel>
				))}
			</TabContext>
		</Container>
	);
}

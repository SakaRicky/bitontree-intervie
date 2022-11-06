import React from "react";
import { Box, Container, Grid } from "@mui/material";
import { MyAppBar } from "./MyAppBar";
import { SideBar } from "./SideBar";
import { Outlet } from "react-router-dom";

// interface LayoutProps {
// 	children: React.ReactNode;
// }

export const Layout = () => {
	return (
		<Box
			sx={{
				height: { md: "100vh" },
				backgroundColor: "#EBF0F4",
				display: "flex",
				alignItems: "center",
			}}
		>
			<Container
				maxWidth="lg"
				sx={{
					height: "90%",
					width: "100%",
					display: "flex",
					gap: 4,
					paddingBottom: 4,
				}}
			>
				<Grid container columnSpacing={2} sx={{ height: "100%" }}>
					<Grid
						item
						md={3}
						sx={{
							height: "100%",
							display: {
								xs: "none",
								md: "block",
							},
						}}
					>
						<SideBar />
					</Grid>
					<Grid item xs={12} md={9} sx={{ height: "100%" }}>
						<Box sx={{ height: "90px" }}>
							<MyAppBar />
						</Box>
						<Box sx={{ height: `calc(100% - ${90}px)`, display: "flex" }}>
							<Outlet />
						</Box>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

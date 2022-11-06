import React from "react";
import { Box, Typography } from "@mui/material";

interface WeatherItemProps {
	label: string;
	data: string;
}
export const WeatherItem = ({ label, data }: WeatherItemProps) => {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				height: "100%",
				position: "relative",
			}}
		>
			<Typography
				textAlign="center"
				fontSize={12}
				sx={{
					position: "absolute",
					top: 4,
					left: "50%",
					transform: "translate(-50%)",
				}}
			>
				{label}
			</Typography>
			<Typography
				fontFamily={"Podkova"}
				sx={{ alignSelf: "center", fontSize: { xs: 40, md: 55 } }}
			>
				{data}
			</Typography>
		</Box>
	);
};

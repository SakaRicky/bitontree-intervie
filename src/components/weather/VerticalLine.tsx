import React from "react";
import { Box } from "@mui/material";

export const VerticalLine = () => {
	return (
		<Box
			sx={{
				width: "3px",
				height: "75px",
				backgroundColor: "white",
				display: "block",
				marginBlock: "auto",
				position: "relative",
			}}
		></Box>
	);
};

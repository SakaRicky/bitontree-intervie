import React from "react";
import { Box, Typography } from "@mui/material";
import { AddUserForm } from "../components/forms/AddUserForm";

export const AddUser = () => {
	return (
		<Box
			sx={{
				flexGrow: 1,
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
			}}
		>
			<Typography sx={{ marginLeft: 2 }}>Add User</Typography>
			<Box sx={{ height: "93%" }}>
				<Box
					sx={{
						borderRadius: 5,
						backgroundColor: "white",
						height: "100%",
					}}
				>
					<AddUserForm />
				</Box>
			</Box>
		</Box>
	);
};

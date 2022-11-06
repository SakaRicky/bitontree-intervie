import React, { useState } from "react";
import { Box, Paper, Typography } from "@mui/material";
import { User } from "../../types";
import moment from "moment";
import { grey } from "@mui/material/colors";
import MenuIcon from "@mui/icons-material/Menu";

interface ListItemProps {
	user: User;
}
export const ListItem = ({ user }: ListItemProps) => {
	const [itemHovered, setItemHovered] = useState<boolean>(false);
	return (
		<Paper elevation={itemHovered ? 3 : 0}>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					backgroundColor: itemHovered ? "white" : grey["100"],
					m: "0.5rem 0",
					borderRadius: 1,
					p: "0.5rem 1rem",
					overflow: "auto",
					cursor: "pointer",
				}}
				onMouseEnter={() => setItemHovered(true)}
				onMouseLeave={() => setItemHovered(false)}
			>
				<Box sx={{ display: "flex", gap: 2 }}>
					<img
						src="images/profile_pic.svg"
						style={{ width: 20, height: 20 }}
						alt="Profile"
					/>
					<Box sx={{ display: "flex", gap: 1 }}>
						<Typography lineHeight={1.2}>{user.username}</Typography>
						<Typography lineHeight={1.2}>
							{`${moment().diff(user.dateOfBirth, "years")} years`}
						</Typography>
						<Typography lineHeight={1.2}>{user.state}</Typography>
					</Box>
				</Box>
				<MenuIcon />
			</Box>
		</Paper>
	);
};

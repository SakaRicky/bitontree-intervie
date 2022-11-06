import React, { useState } from "react";
import { Box, Paper, Typography } from "@mui/material";
import { User } from "../../types";
import moment from "moment";
import { grey } from "@mui/material/colors";

export const Card = ({ user }: { user: User }) => {
	const [cardHovered, setCardHovered] = useState<boolean>(false);
	return (
		<Paper elevation={cardHovered ? 3 : 0}>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-around",
					alignItems: "center",
					gap: 2,
					backgroundColor: cardHovered ? "white" : grey["200"],
					p: 3,
					borderRadius: 0.9,
					cursor: "pointer",
				}}
				onMouseEnter={() => setCardHovered(true)}
				onMouseLeave={() => setCardHovered(false)}
			>
				<img
					src="images/profile_pic.svg"
					style={{ width: 50, height: 50 }}
					alt="Profile"
				/>
				<Box>
					<Typography lineHeight={1.2}>{user.username}</Typography>
					<Typography lineHeight={1.2}>
						{`${moment().diff(user.dateOfBirth, "years")} years`}
					</Typography>
					<Typography lineHeight={1.2}>{user.state}</Typography>
				</Box>
			</Box>
		</Paper>
	);
};

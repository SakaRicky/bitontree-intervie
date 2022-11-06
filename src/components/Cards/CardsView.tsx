import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { Card } from "./Card";
import { User } from "../../types";
import { grey } from "@mui/material/colors";

interface CardsViewProps {
	users: User[];
	allUsers: User[];
}

export const CardsView = ({ users, allUsers }: CardsViewProps) => {
	return (
		<Box sx={{ marginTop: "1.5rem" }}>
			<Typography color={grey["500"]}>Card View</Typography>
			{allUsers.length > 0 ? (
				users.length > 0 ? (
					<Grid
						container
						spacing={2}
						alignItems="center"
						justifyContent="center"
						sx={{ marginTop: -0.5 }}
					>
						{users.map(user => (
							<Grid item xs={8} sm={6} md={4} key={user.email}>
								<Card user={user} />
							</Grid>
						))}
					</Grid>
				) : (
					<Typography>No with that name</Typography>
				)
			) : (
				<Typography>No users added</Typography>
			)}
		</Box>
	);
};

import React from "react";
import { Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { User } from "../../types";
import { ListItem } from "./ListItem";

interface UsersListViewProps {
	users: User[];
	allUsers: User[];
}

export const UsersListView = ({ users, allUsers }: UsersListViewProps) => {
	return (
		<Box sx={{ marginTop: "2rem" }}>
			<Typography color={grey["500"]}>List View</Typography>

			{allUsers.length > 0 ? (
				users.length > 0 ? (
					users.map(user => <ListItem key={user.email} user={user} />)
				) : (
					<Typography>No with that name</Typography>
				)
			) : (
				<Typography>No users added</Typography>
			)}
		</Box>
	);
};

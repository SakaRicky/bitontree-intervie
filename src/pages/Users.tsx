import React, { useState } from "react";
import { Box, TextField, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { CardsView } from "../components/Cards/CardsView";
import { UsersListView } from "../components/ListView/UsersListView";
import type { RootState } from "../store/index";
import { useSelector } from "react-redux";

export const Users = () => {
	const users = useSelector((state: RootState) => state.users);
	const [searchText, setSearchText] = useState<string>("");

	const displayedUsers = searchText
		? users.filter(user => user.username.includes(searchText))
		: users;

	return (
		<Box
			sx={{
				flexGrow: 1,
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
			}}
		>
			<Typography sx={{ marginLeft: 2 }}>Users</Typography>
			<Box sx={{ height: "93%" }}>
				<Box
					sx={{
						borderRadius: 5,
						backgroundColor: "white",
						height: "100%",
						p: "1.5rem",
					}}
				>
					<Box>
						<Typography color={grey["500"]}>Search</Typography>
						<TextField
							size="small"
							placeholder="Search user by name..."
							onChange={e => setSearchText(e.target.value)}
							sx={{
								width: "40%",
								marginTop: 1,

								"& fieldset": {
									paddingLeft: theme => theme.spacing(2.5),
									borderRadius: "10px",
								},
								"& .MuiOutlinedInput-root.Mui-focused": {
									"& > fieldset": {
										border: "1px solid black",
									},
								},
							}}
						/>
					</Box>

					<CardsView users={displayedUsers} allUsers={users} />
					<Box>
						<UsersListView users={displayedUsers} allUsers={users} />
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

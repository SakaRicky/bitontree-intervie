import React from "react";
import { Box, Typography } from "@mui/material";
import { AddUserIcon, UsersIcon, WeatherIcon } from "./SVG";
import { NavLink } from "react-router-dom";

export const SideBar = () => {
	return (
		<Box
			sx={{
				width: "100%",
				height: "100%",
				borderRadius: 5,
				backgroundColor: "white",
				p: 4,
			}}
		>
			<img src="images/logo.svg" alt="" />
			<Box
				sx={{
					height: "2px",
					width: "100%",
					m: "0.5rem 0",
					backgroundColor: "#A1E0FF",
				}}
			/>

			{/* navlinks */}
			<Box sx={{ paddingTop: 1 }}>
				<NavLink
					style={({ isActive }) => {
						return {
							borderRadius: 3,
							backgroundColor: isActive ? "#A1E0FF" : "",
							padding: "0.5rem 1rem",
							marginTop: 1,
							display: "flex",
							alignItems: "center",
							gap: "0.5rem",
							color: isActive ? "white" : "#A1E0FF",
							textDecoration: "none",
						};
					}}
					to="add-user"
				>
					<AddUserIcon />
					<Typography variant="body1">Add User</Typography>
				</NavLink>

				<NavLink
					style={({ isActive }) => {
						return {
							borderRadius: 3,
							backgroundColor: isActive ? "#A1E0FF" : "",
							padding: "0.5rem 1rem",
							marginTop: 1,
							display: "flex",
							alignItems: "center",
							gap: "0.5rem",
							color: isActive ? "white" : "#A1E0FF",
							textDecoration: "none",
						};
					}}
					to="users"
				>
					<UsersIcon />
					<Typography variant="body1">Users</Typography>
				</NavLink>

				<NavLink
					style={({ isActive }) => {
						return {
							borderRadius: 3,
							backgroundColor: isActive ? "#A1E0FF" : "",
							padding: "0.5rem 1rem",
							marginTop: 1,
							display: "flex",
							alignItems: "center",
							gap: "0.5rem",
							color: isActive ? "white" : "#A1E0FF",
							textDecoration: "none",
						};
					}}
					to="weather"
					// to={`/invoices/${invoice.number}`}
				>
					<WeatherIcon />
					<Typography variant="body1">Weather</Typography>
				</NavLink>
			</Box>
		</Box>
	);
};

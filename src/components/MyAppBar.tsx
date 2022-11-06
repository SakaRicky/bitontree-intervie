import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import moment from "moment";
import Typography from "@mui/material/Typography";
import { AddUserIcon, UsersIcon, WeatherIcon } from "./SVG";
import { Link, NavLink } from "react-router-dom";

export const MyAppBar = () => {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
		React.useState<null | HTMLElement>(null);

	const isMenuOpen = Boolean(anchorEl);
	const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

	const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMobileMenuClose = () => {
		setMobileMoreAnchorEl(null);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
		handleMobileMenuClose();
	};

	const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
		setMobileMoreAnchorEl(event.currentTarget);
	};

	const menuId = "primary-search-account-menu";
	const renderMenu = (
		<Menu
			anchorEl={anchorEl}
			anchorOrigin={{
				vertical: "top",
				horizontal: "right",
			}}
			id={menuId}
			keepMounted
			transformOrigin={{
				vertical: "top",
				horizontal: "right",
			}}
			open={isMenuOpen}
			onClose={handleMenuClose}
		>
			<MenuItem onClick={handleMenuClose}>Profile</MenuItem>
			<MenuItem onClick={handleMenuClose}>My account</MenuItem>
		</Menu>
	);

	const mobileMenuId = "primary-search-account-menu-mobile";
	const renderMobileMenu = (
		<Menu
			anchorEl={mobileMoreAnchorEl}
			anchorOrigin={{
				vertical: "top",
				horizontal: "right",
			}}
			id={mobileMenuId}
			keepMounted
			transformOrigin={{
				vertical: "top",
				horizontal: "right",
			}}
			open={isMobileMenuOpen}
			onClose={handleMobileMenuClose}
			sx={{ padding: "0 2rem" }}
		>
			<MenuItem>
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
							marginInline: 16,
						};
					}}
					to="add-user"
					onClick={handleMenuClose}
				>
					<AddUserIcon />
					<Typography variant="body1">Add User</Typography>
				</NavLink>
			</MenuItem>
			<MenuItem>
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
							marginInline: 16,
						};
					}}
					to="users"
					onClick={handleMenuClose}
				>
					<UsersIcon />
					<Typography variant="body1">Users</Typography>
				</NavLink>
			</MenuItem>
			<MenuItem>
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
							marginInline: 16,
						};
					}}
					to="weather"
					onClick={handleMenuClose}
				>
					<WeatherIcon />
					<Typography variant="body1">Weather</Typography>
				</NavLink>
			</MenuItem>
			<MenuItem
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					marginTop: 8,
				}}
			>
				<Typography>Welcome John</Typography>
				<IconButton
					size="large"
					edge="end"
					aria-label="account of current user"
					aria-controls={menuId}
					aria-haspopup="true"
					onClick={handleProfileMenuOpen}
					color="inherit"
				>
					<img
						src="images/profile_pic.svg"
						style={{ width: 40, height: 40 }}
						alt="Profile"
					/>
				</IconButton>
			</MenuItem>
		</Menu>
	);

	return (
		<Box sx={{ flexGrow: 1, width: "100%" }}>
			<AppBar
				position="static"
				elevation={0}
				sx={{
					backgroundColor: "white",
					borderRadius: 5,
					color: "black",
				}}
			>
				<Toolbar
					sx={{
						display: "flex",
					}}
				>
					<Box sx={{ width: 50, flexGrow: 1, display: { md: "none" } }}>
						<Link to="add-user">
							<img src="images/logo.svg" alt="" />
						</Link>
					</Box>
					<Typography>{moment().format("ddd Do MMM h:mm A")}</Typography>
					<Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }} />

					<Box sx={{ display: { xs: "flex", md: "none" } }}>
						<IconButton
							size="large"
							aria-label="show more"
							aria-controls={mobileMenuId}
							aria-haspopup="true"
							onClick={handleMobileMenuOpen}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>
					</Box>

					<Box
						sx={{ display: { xs: "none", md: "flex", alignItems: "center" } }}
					>
						<Typography>Welcome John</Typography>
						<IconButton
							size="large"
							edge="end"
							aria-label="account of current user"
							aria-controls={menuId}
							aria-haspopup="true"
							onClick={handleProfileMenuOpen}
							color="inherit"
						>
							<img
								src="images/profile_pic.svg"
								style={{ width: 40, height: 40 }}
								alt="Profile"
							/>
						</IconButton>
					</Box>
				</Toolbar>
			</AppBar>
			{renderMobileMenu}
			{renderMenu}
		</Box>
	);
};

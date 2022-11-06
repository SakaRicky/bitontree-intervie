import React, { useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { AddUser, Users, Weather } from "./pages";
import { useDispatch } from "react-redux";
import { User } from "./types";
import { setUsers } from "./reducers/userReducer";

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		const users: User[] = JSON.parse(
			window.localStorage.getItem("users") || "[]"
		);
		dispatch(setUsers(users));
	}, [dispatch]);
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route path="add-user" element={<AddUser />} />
				<Route path="users" element={<Users />} />
				<Route path="weather" element={<Weather />} />
			</Route>
		</Routes>
	);
}

export default App;

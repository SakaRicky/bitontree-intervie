import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../types";

const initialState: User[] = [];

const userSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		createUser(state, action: PayloadAction<User>) {
			const user = action.payload;
			state.push(user);
		},
		setUsers(state, action: PayloadAction<User[]>) {
			return action.payload;
		},
	},
});

export const { createUser, setUsers } = userSlice.actions;
export default userSlice.reducer;

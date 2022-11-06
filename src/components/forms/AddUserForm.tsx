import React from "react";
import { User } from "../../types";
import * as yup from "yup";
import { Form, Formik } from "formik";
import { MyTextField } from "../inputs/MyTextField";
import { Box, Button, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { MyDatePicker } from "../inputs/MyDatePicker";
import moment from "moment";
import { MySelectField } from "../inputs/MySelectField";
import type { RootState } from "../../store/index";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../reducers/userReducer";

export const AddUserForm = () => {
	const indianStates = useSelector((state: RootState) => state.indianStates);
	const dispatch = useDispatch();

	const INITIAL_FORM_STATE: User = {
		username: "",
		email: "",
		phone: "",
		dateOfBirth: moment(new Date()),
		state: "",
	};

	const FORM_VALIDATION = yup.object().shape({
		email: yup
			.string()
			.required("Enter valid email id")
			.email("Enter valid email id"),
		phone: yup
			.string()
			.required("Enter a valid phone number (10 digits)")
			.matches(
				new RegExp("[0-9]{10}"),
				"Enter a valid phone number (10 digits)"
			),
		dateOfBirth: yup.date().required(),
	});

	return (
		<Box
			sx={{ width: { xs: "90%", md: "60%" }, margin: "0 auto", paddingTop: 8 }}
		>
			<Formik
				initialValues={INITIAL_FORM_STATE}
				validationSchema={FORM_VALIDATION}
				onSubmit={(values, { resetForm }) => {
					// same shape as initial values

					const users: User[] = JSON.parse(
						window.localStorage.getItem("users") || "[]"
					);
					console.log(
						"string dateOfBirth: ",
						values.dateOfBirth.format("MMM Do YY")
					);

					dispatch(createUser(values));
					if (users.length > 0) {
						users.push(values);
						window.localStorage.setItem("users", JSON.stringify(users));
						resetForm();
						return;
					}
					window.localStorage.setItem("users", JSON.stringify([{ ...values }]));
					resetForm();
				}}
			>
				{({ errors, touched }) => (
					<Form>
						<Box sx={{ display: "flex", alignItems: "center", m: "1rem 0" }}>
							<Typography width="30%" color={grey["500"]}>
								Username
							</Typography>
							<MyTextField name="username" label="User Name" type="text" />
						</Box>
						<Box sx={{ display: "flex", alignItems: "center", m: "1rem 0" }}>
							<Typography width="30%" color={grey["500"]}>
								Email
							</Typography>
							<MyTextField name="email" label="Email" type="email" />
						</Box>
						<Box sx={{ display: "flex", alignItems: "center", m: "1rem 0" }}>
							<Typography width="30%" color={grey["500"]}>
								Phone
							</Typography>
							<MyTextField name="phone" label="Phone" type="phone" />
						</Box>
						<Box sx={{ display: "flex", alignItems: "center", m: "1rem 0" }}>
							<Typography width="30%" color={grey["500"]}>
								DOB
							</Typography>
							<MyDatePicker name="dateOfBirth" />
						</Box>
						<Box sx={{ display: "flex", alignItems: "center", m: "1rem 0" }}>
							<Typography width="30%" color={grey["500"]}>
								State
							</Typography>
							<MySelectField name="state" options={indianStates} />
						</Box>

						<Box sx={{ display: "flex", alignItems: "center", m: "1rem 0" }}>
							<Box width="30%"></Box>
							<Button
								type="submit"
								sx={{
									backgroundColor: "#A1E0FF",
									color: "white",
									textTransform: "capitalize",
									width: "100%",

									"&:hover": {
										backgroundColor: "#61cbff",
									},
								}}
							>
								Create User
							</Button>
						</Box>
					</Form>
				)}
			</Formik>
		</Box>
	);
};

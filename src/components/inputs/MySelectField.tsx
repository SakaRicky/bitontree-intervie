import React from "react";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useField, useFormikContext } from "formik";

interface SelectFieldProps {
	name: string;
	value?: string;
	options: string[];
	callback?: (param: string) => void;
}

export const MySelectField = ({
	name,
	value,
	options,
	callback,
}: SelectFieldProps) => {
	const [field] = useField(name);

	const { setFieldValue } = useFormikContext();

	const handleChange = (event: SelectChangeEvent<string>) => {
		const value = event.target.value;
		if (callback) {
			callback(value);
		}
		setFieldValue(name, value);
	};

	return (
		<Select
			value={value || field.value}
			onChange={handleChange}
			size="small"
			fullWidth
			sx={{
				marginTop: 1,
				"& fieldset": {
					paddingLeft: theme => theme.spacing(2.5),
					borderRadius: "10px",
				},
				"&.Mui-focused .MuiOutlinedInput-notchedOutline": {
					border: "1px solid black",
				},
			}}
		>
			{options.map(state => (
				<MenuItem key={state} value={state}>
					{state}
				</MenuItem>
			))}
		</Select>
	);
};

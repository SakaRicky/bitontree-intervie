import { TextField } from "@mui/material";
import { useField } from "formik";

interface TextFieldProps {
	name: string;
	label: string;
	type: string;
}

interface configTextField {
	label: string;
	fullWidth: boolean;
	error: boolean;
	helperText: string;
	variant: "filled" | "outlined" | "standard";
	type: string;
}

export const MyTextField = ({ name, label, type }: TextFieldProps) => {
	const [field, meta] = useField(name);

	const configTextField: configTextField = {
		...field,
		fullWidth: true,
		label,
		variant: "outlined",
		error: false,
		helperText: "",
		type,
	};

	if (meta && meta.touched && meta.error) {
		configTextField.error = true;
		configTextField.helperText = meta.error;
	}

	return (
		<TextField
			size="small"
			{...configTextField}
			sx={{
				"& fieldset": {
					paddingLeft: theme => theme.spacing(2.5),
					borderRadius: "10px",
				},
			}}
		/>
	);
};

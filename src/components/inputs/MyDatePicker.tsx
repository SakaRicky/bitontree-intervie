import React from "react";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { TextField } from "@mui/material";
import { useField, useFormikContext } from "formik";
import { CalendarIcon } from "../SVG/CalendarIcon";

export const MyDatePicker = ({ name }: { name: string }) => {
	const [field] = useField(name);
	const { setFieldValue } = useFormikContext();

	return (
		<LocalizationProvider dateAdapter={AdapterMoment}>
			<DesktopDatePicker
				value={field.value}
				label=""
				inputFormat="MM/DD/YYYY"
				renderInput={params => (
					<TextField
						size="small"
						fullWidth
						{...params}
						sx={{
							"& fieldset": {
								paddingLeft: theme => theme.spacing(2.5),
								borderRadius: "10px",
							},
						}}
					/>
				)}
				onChange={date => setFieldValue(name, date)}
				components={{
					OpenPickerIcon: CalendarIcon,
				}}
			/>
		</LocalizationProvider>
	);
};

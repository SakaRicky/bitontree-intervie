import React, { useState, useEffect } from "react";
import { Box, MenuItem, Typography } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { grey } from "@mui/material/colors";
import { WeatherWidget } from "../components/weather/WeatherWidget";
import { getWeather } from "../services/weather";
import { WeatherData } from "../types";
import { Spinner } from "../components/spinner/Spinner";
import type { RootState } from "../store/index";
import { useSelector } from "react-redux";

export const Weather = () => {
	const indianStates = useSelector((state: RootState) => state.indianStates);
	const [selectdState, setSelectedState] = useState<string>(indianStates[0]);
	const [weatherData, setWeatherData] = useState<WeatherData>();

	const handleChange = (event: SelectChangeEvent) => {
		setSelectedState(event.target.value as string);
	};

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const fetchWeather = async () => {
		try {
			const weatherData = await getWeather(selectdState);
			setWeatherData(weatherData);
		} catch (error) {
			console.log("error: ", error);
		}
	};

	useEffect(() => {
		fetchWeather();
	}, [selectdState, fetchWeather]);

	return (
		<Box
			sx={{
				flexGrow: 1,
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
			}}
		>
			<Typography sx={{ marginLeft: 2 }}>Weather</Typography>
			<Box sx={{ height: "93%" }}>
				<Box
					sx={{
						borderRadius: 5,
						backgroundColor: "white",
						height: "100%",
					}}
				>
					<Box
						sx={{
							display: "flex",
							justifyContent: "center",
						}}
					>
						<Box marginTop={6} sx={{ width: { xs: "70%", md: "40%" } }}>
							<Typography color={grey["600"]} textAlign="center">
								Select State
							</Typography>
							<Select
								value={selectdState}
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
								{indianStates.map(state => (
									<MenuItem key={state} value={state}>
										{state}
									</MenuItem>
								))}
							</Select>
						</Box>
					</Box>
					<Box marginTop={6}>
						{weatherData ? (
							<WeatherWidget weatherData={weatherData} />
						) : (
							<Box sx={{ display: "flex", justifyContent: "center" }}>
								<Spinner />
							</Box>
						)}
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

import React from "react";
import { Box } from "@mui/material";
import { WeatherItem } from "./WeatherItem";
import { VerticalLine } from "./VerticalLine";
import { WeatherData } from "../../types";

interface WeatherWidgetProps {
	weatherData: WeatherData;
}
export const WeatherWidget = ({ weatherData }: WeatherWidgetProps) => {
	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "space-around",
				alignItems: "center",
				backgroundColor: "#A2E0FF",
				borderRadius: 5,
				color: "white",
				width: "70%",
				height: "20vh",
				marginInline: "auto",
				fontFamily: "Podkova",
			}}
			className="weather-widget"
		>
			<WeatherItem label="Temperature" data={`${weatherData.temp_c}°c`} />
			<VerticalLine />
			<WeatherItem label="Humidity" data={`${weatherData.humidity}`} />
			<VerticalLine />
			<WeatherItem label="Pressure" data={`${weatherData.pressure_mb}`} />
		</Box>
	);
};

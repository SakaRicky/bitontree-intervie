import axios from "axios";
import { WeatherData } from "../types";

interface ResponseData {
	current: WeatherData;
}

export const getWeather = async (state: string): Promise<WeatherData> => {
	const options = {
		method: "GET",
		params: { q: state },
		headers: {
			"X-RapidAPI-Key": process.env.REACT_APP_WEATHER_API_KEY,
			"X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
		},
	};

	const { data: responseData } = await axios.get<ResponseData>(
		"https://weatherapi-com.p.rapidapi.com/current.json",
		options
	);
	return responseData.current;
};

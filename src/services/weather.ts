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
			"X-RapidAPI-Key": "0f8a45e3e3msh9481dcbf8f9ed4dp19fdf3jsn47ee12586c36",
			"X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
		},
	};

	const { data: responseData } = await axios.get<ResponseData>(
		"https://weatherapi-com.p.rapidapi.com/current.json",
		options
	);
	return responseData.current;
};

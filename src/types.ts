import { Moment } from "moment";

export interface User {
	username: string;
	email: string;
	phone: string;
	dateOfBirth: Moment;
	state: string;
}

export interface WeatherData {
	temp_c: number;
	humidity: number;
	pressure_mb: number;
}

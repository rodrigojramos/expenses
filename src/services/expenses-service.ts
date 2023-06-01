import axios, { AxiosRequestConfig } from "axios";
import { BASE_URL } from "../utils/system";

export function findExpensesRequest(month: number, year: number, description: string, sort = "date") {
    const config : AxiosRequestConfig = {
        method: "GET",
        baseURL: BASE_URL,
        url: `/expenses/${month}/${year}`,
        params: {
            description,
            sort
        }
    }

    return axios(config);
}

export function deleteById(id: number) {
    const config : AxiosRequestConfig = {
        method: "DELETE",
        baseURL: BASE_URL,
        url: `/expenses/${id}`,
    }

    return axios(config);
}

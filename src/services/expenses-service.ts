import axios, { AxiosRequestConfig } from "axios";
import { BASE_URL } from "../utils/system";
import { ExpenseDTO } from "../models/expense";

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

export function findById(id: number) {
    const config : AxiosRequestConfig = {
        method: "GET",
        baseURL: BASE_URL,
        url: `/expenses/${id}`,
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

export function updateExpense(obj: ExpenseDTO) {
    const config: AxiosRequestConfig = {
        method: "PUT",
        baseURL: BASE_URL,
        url: `/expenses/${obj.id}`,
        data: obj
    }

    return axios(config);
}

export function insertExpense(obj: ExpenseDTO) {
    const config: AxiosRequestConfig = {
        method: "POST",
        baseURL: BASE_URL,
        url: "/expenses",
        data: obj
    }

    return axios(config);
}

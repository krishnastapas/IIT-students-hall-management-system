import { showMessage } from "../../utils/alert"
import axios from "../axios"
import { responseInterface } from "../Model"

export const chiefWardenLogin = async (props: { email: string, password: string }) => {
    console.log({
        "Email": props.email,
        "password": props.password,
    })

    let path = "/chief-warden/login"
    let payload = {

        "email": props.email,
        "password": props.password,

    }
    try {

        const response = await axios.post(path, payload);
        console.log(response)
        const res = response.data as responseInterface;
        if (res.code != 200) {
            showMessage({ message: res.message, status: res.code })
        }
        return res;


    } catch (error) {
        showMessage({ message: error, status: 500 })
        return null;
    }

}

export const wardenLogin = async (props: { email: string, password: string }) => {
    console.log({
        "Email": props.email,
        "password": props.password,
    })

    let path = "/hall-login"
    let payload = {

        "email": props.email,
        "password": props.password,

    }
    try {

        const response = await axios.post(path, payload);
        console.log(response)
        const res = response.data as responseInterface;
        if (res.code != 200) {
            showMessage({ message: res.message, status: res.code })
        }
        return res;


    } catch (error) {
        showMessage({ message: error, status: 500 })
        return null;
    }

}

export const messLogin = async (props: { email: string, password: string }) => {
    console.log({
        "Email": props.email,
        "password": props.password,
    })

    let path = "/mess-login"
    let payload = {

        "email": props.email,
        "password": props.password,

    }
    try {

        const response = await axios.post(path, payload);
        console.log(response)
        const res = response.data as responseInterface;
        if (res.code != 200) {
            showMessage({ message: res.message, status: res.code })
        }
        return res;


    } catch (error) {
        showMessage({ message: error, status: 500 })
        return null;
    }

}

export const studentLogin = async (props: { email: string, password: string }) => {
    console.log({
        "Email": props.email,
        "password": props.password,
    })

    let path = "/student-login"
    let payload = {

        "email": props.email,
        "password": props.password,

    }
    try {

        const response = await axios.post(path, payload);
        console.log(response)
        const res = response.data as responseInterface;
        if (res.code != 200) {
            showMessage({ message: res.message, status: res.code })
        }
        return res;


    } catch (error) {
        showMessage({ message: error, status: 500 })
        return null;
    }

}
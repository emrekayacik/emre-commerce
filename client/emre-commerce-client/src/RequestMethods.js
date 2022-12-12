import axios from "axios";


const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNzdmMDIyMjMzMGM0MmE3MmYxMmVjMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MDM1ODU2MCwiZXhwIjoxNjcwNjE3NzYwfQ.oHjjaZlcevX7rg6rhbeuc5Q9WLmVcv_-JCYmOWKCSCU";



export const publicRequest = axios.create({
    baseURL : BASE_URL
})

export const userRequest = axios.create({
    baseURL : BASE_URL,
    header: {token:`Bearer ${TOKEN}`}
})
import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmFiYzA1NWMwNjdjYmZhMWRiMGU2NyIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NTY1MDY0MDAsImV4cCI6MTY1Njc2NTYwMH0.eV8dnYqhZ9quz9fDI87f93oW5mFvOUbzh0UMShQXosI";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header:{token:`Bearer ${TOKEN}`}
});
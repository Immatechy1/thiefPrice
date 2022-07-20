import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZDdmY2EwMWEzN2ZkM2U3M2Q1NjYxZiIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NTgzMzA3MjUsImV4cCI6MTY1ODU4OTkyNX0.isZV_B6mr2WTn8ZgBdOU6v3PhZG3WxVSy3ELi5CLkCs";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header:{token:`Bearer ${TOKEN}`}
});
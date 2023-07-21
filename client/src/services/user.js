import api from "./api";

//GET all users from backend
export const fetchAllUsers = async () => await api.get("/users");

//GET single user with given id from backend
export const fetchSingleUser = async (id) => await api.get(`users/${id}`);

//POST request to create a new user
export const createUser = async (data) => await api.post("/users", data);

//PUT request to update an existing user with given id
export const updateUser = async (id, data) => await api.put(`/users/${id}`, data);

//DELETE request to delete an existing user with given id
export const deleteUser = async (id) => await api.delete(`/users/${id}`);

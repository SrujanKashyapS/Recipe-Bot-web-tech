import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const getRecipes = async () => {
    const response = await axios.get(`${API_URL}/recipes`);
    return response.data;
};

// Similarly, update other API functions to use `API_URL`

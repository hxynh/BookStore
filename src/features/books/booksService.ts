import axios from "axios";

const MENU_API_URL = "http://localhost:8000/books";

const showBooks = async () => {
    const response = await axios.get(MENU_API_URL)
    return response.data
}

export const booksService = {
    showBooks
}
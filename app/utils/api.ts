import axios from "axios";

const params = {
    headers: {
        Authorization: "bearer" + process.env.REACT_API_KEY_TOKEN,
    },
};


export const fetchData = async (url: string) => {
    try {
        const apiUrl = "http://localhost:1337/api";
        const { data } = await axios.get(apiUrl + url, params);
        return data;
    } catch (error) {
        console.log(error)
        throw new Error("Error fetching data");
    }
}


export const fetchCategories = () => fetchData("/categories?populate=*")
export const fetchProducts = () => fetchData("/products?populate=*")
export const fetchSubCategories = () => fetchData("/sub-categories?populate=products.image");

export const revalidate = 'force-cache'
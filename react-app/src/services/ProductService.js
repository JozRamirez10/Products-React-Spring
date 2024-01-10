import axios from "axios";

const initProducts = [
    {
        id: 1,
        name: "Monitor Samsung 65",
        price: 500,
        description: "El monitor es íncreible!"
    },
    {
        id: 2,
        name: "Iphone 14",
        price: 800,
        description: "El telefono es muy bueno!"
    }
];

export const listProduct = () =>{
    return initProducts;
}

// Configuración de rutas para axios
const baseUrl = "http://localhost:8080/products"

// Debemos indicar que es una función async para usar "await"
// Convierte la función en una promesa
export const findAll = async () => {
    try{
        const response = await axios.get(baseUrl);
            // await convierte una promise a un objeto real
            // Consulta asincrona -> Espera a que el servidor responda o suceda algo
        return response;
    }catch(error){ // En cado de que el servidor no responda u ocurra un error
        console.log(error);
    }
    return null;
}

export const create = async ({name, description, price}) => {
    try{
        const response = await axios.post(baseUrl, {
            name,
            description,
            price
        });
        return response;
    }catch(error){
        console.log(error);
    }
    return undefined;
}

export const update = async ({id, name, description, price}) => {
    try{
        const response = await axios.put(`${baseUrl}/${id}`, {
        name,
        description,
        price
        })
        return response;
    }catch(error){
        console.log(error);
    }
    return undefined;
}

export const remove = async (id) => {
    try{
        await axios.delete(`${baseUrl}/${id}`)
    }catch(error){
        console.log(error)
    }
}

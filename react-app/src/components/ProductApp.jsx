import { useEffect, useState } from "react";
import { findAll, create, update, remove } from "../services/ProductService";
import { ProductGrid } from "./ProductGrid";
import { ProductForm } from "./ProductForm";

export const ProductApp = () => {
    
    const [products, setProducts] = useState([]);

    const [productSelected, setProductSelected] = useState({
        id: 0,
        name: '',
        description: '',
        price: ''
    })
    
    // Obtiene la lista de productos
    const getProducts = async() =>{
        const result = await findAll();
        setProducts(result.data._embedded.products);
    }

    useEffect(() =>{
        getProducts();
    }, []);

    const handlerAddProduct = async (product) => {
        if(product.id > 0){
            const response = await update(product);
            setProducts(products.map(prod => {
                if(prod.id == response.data.id){
                    return {...response.data};
                }
                return prod;
            }));
        }else{
            const response = await create(product);
            setProducts([...products, {...response.data}]);
        }
    }

    const handlerRemoveProduct = (id) => {
        remove(id);
        setProducts(products.filter(product => product.id != id));
    }

    const handlerProductSelected = (product) => {
        setProductSelected({...product});
    }

    return (
       <>
        <div className="container my-4">
            <h1>Lista de Productos</h1>
            <div className="row">
                <div className="col">
                    {
                        products.length == 0 ? <div
                            className="alert alert-warning">
                            No hay productos en el sistema
                        </div>
                        : <ProductGrid products={products} 
                            handlerRemove={handlerRemoveProduct}
                            handlerSelected={handlerProductSelected} 
                            />
                    }
                </div>
                <div className="col">
                    <ProductForm handlerAdd={handlerAddProduct}
                        productSelected={productSelected}
                    />
                </div>
            </div>
        </div>
       </>
    )
}
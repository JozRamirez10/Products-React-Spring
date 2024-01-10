import { ProductDetail } from "./ProductDeatail";
import { PropTypes } from "prop-types";

export const ProductGrid = ({products, handlerRemove, handlerSelected}) =>{
    return (
        <>
            <table className="table table-hover table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Update</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => {
                        return <ProductDetail product={product} 
                            key={product.name} 
                            handlerSelected={handlerSelected}
                            handlerRemove={handlerRemove} 
                            />
                    })}
                </tbody>
            </table>
        </>
    )
}

// Valida que la variable sea diferente de null
ProductGrid.propTypes = {
    products: PropTypes.array.isRequired,
    handlerRemove: PropTypes.func.isRequired,
    handlerSelected: PropTypes.func.isRequired
}
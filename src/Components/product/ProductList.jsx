import React, { useEffect, useState } from 'react';
import './ProductList.css'
import Search from '../search/Search';
import Product from './Product';
import Categories from '../categories/Categories';
import { products as ProductData } from '../../products-data'

const allCategories = ["all" , 
...new Set(ProductData.map((product)=> product.category))]

const ProductList = () => {
    const [products, setProducts] = useState(ProductData);
    const [search, setSearch] = useState("");
    const [filteredProduct, setFilteredProduct] = useState([]);
    const [categories, setCategories] = useState(allCategories);

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    const filterProduct = (category)=>{
        if (category ==="all"){
            setProducts(ProductData)
            return;
        }
        const newProduct = ProductData.filter((product)=>
        product.category=== category)
        setProducts(newProduct)
    }

    useEffect(() => {
        setFilteredProduct(
            products.filter((product) => product.title.toLowerCase().includes(search.toLowerCase()))
        )
    }, [search, products])

    return (
        <>
            <div className="header">
                <header className="container">
                    <h1 className='--color-white --text-center'>
                        <span className='--text --color-danger'>Product</span>
                        Filter</h1>
                    <div className="--flex-between --flex-dir-column --py">
                        <Search inputValue={search} handleSearch={handleSearch} />
                        <Categories filterProduct={filterProduct} categories={categories}  />
                    </div>
                </header>
            </div>
            <div className="product-container">
                <div className="products container --grid-25 --py2">
                    {filteredProduct.length === 0 ? (
                        <h3 className='--color-danger'> No match Products for this Search!!</h3>
                    ) : (
                        filteredProduct.map((prod) => {
                            const { id, title, price, img } = prod
                            return (
                                <div key={id}>
                                    <Product title={title} price={price} img={img} />
                                </div>
                            )
                        })
                    )
                    }
                </div>
            </div>
        </>
    )
}

export default ProductList
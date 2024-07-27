import React, { useEffect, useState } from 'react'

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await fetch('https://fakestoreapi.com/products')
                const data = await res.json();

                setProducts(data)
            } catch (error) {
                console.log(error)
            }
        }
        getProducts();
    }, [])

    return (
        <>
            <div className='product-layout'>
                {
                    products && products.map((p) => (
                        <div key={p.id} className='product-card'>
                            <div style={{
                                backgroundImage: "url(" + p.image + ")",
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                width: '25rem',
                                height: '25rem',
                                position: 'absolute',
                                transition: '0.7s'

                            }}></div>
                            <div className='product-card-layout'>

                            </div>
                            <div className='product-card-footer'>
                                <a className='btn btn--rectangle btn--white'>READ MORE</a>
                                <a className='btn btn--rectangle btn--white '>ADD To CART</a>
                            </div>
                        </div>
                    ))

                }
            </div>

        </>
    )
}

export default Products

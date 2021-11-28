import React, {useState, useEffect} from 'react'
import {useCart} from '../../hooks/useCart'

import {Prateleira} from './styles'
import {api} from '../../services/api'
import {formatPrice} from '../../util/format'
import StarRatings from 'react-star-ratings'
import flag from '../../assets/images/flag-off.svg'

import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

// import Swiper core and required modules
import SwiperCore, {
    Navigation, Pagination
} from 'swiper'

// install Swiper modules
SwiperCore.use([Navigation, Pagination])

interface Product {
    productId: number
    productName: string
    stars: number
    imageUrl: string
    listPrice: number
    price: number
    installments: [
        {
            quantity: number
            value: number
        }
    ]
}

interface ProductFormatted extends Product {
    priceFormatted: string
    listPriceFormatted: string
}

const Home = (): JSX.Element => {
    const [products, setProducts] = useState<ProductFormatted[]>([])
    const {addProduct} = useCart()

    useEffect(() => {
        async function loadProducts() {
            const response = await api.get<Product[]>('')

            const data = response.data.map(product => ({
                ...product,
                priceFormatted: formatPrice(product.price / 100),
                listPriceFormatted: formatPrice(product.listPrice / 100),
            }))

            setProducts(data)
        }

        loadProducts()
    }, [])

    function handleAddProduct(id: number) {
        addProduct(id)
    }

    console.log('products', products)

    return (
        <Prateleira className="container">
            <h2>Mais Vendidos</h2>

            <Swiper
                navigation={true}
                loop={true}
                pagination={true}
                breakpoints={{
                    "320": {
                        "slidesPerView": 2,
                        "spaceBetween": 20
                    },
                    "768": {
                        "slidesPerView": 3,
                        "spaceBetween": 50,
                    },
                    "1024": {
                        "slidesPerView": 4,
                        "spaceBetween": 100
                    }
                }}
            >
                {products.map(product => (
                    <SwiperSlide className="product" key={product.productId}>
                        <figure>
                            <img className="image-product" src={product.imageUrl} alt={product.productName}/>
                            {
                                product.listPrice > product.price ?
                                <img src={flag} className="badge" alt="Off"/> : null
                            }
                        </figure>

                        <div className="box-info">
                            <span className="title-product">{product.productName}</span>

                            <StarRatings
                                rating={product.stars}
                                starRatedColor="#F8475F"
                                numberOfStars={5}
                                starDimension="13px"
                                name="rating"
                                starSpacing="2px"
                            />

                            <span className="list-price"> {product.listPrice > product.price ? 'de ' + product.listPriceFormatted : null }</span>

                            <span className="best-price">por {product.priceFormatted}</span>
                            <span className="installments">
                                {
                                    product.installments.map((installments, index) => (
                                        <div key={index}>ou em {installments.quantity}x de {formatPrice(installments.value / 100)} </div>
                                    ))
                                }
                            </span>

                            <button className="btn-comprar" type="button" onClick={() => handleAddProduct(product.productId)}>
                                <span>COMPRAR</span>
                            </button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </Prateleira>
    )
}

export default Home

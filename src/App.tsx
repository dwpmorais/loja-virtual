import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import Routes from './routes'
import GlobalStyles from './styles/global'
import Header from './components/Header'
import Slider from './components/Slider'
import Footer from './components/Footer'
import Newsletter from "./components/Newsletter"
import {CartProvider} from './hooks/useCart'

const App = (): JSX.Element => {
    return (
        <BrowserRouter>
            <CartProvider>
                <GlobalStyles/>
                <Header/>
                <Slider/>
                <Routes/>
                <ToastContainer autoClose={3000}/>
            </CartProvider>
            <Newsletter/>
            <Footer/>
        </BrowserRouter>
    )
}

export default App

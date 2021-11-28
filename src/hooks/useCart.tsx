import {createContext, ReactNode, useContext, useEffect, useRef, useState} from 'react'
import {toast} from 'react-toastify'

interface CartProviderProps {
    children: ReactNode
}

interface CartContextData {
    cart: number[]
    addProduct: (productId: number) => Promise<void>
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({children}: CartProviderProps): JSX.Element {
    const [cart, setCart] = useState<number[]>(() => {
        const storagedCart = localStorage.getItem('@LojaVirtual:cart')

        if (storagedCart) {
            return JSON.parse(storagedCart)
        }

        return []
    })

    const prevCartRef = useRef<number[]>()

    useEffect(() => {
        prevCartRef.current = cart
    })

    const cartPreviousValue = prevCartRef.current ?? cart

    useEffect(() => {
        if (cartPreviousValue !== cart) {
            localStorage.setItem('@LojaVirtual:cart', JSON.stringify(cart))
        }
    }, [cart, cartPreviousValue])

    const addProduct = async (productId: number) => {
        try {
            const updatedCart = [...cart];
            updatedCart.push(productId);

            setCart(updatedCart);
            toast.success('Produto adicionado ao carrinho');
        } catch {
            toast.error('Erro ao adicionar o produto ao carrinho');
        }
    }

    return (
        <CartContext.Provider
            value={{cart, addProduct}}
        >
            {children}
        </CartContext.Provider>
    )
}

export function useCart(): CartContextData {
    return useContext(CartContext)
}

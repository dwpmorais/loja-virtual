import React from 'react';
import {Link} from 'react-router-dom';
import {useCart} from '../../hooks/useCart';
import {MdSearch, MdMenu} from 'react-icons/md';
import {Cart, Container, Widgets, Search, MyAccount} from './styles'
import logo from '../../assets/images/logo.svg';
import shoppingCart from '../../assets/images/cart.svg';
import user from '../../assets/images/user.svg';

const Header = (): JSX.Element => {
    const {cart} = useCart();
    const cartSize = cart.length;

    return (
        <Container className="container">

            <MdMenu className="icon-menu" size={23} color="#000000"/>

            <Link to="/" className="logo">
                <img src={logo} alt="Logo"/>
            </Link>

            <Search>
                <input type="text" name="busca"  placeholder="O que está procurando?" />
                <button type="submit"> <MdSearch size={18} color="#000000"/> </button>
            </Search>

            <Widgets>
                <MyAccount>
                    <img src={user} alt="Minha Conta"/>
                    <span>Minha Conta</span>
                </MyAccount>

                <Cart to="/">
                    <img src={shoppingCart} alt="Meu Carrinho"/>
                    <div>
                        <span>
                            {cartSize}
                        </span>
                    </div>
                </Cart>
            </Widgets>

        </Container>
    );
};

export default Header;

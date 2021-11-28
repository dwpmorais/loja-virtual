import React from 'react';
import { MdEmail, MdHeadsetMic } from 'react-icons/md';
import { Container } from './styles'

import logoFooter from '../../assets/images/logo-footer.svg';
import logoVTEX from '../../assets/images/logo-vtex.svg';

const Footer = (): JSX.Element => {

    return (
        <Container>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h3>Localização</h3>
                        <address>
                            Avenida Andrômeda, 2000. Bloco 6 e 8<br/>
                            Alphavile SP <br/>
                            brasil@corebiz.ag <br/>
                            +55 11 3090 1039
                        </address>
                    </div>
                    <div className="col-md-4">
                        <button><MdEmail size={16} color="#000000"/> Entre em Contato </button>
                        <button><MdHeadsetMic size={26} color="#000000"/> Fale com o nosso consultor online </button>
                    </div>
                    <div className="col-md-4">
                        <div className="selos">
                            <div className="partner">
                                <span>Created by</span>
                                <img src={logoFooter} alt="Logo" />
                            </div>
                            <div className="partner">
                                <span>Powered by</span>
                                <img src={logoVTEX} alt="Logo" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Footer;

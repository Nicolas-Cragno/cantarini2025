import React from 'react';
import '../assets/css/Menu.css';
import { Container, Row, Col } from 'react-bootstrap';
import optionLogo from '../assets/statics/repairLogo.png';

export default function Menu() {
    const desplegarMenu = () => {
        document.getElementById('menuPrincipal').style.width="20%";
        document.getElementById('menuPrincipal').style.transition="1s";
        setTimeout(() => {
            document.getElementById('opcionOculta').style.display="flex";
            document.getElementById('opcionOculta').style.transition="2s";
        }, 400);
    }

    const ocultarMenu = () => {
        document.getElementById('menuPrincipal').style.width="5%";
        document.getElementById('menuPrincipal').style.transition="1s";
        document.getElementById('opcionOculta').style.display="none";
    }

  return (
    <div className='menuPrincipal centrado' id='menuPrincipal' onMouseOver={desplegarMenu} onMouseLeave={ocultarMenu}>
        <Container>
            <Row>
                <Col xl={12} className='centrado'>
                    <img src={optionLogo} className='bigOptionLogo' alt='' id='opcionActiva'></img>
                    <h4 className='menuOption centrado' id='opcionOculta'>
                        <img src={optionLogo} className='smallOptionLogo' alt=''></img>
                        NUEVA CARGA
                    </h4>
                </Col>
            </Row>
        </Container>


    </div>
  )
}

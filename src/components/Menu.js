import React from 'react';
import '../assets/css/Menu.css';
import { Container, Row, Col } from 'react-bootstrap';
import optionLogo1 from '../assets/statics/plusLogo.svg';
import optionLogo2 from '../assets/statics/foundLogo.svg';
import optionLogo3 from '../assets/statics/driverLogo.svg';
import optionLogo4 from '../assets/statics/graphLogo.svg';
/* comentario innecesario */

export default function Menu() {
    const activarOpcion1 = () => {
        document.getElementById('pageOne').style.display="flex";
        document.getElementById('pageTwo').style.display="none";
        document.getElementById('pageThree').style.display="none";
        document.getElementById('pageFour').style.display="none";
    }
    
    const activarOpcion2 = () => {
        document.getElementById('pageOne').style.display="none";
        document.getElementById('pageTwo').style.display="flex";
        document.getElementById('pageThree').style.display="none";
        document.getElementById('pageFour').style.display="none";
    };

    const activarOpcion3 = () => {
        document.getElementById('pageOne').style.display="none";
        document.getElementById('pageTwo').style.display="none";
        document.getElementById('pageThree').style.display="flex";
        document.getElementById('pageFour').style.display="none";
    }
    
    const activarOpcion4 = () => {
        document.getElementById('pageOne').style.display="none";
        document.getElementById('pageTwo').style.display="none";
        document.getElementById('pageThree').style.display="none";
        document.getElementById('pageFour').style.display="flex";
    };
  return (
    <>
    <div>
        <Container fluid>
            <Row>
                <Col md={1}>
                    <Row className='menuPrincipal centrado' id='menuPrincipal'>
                        <Col xl={12} className='menuOption centrado'>
                            <img src={optionLogo1} className='optionLogo' alt='' onClick={activarOpcion1}></img>
                        </Col>
                        <Col xl={12} className='menuOption centrado'>
                            <img src={optionLogo2} className='optionLogo' alt='' onClick={activarOpcion2}></img>
                        </Col>
                        <Col xl={12} className='menuOption centrado'>
                            <img src={optionLogo3} className='optionLogo' alt='' onClick={activarOpcion3}></img>
                        </Col>
                        <Col xl={12} className='menuOption centrado'>
                            <img src={optionLogo4} className='optionLogo' alt='' onClick={activarOpcion4}></img>
                        </Col>
                    </Row>
                </Col>
                <Col md={11} id='pageOne'>
                    <h1>Nueva Carga</h1>
                </Col>
                <Col md={11} id='pageTwo'>
                    <h1>Viajes</h1>
                </Col>
                <Col md={11} id='pageThree'>
                    <h1>Choferes</h1>
                </Col>
                <Col md={11} id='pageFour'>
                    <h1>Comparativas</h1>
                </Col>
            </Row>
        </Container>
    </div>
    </>
  )
}
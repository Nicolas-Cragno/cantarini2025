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
        console.log("fasfafa")
    }
  return (
    <>
    <div>
        <Container fluid>
            <Row className='menuPrincipal centrado' id='menuPrincipal'>
                <Col xl={12} className='menuOption centrado'>
                    <img src={optionLogo1} className='optionLogo' alt='' onClick={activarOpcion1}></img>
                </Col>
                <Col xl={12} className='menuOption centrado'>
                    <img src={optionLogo2} className='optionLogo' alt=''></img>
                </Col>
                <Col xl={12} className='menuOption centrado'>
                    <img src={optionLogo3} className='optionLogo' alt=''></img>
                </Col>
                <Col xl={12} className='menuOption centrado'>
                    <img src={optionLogo4} className='optionLogo' alt=''></img>
                </Col>
            </Row>
        </Container>
    </div>
    </>
  )
}
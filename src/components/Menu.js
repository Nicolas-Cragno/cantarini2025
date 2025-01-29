import React from 'react';
import '../assets/css/Menu.css';
import { Container, Row, Col } from 'react-bootstrap';
import optionLogo from '../assets/statics/repairLogo.png';

export default function Menu() {
  return (
    <div className='menuPrincipal centrado'>
        <Container>
            <Row>
                <Col xl={12} className='centrado'>
                    <img src={optionLogo} className='bigOptionLogo' alt=''></img>
                    <h4 className='menuOption centrado'>
                        <img src={optionLogo} className='smallOptionLogo' alt=''></img>
                        NUEVA CARGA
                    </h4>
                </Col>
                <Col xl={12} className='centrado'>
                    <img src={optionLogo} className='bigOptionLogo' alt=''></img>
                    <h4 className='menuOption centrado'>
                        <img src={optionLogo} className='smallOptionLogo' alt=''></img>
                        VIAJES
                    </h4>
                </Col>
                <Col xl={12} className='centrado'>
                    <img src={optionLogo} className='bigOptionLogo' alt=''></img>
                    <h4 className='menuOption centrado'>
                        <img src={optionLogo} className='smallOptionLogo' alt=''></img>
                        CHOFERES
                    </h4>
                </Col>
                <Col xl={12} className='centrado'>
                    <img src={optionLogo} className='bigOptionLogo' alt=''></img>
                    <h4 className='menuOption centrado'>
                        <img src={optionLogo} className='smallOptionLogo' alt=''></img>
                        COMPARATIVAS
                    </h4>
                </Col>
            </Row>
        </Container>


    </div>
  )
}

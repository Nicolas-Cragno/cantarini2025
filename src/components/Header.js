import React from 'react';
import '../assets/css/Header.css';
import LogoPrincipal from '../assets/statics/logoPrincipal.png';
import userImg from '../assets/statics/nnLogo.png';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Header() {
    const desactivarOpciones = () => {
        document.getElementById('pageOne').style.display="none";
        document.getElementById('pageTwo').style.display="none";
        document.getElementById('pageThree').style.display="none";
        document.getElementById('pageFour').style.display="none";
    }
  return (
    <div className='header centrado'>
        <Container>
            <Row>
                <Col sd={6} className='leftHeader izquierda'>
                    <Link to="/" alt='' className='logoPrincipal linkLimpio'>
                        <img className='logoPrincipal' src={LogoPrincipal} alt='' onClick={desactivarOpciones}></img>
                    </Link> 
                </Col>
                <Col sd={6} className='rightHeader derecha'>
                    <h5 className='userName'>Nombre Usuario</h5>
                    <img className='userImg' src={userImg} alt=''></img>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

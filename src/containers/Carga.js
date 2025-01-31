import React from 'react';
import '../assets/css/Carga.css';
import { Container, Row, Col } from 'react-bootstrap';

export default function Carga() {
  return (
    <>
        <Container fluid className='nuevaCarga centrado'>
            <Row>
                <Col xs={12} className='a'>
                    <label>VIAJE</label>
                    <input></input>
                    <button></button>

                    <label>SALIDA</label>
                    <p>Buenos Aires</p>
                </Col>
            </Row>
        </Container>
    </>
  )
}

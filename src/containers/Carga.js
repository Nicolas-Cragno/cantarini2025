import React from 'react';
import '../assets/css/Carga.css';
import { Container, Row, Col } from 'react-bootstrap';
import ItemCarga from '../components/ItemCarga';
import ItemDescript from '../components/ItemDescript';

export default function Carga() {
  const nuevaCarga = () => {
    let windowContext = document.getElementById("ventanaCargas");
    windowContext.prepend(ItemCarga('1'));
  };
  return (
    <>
        <Container fluid className='nuevaCarga centrado'>
            <Row>
                <Col xs={12} className='nuevaCargaTop centrado'>
                  <label>VIAJE</label>
                  <input type='number'></input>
                  <label>FECHA</label>
                  <input type='date'></input>
                  <label>CLIENTE</label>
                  <input type='text'></input>
                  <label>CHOFER</label>
                  <input type='text'></input>
                  <label>INTERNO</label>
                  <input type='number'></input>
                </Col>
                <Row className='centrado'>
                  <Col xs={12}>
                    <h1>Tramos</h1>
                  </Col>
                  <Col md={8} className='nuevaCargaCenterLeft'>
                    <Row>
                      <Col xs={12} className='windowScroll'>
                        <ItemCarga nro='1'></ItemCarga>
                        <div id='ventanaCargas'>
                        <button className='btnStyle' onClick={nuevaCarga}>
                        + añadir carga
                        </button>
                        </div>
                      </Col>
                      <Col xs={12}>
                       <ItemCarga nro='@'></ItemCarga>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={4} className='nuevaCargaCenterRight centrado'>
                    <ItemDescript descript='km recorridos' title='6000'></ItemDescript>
                    <ItemDescript descript='litros ticket' title='1500'></ItemDescript>
                    <ItemDescript descript='litros satelital' title='1550'></ItemDescript>
                  </Col>
                </Row>
                  <Col md={10} className='nuevaCargaUnder centrado ocuparTercio'>
                    <div className='underBox'>
                      <ItemDescript descript='litros-diferencia' title='45,25'></ItemDescript>
                    </div>
                    <div className='underBox'>
                      <ItemDescript descript='lts cada 100 km' title='26,02'></ItemDescript>
                    </div>
                    <div>
                      <button className='btnStyle'>CARGAR</button>
                    </div>
                  </Col>
            </Row>
        </Container>
    </>
  )
}

import React, {useState} from 'react';
import '../assets/css/Carga.css';
import { Container, Row, Col } from 'react-bootstrap';
import ItemCarga from '../components/ItemCarga';
import ItemDescript from '../components/ItemDescript';

export default function Carga() {
  const [kmRecorridos] = useState(0);
  const [ltsTicket] = useState(0);
  const [ltsSatelital] = useState(0);
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
                        <div className='itemCarga izquierda'>
                            <h3 className='itemCargaNumber centrado'>1</h3>
                            <label>Fecha</label>
                            <input type='date'></input>
                            <label>Litros</label>
                            <input type='number' id='ltsTicket1'></input>
                            <label>Lugar</label>
                            <input type='text'></input>
                        </div>
                        <div className='itemCarga izquierda'>
                            <h3 className='itemCargaNumber centrado'>2</h3>
                            <label>Fecha</label>
                            <input type='date'></input>
                            <label>Litros</label>
                            <input type='number' id='ltsTicket2'></input>
                            <label>Lugar</label>
                            <input type='text'></input>
                        </div>
                        <div className='itemCarga izquierda'>
                            <h3 className='itemCargaNumber centrado'>3</h3>
                            <label>Fecha</label>
                            <input type='date'></input>
                            <label>Litros</label>
                            <input type='number' id='ltsTicket3'></input>
                            <label>Lugar</label>
                            <input type='text'></input>
                        </div>
                        <div className='itemCarga izquierda'>
                            <h3 className='itemCargaNumber centrado'>4</h3>
                            <label>Fecha</label>
                            <input type='date'></input>
                            <label>Litros</label>
                            <input type='number' id='ltsTicket4'></input>
                            <label>Lugar</label>
                            <input type='text'></input>
                        </div>
                        {/* 
                        <ItemCarga nro='1'></ItemCarga>
                        <ItemCarga nro='2'></ItemCarga>
                        <ItemCarga nro='3'></ItemCarga>
                        <ItemCarga nro='4'></ItemCarga>
                        <div id='ventanaCargas'>
                        <button className='btnStyle'>
                        + añadir carga
                        </button>
                        </div>
                        */}
                      </Col>
                      <Col xs={12}>
                       <ItemCarga nro='@'></ItemCarga>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={4} className='nuevaCargaCenterRight centrado'>
                    <ItemDescript descript='km recorridos' title={kmRecorridos}></ItemDescript>
                    <ItemDescript descript='litros ticket' title={ltsTicket}></ItemDescript>
                    <ItemDescript descript='litros satelital' title={ltsSatelital}></ItemDescript>
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

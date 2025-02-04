import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function ItemDescript(props) {
    const {descript, title} = props;
  return (
    <div className='itemDescript derecha'>
        <Container>
            <Row>
                <Col xs={12}>
                    <label className='itemDescriptLabel'>{descript}</label>
                </Col>
                <Col xs={12}>
                    <h3 className='itemDescriptTitle'>{title}</h3>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

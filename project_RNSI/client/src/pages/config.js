import React from "react";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

function Config() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Container fluid="md">
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Col className="mb-3">
        <Form.Check
          label="Осуществлять актуализацию справочников из ФНСИ"
          name="is_integ" access="false" id="checkbox1" value="true" type="checkbox"
        />
        </Col>
        <Form.Group className="mb-3">
        <Form.Label>Дни недели</Form.Label>
        <Form.Check
          label="Понедельник"
          access="false" id="control1" name="Mon" value="mon" type="checkbox"
        />
        <Form.Check
          label="Вторник"
          access="false" id="control2" name="Tue" value="tue" type="checkbox"
        />
        <Form.Check
          label="Среда"
          access="false" id="control3" name="Wed" value="wed" type="checkbox"
        />
        <Form.Check
          label="Четверг"
          access="false" id="control4" name="Thu" value="thu" type="checkbox"
        />
        <Form.Check
          label="Пятница"
          access="false" id="control5" name="Fri" value="fri" type="checkbox"
        />
        <Form.Check
          label="Суббота"
          access="false" id="control6" name="Sat" value="sat" type="checkbox"
        />
        <Form.Check
          label="Воскресение"
          access="false" id="control7" name="Sun" value="sun" type="checkbox"
        />
        </Form.Group>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Время начала</Form.Label>
          <Form.Control
            type="time" name="timeSt" id="timeSt" required
          />
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Время окончания</Form.Label>
          <Form.Control
            type="time" name="timeEnd" id="timeEnd" required
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom03">
          <Form.Label>Адрес REST API ФНСИ</Form.Label>
          <Form.Control type="url" name="url" access="false" id="url" required />
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom04">
          <Form.Label>Токен</Form.Label>
          <Form.Control type="text" class="form-control" name="token" access="false" id="token" required />
        </Form.Group>
      </Row>
      
      <Button type="submit">Сохранить</Button>
    </Form>
    </Container>
  );
}

export default Config;
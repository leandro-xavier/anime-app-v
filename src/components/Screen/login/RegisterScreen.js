import React from 'react';
import {Form, Col, Row} from 'react-bootstrap';
import { useForm } from '../../../hooks/useForm';

export const RegisterScreen = () => {

    const [formValues, handleInputChange ] = useForm( {
        name: '',
        email: '',
        password: '',
        password2: ''
    })

    const {name, email, password, password2} = formValues;

    const handleSubmit = (e)=> {
        e.preventDefault()
        console.log(formValues);
    }


    return (
        <div className="align-items-center">
        <Form onSubmit={handleSubmit}>
         <Row className="col-4">
             <h1 className="text-white">Registro</h1>
            <Col className="">
                <Form.Floating className="mb-3">
                <Form.Control
                    id="floatingInputCustom"
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange={handleInputChange}
                    />
                    <label htmlFor="floatingInputCustom">Name</label>
                 </Form.Floating>
            </Col>
            <Form.Floating>
                <Form.Control
                    id="floatingPasswordCustom"
                    type="email"
                    placeholder="Password"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                    />
                    <label htmlFor="floatingPasswordCustom">Email</label>
            </Form.Floating>
            <Form.Floating>
                <Form.Control
                    id="floatingPasswordCustom"
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={handleInputChange}
                    />
                    <label htmlFor="floatingPasswordCustom">Password</label>
            </Form.Floating>

            <Form.Floating>
                <Form.Control
                    id="floatingPasswordCustom"
                    type="password"
                    placeholder="Password"
                    name="password2"
                    value={password2}
                    onChange={handleInputChange}
                    />
                    <label htmlFor="floatingPasswordCustom">repite contraseña</label>
            </Form.Floating>

            <button type="submit" className="btn btn-danger">enviar</button>
            </Row>
            </Form>
        </div>
    )
}

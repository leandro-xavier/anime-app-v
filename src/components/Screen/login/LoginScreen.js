import React from 'react';
import {Form} from 'react-bootstrap';
import { useForm } from '../../../hooks/useForm';


export const LoginScreen = () => {

  const [formValues, handleInputChange] = useForm({
        email: '',
        password: ''
    })

    const {email, password} = formValues;

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formValues);
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
            <h1 className="text-white">Login</h1>
                <Form.Floating className="mb-3">
                    <Form.Control id="floatingInputCustom" type="email" placeholder="name@example.com" name="email" value={email} onChange={handleInputChange}/>
                        <label htmlFor="floatingInputCustom">Email</label>
                </Form.Floating>
                <Form.Floating>
                    <Form.Control id="floatingPasswordCustom" type="password" placeholder="Password" name="password" value={password} onChange={handleInputChange}/>
                        <label htmlFor="floatingPasswordCustom">Password</label>
                </Form.Floating>
                <button type="submit" className="btn btn-light">logearse</button>
             </Form>
        </div>
    )
}

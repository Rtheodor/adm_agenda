import React from 'react';
import { Form,FormGroup,Label,Input,Button } from 'reactstrap';
import '../../styles/login/index.css';


export default function Login() {
    return (
        <>
            <div className="login card shadow">
                <Form className="form-signin text-center">
                    <img className="mb-4" src="images/logo_celke.png" alt="Celke" width="72" height="72" />
                    <h1 className="h3 mb-3 font-weight-normal">Área Restrita</h1>

                    <FormGroup>
                        <Label for="Email">Usuário</Label>
                        <Input type="email" name="email" id="Email" placeholder="Digite seu email" />
                    </FormGroup>

                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type="password" name="password" id="password" placeholder="Digite sua senha" />
                        
                    </FormGroup>
                    <Button color="primary btn-block">Acessar</Button>
                    <p className="text-center mt-2">Esqueceu a senha?</p>
                </Form>
                

            </div>

        </>
    )
}
import React, { useState, useContext} from 'react';
import { AuthContext } from '../../contexts/auth';
import { Input, Label } from "reactstrap";
import { ContainerLogin, FormGroup, SubmitButton, SubmitText, IconBack, BackText } from './styles';
import ActivityIndicator from 'react-activity-indicator';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {signUp, loadingAuth} = useContext(AuthContext);
  const navigate = useNavigate()

  function handleSignUp() {
    signUp(email, password, nome);
  }

  function handleClick() {
    navigate('/');
  }

  return (
    <ContainerLogin>

      <FormGroup>
        <Label>
          Nome
          <Input
          name="nome"
          placeholder='Digite seu nome'
          value={nome}
          type="text"
          onChange={e => setNome(e.target.value)}
          />
        </Label>
        
      </FormGroup>      

      <FormGroup>
        <Label>
          Email
          <Input
          name="email"
          placeholder='Digite seu E-mail'
          value={email}
          type="email"
          onChange={e => setEmail(e.target.value)}          
          />
        </Label>
        
      </FormGroup>

      <FormGroup>
        <Label>
          Senha
          <Input
          name="password"
          placeholder='Digite sua senha'
          value={password}
          type="password"
          onChange={e => setPassword(e.target.value)}          
          />
        </Label>
      </FormGroup> 

      <SubmitButton type="submit" onClick={()=> {handleSignUp(); handleClick();}}>
        {loadingAuth ? (
          <ActivityIndicator number={4} duration={200} activeColor="#0070bf" borderWidth={2} borderRadius="50%" diameter={25} />
        ) : (
          <SubmitText>Cadastrar</SubmitText>
        )}
      </SubmitButton> 

      <IconBack type="submit" onClick={handleClick}>
        <BackText>Voltar</BackText>
      </IconBack>

    </ContainerLogin>
  )
}
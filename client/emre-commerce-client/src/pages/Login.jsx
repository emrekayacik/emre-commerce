import styled from 'styled-components'
import {mobile} from "../responsive"


const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255,255,255,0.5),
        rgba(255,255,255,0.5)),
        url(https://images.pexels.com/photos/5804257/pexels-photo-5804257.jpeg?cs=srgb&dl=pexels-rikki-matsumoto-5804257.jpg&fm=jpg) center;
        background-repeat: no-repeat;
        background-size:cover;
        display:flex;
        align-items:center;
        justify-content:center;
`
const Wrapper = styled.div`
        width: 25%;
        padding: 20px;
        background-color: white;
        ${mobile(
            
            {width:"80%"}
            
            
            )}
`
const Title = styled.h1`
    font-size 24px;
    font-weight: 300;
`
const Form = styled.form`
    display: flex;
    flex-direction:column;
`

const Input = styled.input`
        flex: 1;
        min-width: 40%;
        margin: 10px 0px;
        padding: 10px;
`
const Button = styled.button`
    width: 100%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
`
const Link = styled.a`
    margin: 5px; 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder="username" />
                <Input placeholder="password" />
                <Button>LOGIN</Button>

            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login
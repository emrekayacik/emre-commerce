import styled from 'styled-components'
import {mobile} from "../responsive"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: white;
        background-size:cover;
        display:flex;
        align-items:center;
        justify-content:center;
        
`
const Wrapper = styled.div`
        width: 40%;
        padding: 20px;
        background-color: white;
        border-radius: 1%;
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
    flex-wrap: wrap;
`

const Input = styled.input`
        flex: 1;
        min-width: 40%;
        margin: 20px 10px 0px 0px;
        padding: 10px;
        border-top: none;
        border-left: none;
        border-right: none;
`
const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`
const Button = styled.button`
    width: 100%;
    border: none;
    padding: 15px 20px;
    background-color: black;
    color: white;
    cursor: pointer;
`



const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="name" />
                <Input placeholder="last name" />
                <Input placeholder="email" />
                <Input placeholder="username" />
                <Input placeholder="password" />
                <Input placeholder="confirm password" />
                <Agreement>
                    I accept processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
                </Agreement>
                <Button>CREATE</Button>
            </Form>
        </Wrapper>

    </Container>
  )
}

export default Register
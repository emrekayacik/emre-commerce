import React from 'react'
import styled from 'styled-components'
import {Search,ShoppingCartOutlined} from '@material-ui/icons'
import {Badge} from '@material-ui/core'
import {Link} from 'react-router-dom'
const Container = styled.div`
        height:60px;
`
const Wrapper = styled.div`
        padding: 10px 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;  
`
const Left = styled.div`
        flex: 1;
        display: flex;
        align-items: center;`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    border-radius: 10px;
    @media (max-width: 768px) {
        display: none;
    }
`
const Input = styled.input`
        border:none;
        outline: none;
`

const Center = styled.div`flex: 1;
    display:flex;
    align-items:center;
    justify-content: center;`
const Logo = styled.h1`
    font-weight: bold;
    @media (max-width: 768px) {
        display: none;
    }
`


const Right = styled.div`
    flex: 1;
    display:flex;
    align-items:center;
    justify-content: flex-end;
`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    @media (max-width: 768px) {
        display: ${(props)=>props.mobile === "true" ? `block` : `none`}
    }
`

const navLink = {
    color: "inherit",
    textDecoration: "none"
}
const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>
                    EN
                </Language>
                <SearchContainer>
                    <Input />
                    <Search style={{color:"gray", fontSize:16}} />
                </SearchContainer>
            </Left>
            <Link style={navLink} to="/" >
                <Center><Logo>Emre Commerce.</Logo></Center>
            </Link>
            <Right>
                <Link style={navLink} to="/register" >
                    <MenuItem mobile="false">REGISTER</MenuItem>
                </Link>
                <Link style={navLink} to="/login" >
                    <MenuItem mobile="false">SIGN IN</MenuItem>
                </Link>
                <MenuItem mobile="false">
                <Badge badgeContent={2} color="secondary">
                    <ShoppingCartOutlined />
                </Badge>
                </MenuItem>
                <MenuItem mobile="true">mobile</MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar
import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: white;
    color: #524e45;
    cursor:pointer;
    font-weight: 600;
    transition: all 0.5s ease;
    border-radius: 5%;
    &:hover{
        background-color: teal;
        color:white;
        transform: scale(1.1)
    }
`
const Container = styled.div`
    flex:1;
    margin: 3px;
    height: 70vh;
    position: relative;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const Info = styled.div`
    position:absolute;
    top:0;
    left:0;
    width: 100%;
    height:100%;
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`
const Title = styled.h1`
    color:white;
    margin-bottom:20px;
`

const CategoryItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img} />

        <Info>
            <Title>{item.title}</Title>
            <Button>SHOP NOW</Button>
        </Info>
    </Container>
  )
}

export default CategoryItem
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    flex:1;
    margin: 3px;
    width: 100%;
    height: 15vh;
    background-color:teal;
    color:white;
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0px;
    margin 0px;
`
const Title = styled.h1`
padding: 0px;
    margin 0px;
`
const Image = styled.img`
    width: 5%;
    height: 5%;
    object-fit: cover;
`
const ImageContainer = styled.div`
    display:flex;
    flex:1;
    margin:3px;
    flex-direction: row;
    align-items:center;
    justify-content:center;
`
const Description = styled.p`
  padding: 0px;
    margin 0px;
`
const Sales = ({color,title,text}) => {
  return (
    <Container style={{backgroundColor: color}}>
            <Title>{title}</Title>
            <Description>{text}</Description>
    </Container>
  )
}

export default Sales
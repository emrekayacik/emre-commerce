import React, {useState} from 'react'
import styled from 'styled-components'
import {ArrowRight,ArrowLeft} from '@material-ui/icons'
import {sliderItems} from '../data'
import { Link } from "react-router-dom";

const Container = styled.div`
        width: 100%;
        height: 100vh;
        display:flex;
        position:relative;
        overflow:hidden;
        @media (max-width: 768px) {
            display: none;
        }
`
const ContainerArrowLeft = styled.div`
        width: 50px;
        height: 50px;
        background-color: #f7f8fa;
        border-radius: 50%;
        display:flex;
        align-items:center;
        justify-content:center;
        position:absolute;
        top:0;
        bottom:0;
        left: 10px;
        margin: auto;
        cursor:pointer;
        opacity: 0.8;
        z-index: 2;
`
const ContainerArrowRight = styled.div`
        width: 50px;
        height: 50px;
        background-color: #f7f8fa;
        border-radius: 50%;
        display:flex;
        align-items:center;
        justify-content:center;
        position:absolute;
        top:0;
        bottom:0;
        right: 10px;
        margin: auto;
        cursor:pointer;
        opacity: 0.8;
        z-index: 2;
`
const Wrapper = styled.div`
    height: "100%";
    display:flex;
    transform: translateX(${props=>props.slideIndex * -100}vw);
    transition: all 1.5s ease;
`
const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display:flex;
    align-items:center;
`
const ImgContainer = styled.div`
    flex:1;
    height: 100%
`
const Image= styled.img`
    height: 80%
`
const InfoContainer = styled.div`
flex:1;
padding: 50px;
`
const Title = styled.h1`
font-size 70px;
`
const Description = styled.p`
margin: 50px 0px;
font-size: 20px;
font-weight: 500;
letter-spacing: 2;
`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor:pointer;
    border-radius: 5px;
    &:hover {
        transform: scale(1.05);
        background-color: black;
        color: white;
        }
        transition: all 0.2s cubic-bezier(.08,.52,.52,1)
    `
const Slider = () => {
    const [slideIndex,setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if(direction==="left"){
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 3)
        }
        else{
            setSlideIndex(slideIndex < 3 ? slideIndex+1 : 0)
        }
    }
  return (
    <Container>
        <ContainerArrowLeft onClick={()=>handleClick('left')} direction="left">
            <ArrowLeft>
        
            </ArrowLeft>
        </ContainerArrowLeft>
        <Wrapper slideIndex={slideIndex}>
        {sliderItems.map(item=>(
            <Slide key={item.id}>
                <ImgContainer>
                    <Image src={item.img} />
                </ImgContainer>
                <InfoContainer>
                    <Title>{item.title}</Title>
                    <Description>{item.description}</Description>
                    <Link to="products"><Button>SHOW NOW</Button></Link>
                </InfoContainer>
            </Slide>
        ))}
        </Wrapper>
        <ContainerArrowRight onClick={()=>handleClick('right')} direction="right">
            <ArrowRight>

            </ArrowRight>
        </ContainerArrowRight>
    </Container>
  )
}

export default Slider
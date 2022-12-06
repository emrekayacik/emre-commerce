import React from 'react'
import styled from 'styled-components'
import {Add,Remove} from '@material-ui/icons';
import {mobile} from "../responsive"
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {publicRequest} from "../RequestMethods";
import { addProduct } from '../redux/cartRedux';
import { useDispatch } from 'react-redux';

const Container = styled.div`
    display:flex;
`
const Wrapper = styled.div`
    padding:50px;
    display:flex;
    ${mobile(
            
        {flexDirection:"column",padding: "10px"}
        
        
        )}
`
const Title = styled.h1`
    font-weight: 200;
`

const ImgContainer = styled.div`
    flex:1;
`
const Image = styled.img`
    width:100%;
    height: 90vh;
    object-fit: cover;
    ${mobile(
            
        {height:"50vh"}
        
        
        )}
`
const InfoContainer = styled.div`
    flex:1;
    padding: 0px 50px;
    ${mobile(
            
        {padding:"10px"}
        
        
        )}

`
const Description = styled.p`
    margin: 20px 0px;
`
const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
    color: darkgreen;
`
const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display:flex;
    justify-content: space-between;
    ${mobile(
            
        {width:"100%"}
        
        
        )}
`
const Filter = styled.div`
    display:flex;
    align-items:center;

`
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=> props.color};
    margin: 0px 5px;
    cursor: pointer;
    &:active{
        transform: scale(0.8);
    }
    transition: all 0.1s;
`
const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`
const FilterSizeOption = styled.option`

`
const AddContainer = styled.div`
    width: 50%;
    display:flex;
    align-items:center;
    justify-content: space-between;
    ${mobile(
            
        {width:"100%"}
        
        
        )}
`
const AmountContainer = styled.div`
    display:flex;
    align-items:center;
    font-weight: 700;
`
const Amount = styled.span`
    display:flex;
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`
const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    backgrond-color: white;
    cursor: pointer;
    font-weight: 500;
    border-radius: 10px;
    &:hover{
        background-color: #f8f4f4;
    }
    &:active{
        transform: scale(0.9);
    }
    transition: all 0.1s;
`
const BtnAmount = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    cursor:pointer;
    &:active{
        transform: scale(0.8);
    }
    transition: all 0.1s;
`
const OldPrice = styled.span`
    margin: 5px; 0px;
    font-size: 18px;
    color:red;
    font-weight: 50;
    text-decoration: line-through;
`
const Product = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2];

    const [product,setProduct] = useState({});
    const [quantity,setQuantity] = useState(1);
    const [color,setColor] = useState("");
    const [size,setSize] = useState("S");
    const dispatch = useDispatch();

    useEffect(()=>{
        const getProduct = async () => {
            try{
                const res = await publicRequest.get(`/products/find/${id}`)
                setProduct(res.data);
            }catch{

            }
        }
        getProduct();
    },[id])
    

    const handleQuantity = (type) => {
        if(type==="i"){
            setQuantity(quantity+1);
        }else{
            quantity > 1 && setQuantity(quantity-1)
        }
    }

    const handleClick = () => {
        //update cart

        dispatch(addProduct({...product, quantity,color,size}));
    }   
     return (
        <Container>
            <Wrapper>
                <ImgContainer>
                    <Image src={product.img} />
                </ImgContainer>
                <InfoContainer>
                    <Title>
                        {product.title}
                    </Title>
                    <Description>
                        {product.desc}
                    </Description>
                    
                    <Price>
                        ${product.price}
                    </Price>
                    
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            {product.color?.map(x=>{
                             return <FilterColor onClick={() => setColor(x)} color={x} key={x} />
                        })}
                            
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize onChange={(e)=>setSize(e.target.value)}>
                                {product.size?.map(x=> {
                                    return <FilterSizeOption key={x}>{x}</FilterSizeOption>
                                })}
                                
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <BtnAmount><Remove onClick={()=>handleQuantity("d")} /></BtnAmount>
                            <Amount>{quantity}</Amount>
                            <BtnAmount><Add onClick={()=>handleQuantity("i")} /></BtnAmount>
                        </AmountContainer>
                        <Button onClick={handleClick}>Add To Cart</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            
        
        </Container>
    )
}

export default Product

import React from 'react'
import styled from 'styled-components'
import {Add,Remove} from '@material-ui/icons';
const Container = styled.div`
    display:flex;
`
const Wrapper = styled.div`
    padding:50px;
    display:flex;
    @media (max-width: 768px) {
        flex-direction: column;
    }
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
`
const InfoContainer = styled.div`
    flex:1;
    padding: 0px 50px;

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
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 5px;
    }
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
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 5px;
    }
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
    return (
        <Container>
            <Wrapper>
                <ImgContainer>
                    <Image src="https://www.vintageindustries.nl/download_front/syinqx1484/_overview_large_/2109_Grafton_anorak_Black_2_.png" />
                </ImgContainer>
                <InfoContainer>
                    <Title>
                        Denim Jacket
                    </Title>
                    <Description>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
                    </Description>
                    <OldPrice>
                        $60
                    </OldPrice>
                    <Price>
                        $25
                    </Price>
                    
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="black" />
                            <FilterColor color="darkblue" />
                            <FilterColor color="gray" />
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <BtnAmount><Remove /></BtnAmount>
                            <Amount>1</Amount>
                            <BtnAmount><Add /></BtnAmount>
                        </AmountContainer>
                        <Button>Add To Cart</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            
        
        </Container>
    )
}

export default Product

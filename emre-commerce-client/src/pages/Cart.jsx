import { Add, Remove } from '@material-ui/icons'
import styled from 'styled-components'
import {mobile} from "../responsive"

const Container = styled.div`

`
const Wrapper = styled.div`
padding:20px;
${mobile(
            
  {padding:"10px"}
  
  
  )}
`
const Title = styled.h1`
  font-wright:300;
  text-align:center;
`
const Top = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
padding: 20px;
`
const TopButton = styled.button`
padding:10px;
font-weight:600;
cursor:pointer;
border: ${props => props.type === "filled" && "none"};
background-color: ${props => props.type === "filled" ? "black" : "transparent"};
color: ${props => props.type === "filled" && "white"};

`

const TopTexts = styled.div`
${mobile(
            
  {display:"none"}
  
  
  )}
`
const TopText = styled.span`
text-decoration:underline;
cursor:pointer;
margin 0px 10px;
`
const Bottom = styled.div`
display:flex;
justify-content:space-between;
${mobile(
            
  {flexDirection:"column"}
  
  
  )}
`
const Info = styled.div`
flex:3;
`

const Product = styled.div`
display:flex;
justify-content: space-between;
${mobile(
            
  {flexDirection:"column"}
  
  
  )}

`
const ProductDetail = styled.div`
flex:2;
display:flex;
`
const Image = styled.img`
width:200px;

`
const Details = styled.div`
padding:20px;
display:flex;
flex-direction:column;
justify-content: space-around;
`
const ProductName = styled.span`

`
const ProductId = styled.span`

`
const ProductColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props=>props.color};
`
const ProductSize = styled.span`

`
const PriceDetail = styled.div`
flex:1;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`
const ProductAmountContainer = styled.div`
display:flex;
align-items:center;
margin-bottom:20px;
`
const Hr = styled.hr`
background-color: #eee;
border:none;
height: 1px;
`
const ProductAmount = styled.div`
font-size: 24px;
margin: 5px;
${mobile(
            
  {margin:"5px 15px"}
  
  
  )}
`
const ProductPrice = styled.div`
font-size: 30px;
font-weight: 200;
${mobile(
            
  {marginBottom:"20px"}
  
  
  )}
`
const Summary = styled.div`
flex:1;
border : 0.5px solid lightgray;
boder-radius: 10px;
padding: 20px;
height: 50vh;
`
const SummaryTitle = styled.h1`
font-weight: 200;
`
const SummaryItem = styled.div`
margin: 30px 0px;
display:flex;
justify-content:space-between;
font-weight: ${props=>props.type === "total" && "500"};
font-size: ${props=>props.type === "total" && "24px"};
`
const SummaryItemText = styled.span`

`
const SummaryItemPrice = styled.span`
 color: ${props=> props.type === "discount" && "red"};
`
const SummaryButton = styled.button`
width:100%;
padding 10px;
background-color: black;
color: white;
font-weight: 600;
`

const Cart = () => {
  return (
    <Container>
        <Wrapper>
          <Title>YOUR BAG</Title>
          <Bottom></Bottom>
          <Top>
            <TopButton>CONTINUE SHOPPING</TopButton>
            <TopTexts>
              <TopText> Shopping Bag(2)</TopText>
              <TopText>Your Wishlist</TopText>

             
              
              </TopTexts>

            <TopButton type="filled">CHECKOUT NOW</TopButton>
          </Top>
          <Bottom>
            <Info>
              <Product>
                <ProductDetail>
                  <Image src="https://www.vintageindustries.nl/download_front/yxfbur1758/_overview_large_/2217_Arrow_Jacket_Dark_tan.png" />
                  <Details>
                    <ProductName><b>Product: </b>MICHAEL JACKSON JACKET</ProductName>
                    <ProductId><b>Id: </b>357412544</ProductId>

                    <ProductColor color="#9c784b" />

                    <ProductSize><b>Size: </b>44</ProductSize>

                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>2</ProductAmount>
                    <Remove />
                  </ProductAmountContainer>
                  <ProductPrice>$30</ProductPrice>
                </PriceDetail>
              </Product>

              <Hr />

              <Product>
                <ProductDetail>
                  <Image src="https://www.vintageindustries.nl/download_front/qzgvet1531/_overview_large_/30101_Ashore_softshell_jacket_Black_2_.png" />
                  <Details>
                    <ProductName><b>Product: </b>BLACK SIN JACKET</ProductName>
                    <ProductId><b>Id: </b>31584885</ProductId>

                    <ProductColor color="black" />

                    <ProductSize><b>Size: </b>42</ProductSize>

                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>2</ProductAmount>
                    <Remove />
                  </ProductAmountContainer>
                  <ProductPrice>$30</ProductPrice>
                </PriceDetail>
              </Product>
            </Info>
            <Summary>
              
              <SummaryTitle>ORDER SUMMARY</SummaryTitle>
              <SummaryItem>
                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemPrice>$ 80</SummaryItemPrice>

              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Estimated Shipping</SummaryItemText>
                <SummaryItemPrice>$ 5.90</SummaryItemPrice>

              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Shipping Discount</SummaryItemText>
                <SummaryItemPrice type="discount">$ -5.90</SummaryItemPrice>

              </SummaryItem>
              <SummaryItem type="total">
                <SummaryItemText>Total</SummaryItemText>
                <SummaryItemPrice>$ 80</SummaryItemPrice>

              </SummaryItem>
              <SummaryButton>CHECKOUT NOW</SummaryButton>
              
            </Summary>
          </Bottom>
        </Wrapper>
    </Container>
  )
}

export default Cart
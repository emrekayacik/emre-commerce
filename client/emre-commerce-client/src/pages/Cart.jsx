import { Add, Remove } from '@material-ui/icons'
import styled from 'styled-components'
import {mobile} from "../responsive"
import {useSelector} from "react-redux"
import StripeCheckout from "react-stripe-checkout";
import {useState,useEffect} from "react"
import {userRequest} from "../RequestMethods"
import { useNavigate } from 'react-router-dom';


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
cursor: pointer;
`

const Cart = () => {
const cart = useSelector(state => state.cart)

const KEY = process.env.REACT_APP_STRIPE;

const [stripeToken,setStripeToken] = useState(null);
const history = useNavigate();
  const onToken = (token) => {
    setStripeToken(token);
  }
  
  useEffect(()=>{
    const makeRequest = async()=>{
      try{
        const res = await userRequest.post("/checkout/payment",{
          tokenId: stripeToken.id,
          amount: cart.total*100
        });
        history("/success")
      }catch{

      }
    }
    stripeToken && cart.total>=1 && makeRequest();
  },[stripeToken,cart.total,history])
  
  
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
              {cart.products.map(product=> 
                (
                  <Product>
                <ProductDetail>
                  <Image src={product.img} />
                  <Details>
                    <ProductName><b>Product: </b>{product.title}</ProductName>
                    <ProductId><b>Id: </b>{product._id}</ProductId>

                    <ProductColor color={product.color} />

                    <ProductSize><b>Size: </b>{product.size}</ProductSize>

                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>{product.quantity}</ProductAmount>
                    <Remove />
                  </ProductAmountContainer>
                  <ProductPrice>${product.price* product.quantity}</ProductPrice>
                </PriceDetail>
              </Product>
                )
                
                )}
            </Info>
            <Summary>
              
              <SummaryTitle>ORDER SUMMARY</SummaryTitle>
              <SummaryItem>
                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>

              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Estimated Shipping</SummaryItemText>
                <SummaryItemPrice>$ -0</SummaryItemPrice>

              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Shipping Discount</SummaryItemText>
                <SummaryItemPrice type="discount">$ -0</SummaryItemPrice>

              </SummaryItem>
              <SummaryItem type="total">
                <SummaryItemText>Total</SummaryItemText>
                <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>

              </SummaryItem>
              <StripeCheckout 
              name='Emre Shop'
              image='https://avatars.githubusercontent.com/u/73127270?s=400&u=129255f70080e16185ee9f42f8251e5e4423aaf4&v=4'
              billingAddress
              shippingAddress
              description={`Your total is $${cart.total}`}
              amount={cart.total*100}
              token={onToken}
              stripeKey={KEY}>
                <SummaryButton>CHECKOUT NOW</SummaryButton>
              </StripeCheckout>
              
            </Summary>
          </Bottom>
        </Wrapper>
    </Container>
  )
}

export default Cart
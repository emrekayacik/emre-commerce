import {Room, Phone,MailOutline,Facebook, Pinterest, Twitter,Instagram } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
    display:flex;
`
const Right = styled.div`
    flex:1;
    padding:20px;
`
const ContactItem = styled.div`
margin-bottom: 20px;
display:flex;
align-items:center;

`
const Payment = styled.img`
    width: 250px;
`
const Left = styled.div`
    flex:1;
    display:flex;
    flex-direction: column;
    padding: 20px;
`
const Center = styled.div`
    flex:1;
    padding:20px;
`
const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    margin: 0px;
    padding: 0px;
    list-style:none;
    display:flex;
    flex-wrap:wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 20px;
`
const Logo = styled.h1`
    flex:1;
`
const Description = styled.p`
    margin: 20px 0px;
`
const SocialContainer = styled.div`
    display:flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color:  ${props => props.color || "palevioletred"};
    display:flex;
    align-items:center;
    justify-content:center;
    margin-right: 20px;
    `
const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>Emre Commerce.</Logo>
                <Description>
                     Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
                </Description>
                <SocialContainer>
                    <SocialIcon color="#3B5999">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color="#E4405F">
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon color="#55ACEE">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="#E60023">
                        <Pinterest />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Emre Commerce.</ListItem>
                    <ListItem>Emre Commerce.</ListItem>
                    <ListItem>Emre Commerce.</ListItem>
                    <ListItem>Emre Commerce.</ListItem>
                    <ListItem>Emre Commerce.</ListItem>
                    <ListItem>Emre Commerce.</ListItem>
                    <ListItem>Emre Commerce.</ListItem>
                    <ListItem>Emre Commerce.</ListItem>

                </List>

            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room style={{marginRight: "10px;"}} />güllük mah uysal sokak no 10 daire 4 eskişehir/tepebaşı
                </ContactItem>
                <ContactItem>
                   <Phone style={{marginRight: "10px;"}} /> +90 553 309 55 69
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{marginRight: "10px;"}} />emrekayacik2634@gmail.com
                </ContactItem>
                <Payment src="https://www.vhv.rs/dpng/d/462-4625301_credit-card-icons-png-download-transparent-background-credit.png" />
            </Right>
        </Container>
    )
}

export default Footer

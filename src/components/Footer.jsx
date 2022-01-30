import {
  Facebook,
  Instagram,
  MailOutline,
  PhoneAndroid,
  Room,
  Twitter,
} from "@mui/icons-material";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Description = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Greg</Logo>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
          repudiandae, voluptates error ratione fugit nulla nihil non impedit
          provident autem sint cupiditate aspernatur accusantium dolore eum quod
          alias laborum doloremque.
        </Description>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Liens Utiles</Title>
        <List>
          <ListItem>Acceuil</ListItem>
          <ListItem>Panier</ListItem>
          <ListItem>Homme Fashion</ListItem>
          <ListItem>Femme Fashion</ListItem>
          <ListItem>Accessoires</ListItem>
          <ListItem>Mon Compte</ListItem>
          <ListItem>Suivi De Commande</ListItem>
          <ListItem>SAV</ListItem>
          <ListItem>F.A.Q</ListItem>
          <ListItem>Contact</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} />
          34 rue de la personne qui développe, Paris 75000
        </ContactItem>
        <ContactItem>
          <PhoneAndroid style={{ marginRight: "10px" }} /> 08 36 65 65 65
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} />
          contact@greg.dev
        </ContactItem>
        <Payment src="" />
      </Right>
    </Container>
  );
};

export default Footer;

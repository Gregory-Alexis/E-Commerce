import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Annoucement = () => {
  return (
    <Container>
      Bonnes Affaires! Livraison gratuite sur les commandes de plus de 50 euros
    </Container>
  );
};

export default Annoucement;

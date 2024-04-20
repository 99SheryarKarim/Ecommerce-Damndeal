import React from "react";
import styled from "styled-components";
import { Flex } from "antd";
import electionic from "../../assets/svgs/Electronics.png";
import clothing from "../../assets/svgs/clothing.png";
import health from "../../assets/svgs/health and beauty.png";
import kitchen from "../../assets/svgs/grecery.png";
import home from "../../assets/svgs/babies.png";
import market from "../../assets/svgs/babies.png";
import toy from "../../assets/svgs/toys.png";
import babies from "../../assets/svgs/babies.png";

function FirstProducts() {
  return (
    <Container>
      {[
        {
          src: electionic,
          title: "Electionics",
          id: 1,
        },
        {
          src: clothing,
          title: "Clothing",
          id: 2,
        },
        {
          src: health,
          title: "Health & Beauty",
          id: 3,
        },
        {
          src: kitchen,
          title: "Home & Kitchen",
          id: 4,
        },
        {
          src: home,
          title: "Home & Furniture",
          id: 5,
        },
        {
          src: market,
          title: "Grocery & Market",
          id: 6,
        },
        {
          src: toy,
          title: "Toys and Games",
          id: 7,
        },
        {
          src: babies,
          title: "Babies & Moms",
          id: 8,
        },
      ].map((item) => (
        <CenteredContainer key={item.id}>
          <img src={item.src} alt={item.title} />
          <p>{item.title}</p>
        </CenteredContainer>
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const CenteredContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 13px;
  width: 146px;

  justify-content: space-between;

  img {
    height: 60px;
    width: 60px;
  }

  p {
    text-align: center;
  }
`;

export default FirstProducts;

import React, { useState } from "react";
import styled from "styled-components";
import { Flex, Button } from "antd"; // Import Button from antd
import { products } from "../../components/Data/Data";
import { content_width } from "../../consts";

function BestProducts(props) {
  const [startIndex, setStartIndex] = useState(0); // State to keep track of the starting index of displayed products

  const handlePrev = () => {
    setStartIndex((prevIndex) => Math.max(0, prevIndex - 4)); // Decrease the start index by 4, ensuring it doesn't go below 0
  };

  const handleNext = () => {
    setStartIndex((prevIndex) => Math.min(props.products.length - 5, prevIndex + 4)); // Increase the start index by 4, ensuring it doesn't exceed the number of products minus 5
  };

  return (
    <MainContainer>
      <Button onClick={handlePrev} disabled={startIndex === 0}>
        Previous
      </Button>
      {/* Disable Previous button when start index is 0 */}
      <Container>
        {props.products.slice(startIndex, startIndex + 5).map((item) => (
          <CenteredContainer key={item.id}>
            <img src={item.src} alt={item.title} /> 
            <p>{item.brand}</p>
            <h3>{item.title}</h3>
            <p>{item.rating}</p>
            <p>{item.price}</p>
          </CenteredContainer>
        ))}
      </Container>
      <Button onClick={handleNext} disabled={startIndex + 5 >= props.products.length}>
        Next
      </Button>{" "}
     
    </MainContainer>
  );
}

const MainContainer = styled.div`
  max-width: ${content_width};
  margin: 0 auto;
  display: flex;
  align-items: center;
  margin-top:30px;
`;

const Container = styled(Flex)`
  justify-content: space-around; /* Align items evenly along the main axis */
  flex-wrap: wrap; /* Allow items to wrap onto multiple lines */
`;

const CenteredContainer = styled.div`
  text-align: left;
  margin-bottom: 20px; /* Add margin between cards */
  width: 251px;
  opacity: 0.8; /* Set opacity */
`;

export default BestProducts;

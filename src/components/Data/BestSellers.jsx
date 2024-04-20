import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Flex, Button } from "antd"; // Import Button from antd
import { blogs } from "../../components/Data/Data";
import { content_width } from "../../consts";
function Blog() {
  const [startIndex, setStartIndex] = useState(0);
  const [sliderData, setSliderData] = useState([]);
  useEffect(() => {
    setSliderData(blogs.slice(startIndex, startIndex + 5));
  }, [startIndex, blogs]); // Add props.products to dependency array
  const filterProducts = () => {
    const filteredData = blogs.filter((product) => product.category == "baby");
    setSliderData(filteredData.slice(0, 5));
    setStartIndex(0); // Reset startIndex when filtering
  };
  return (
    <MainContainer>
      <ParentBox>
        <h3>Best Sellers</h3>
        <ul>
          <li>
            <Button onClick={() => filterProducts("baby")}>Baby</Button>
          </li>
        </ul>
      </ParentBox>
      <SubContainer>
        <Container>
          {sliderData.map((item) => (
            <CenteredContainer key={item.id}>
              <img src={item.src} alt={item.title} />
              <p>{item.tips}</p>
              <h3>{item.title}</h3>
              <p>{item.date}</p>
            </CenteredContainer>
          ))}
        </Container>
      </SubContainer>
    </MainContainer>
  );
}
const MainContainer = styled.div`
  max-width: ${content_width};
  margin: 0 auto;
`;
const ParentBox = styled.div`
  display: flex;
  justify-content: space-between;
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    li {
      list-style: none;
      cursor: pointer;
      Button {
        border: none;
      }
    }
  }
`;
const SubContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  Button {
    border-radius: 66px;
    width: 31px;
    padding: 1px;
  }
`;
const Container = styled(Flex)`
  flex-wrap: wrap;
  gap: 55px;
`;
const CenteredContainer = styled.div`
  text-align: left;
  margin-bottom: 20px;
  width: 430px;
  opacity: 0.8;
  img {
    width: 409px;
  }
`;
export default Blog;










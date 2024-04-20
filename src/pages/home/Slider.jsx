import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import modernchair from "../../assets/svgs/Dining chair.png";
import caroselimage2 from "../../assets/carosel image.jpg";

const Slider = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const images = [
    modernchair,
    caroselimage2,
    modernchair,
    // Add more image URLs as needed
  ];  

  const goToNextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % images.length);
  };

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) =>
      prevPage === 0 ? images.length - 1 : prevPage - 1
    );
  };

  const Container = styled.div`
    width: 1350px !important; /* Override Ant Design's width */
    height: 600px;
    overflow: hidden;
  `;

  return (
    <CenteredContainer>
      <Container>
        <ImageContainer>
          <Image   style={{borderRadius:"10px"}} src={images[currentPage]} alt={`Slide ${currentPage}`} />
          <ContentWrapper >
            <LimitedEditionButton>Limited Edition</LimitedEditionButton>
            <HeaderText>Modern </HeaderText>
            <HeaderText style={diningtxt}>Eyaad Chair</HeaderText>
            <Paragraph>Discover our new items. Up to 25% Off !</Paragraph>
        
            <ShopNowButton>Shop now</ShopNowButton>
          </ContentWrapper>
          <PrevButton onClick={goToPreviousPage}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </PrevButton>
          <NextButton onClick={goToNextPage}>
            <FontAwesomeIcon icon={faChevronRight} />
          </NextButton>
        </ImageContainer>
      </Container>
    </CenteredContainer>
  );
};

const diningtxt = {
  position: 'relative',
  left:'58px'

}
const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin:50px 0px;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 2s ease; /* Updated transition duration to 2 seconds */
`;

const ContentWrapper = styled.div`
  position: absolute;
  
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const LimitedEditionButton = styled.button`
  background: #CECBE2;
  color: black;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  margin-left: 19px;
`;

const HeaderText = styled.h2`
  color: white;
  font-size: 40px;
  position:relative;
  left:15px;
  line-height:14px;

`;

const Paragraph = styled.p`
  color: white;
  position: relative;
  left: 85px;
`;

const ShopNowButton = styled.button`
  background: #F5C34B;
  color: black;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  margin-right: 14px;
`;

const PrevButton = styled.button`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  background-color: white;
  color: grey;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 50%;
`;

const NextButton = styled.button`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  background-color: white;
  color: grey;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 50%;
`;

export default Slider;

import React from "react";
import { Flex } from "antd";
import styled from "styled-components";
import facebook from "../assets/svgs/facebook.svg";
import twitter from "../assets/svgs/twitter.svg";
import instagram from "../assets/svgs/instagram.svg";
import linkedin from "../assets/svgs/linkedin.svg";
import contactIcon from "../assets/svgs/phone-call 1.svg";
import VectorIcon from "../assets/svgs/mail.png";
import MacIcon from "../assets/svgs/apple 1.png";
import android from "../assets/svgs/visa.png";
import VisaCard from "../assets/svgs/visa.png";
import VisaCard2 from "../assets/svgs/visacard2.png";
import VisaCard3 from "../assets/svgs/visacard2.png";
import VisaCard4 from "../assets/svgs/visacard1.svg";
import VisaCard5 from "../assets/svgs/visacard2.png";
import VisaCard6 from "../assets/svgs/visacard1.svg";
import { content_width } from "../consts";
import { BsDisplay } from "react-icons/bs";

const MainContainer = styled.div`
  margin: 0 auto;
  background: #f3f5f6;
  border-bottom: 1px solid black;
  padding: 20px;
`;

const ContainerBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  background: #f3f5f6;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background: #f3f5f6;
`;

const FlexBox = styled.div`
  background: #f3f5f6;
  display: flex;
  width: 40%;
`;

const MainParent = styled.div`
  display: flex;
  gap: 20px;
  @media screen and (max-width: 1105px) {
    display: none;
  }
`;

const StyledMainParent = styled(MainParent)`
  @media screen and (max-width: 1000px) {
    background: green;
  }
`;

const SubContainer = styled.div`
  background: #f3f5f6;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const Content = styled.div`
  width: 240px;
  text-align: left;
  margin-bottom: 20px;
`;

const TextContent = styled.div`
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  margin: 10px 0;
`;

const ChildParent = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
`;

const LinkBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const LinkParent = styled.div`
  display: flex;
  gap: 20px;
`;

const LinkImage = styled.img`
  width: 14px;
`;

const CardBox = styled.div`
  display: flex;
`;

const CardImage = styled.img`
  width: 40px;
`;

const Parent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ParentImage = styled.img`
  width: 24px;
  height: 25px;
`;

const ParentBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 686px;

  @media (max-width: 730px) {
    width: 20rem;
  }
`;

const SearchInput = styled.input`
  padding: 12px;
  font-size: 16px;
  outline: none;
  width: 540px;
  border: none;
  border-radius: 9px;

  @media (max-width: 730px) {
    width: 20rem;
  }
`;

const ShopNowButton = styled.button`
  background: #f5c34b;
  color: black;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  margin-right: 14px;
`;

const FilterSelect = styled.select`
  font-size: 14px;
  outline: none;
  padding: 0px 45px;
  height: 41px;
  border-radius: 7px;
`;

const Footer = () => {
  return (
    <>
      <MainContainer>
        <ContainerBox>
          <h1>Subscribe and get 20% discount.</h1>
          <ParentBox>
            <SearchInput type="text" placeholder="Search" />
            <ShopNowButton>Shop now</ShopNowButton>
          </ParentBox>
        </ContainerBox>
        <Container>
          <Content>
            <h3>Contact Us</h3>
            <ChildParent>
              <span>
                <img src={contactIcon} alt="" />
              </span>
              <div>
                <h6>Monday-Friday: 08am-9pm</h6>
                <p>+(1) 123 456 7890</p>
              </div>
            </ChildParent>
            <ChildParent>
              <span>
                <img src={VectorIcon} alt="" />
              </span>
              <div>
                <h6>Need help with your order?</h6>
                <p>support@damndeal.com</p>
              </div>
            </ChildParent>
          </Content>
          <Content>
            <h3>About Zenmart</h3>
            <LinkBox>
              <TextContent>
                <a>Track Your Order</a>
              </TextContent>
              <TextContent>
                <a>Product Guides</a>
              </TextContent>
              <TextContent>
                <a>Wishlists</a>
              </TextContent>
            </LinkBox>
          </Content>
          <Content>
            <h3>Customer Support</h3>
            <LinkBox>
              <TextContent>
                <a>Contact Us</a>
              </TextContent>
              <TextContent>
                <a>Help Centre</a>
              </TextContent>
            </LinkBox>
          </Content>
          <Content>
            <h3>Services</h3>
            <LinkBox>
              <TextContent>
                <a>Trade-In Program</a>
              </TextContent>
              <TextContent>
                <a>Electronics Recycling</a>
              </TextContent>
              <TextContent>
                <a>Best Buy Health</a>
              </TextContent>
            </LinkBox>
          </Content>
          <Content>
            <div>
              <h3>Follow us</h3>
              <LinkParent>
                {[facebook, twitter, instagram, linkedin].map((src, id) => (
                  <LinkImage src={src} key={id} alt="Social Media" />
                ))}
              </LinkParent>
            </div>
            <div>
              <h3>Mobile Apps</h3>
              <Parent>
                <ParentImage src={MacIcon} alt="" />
                <p>iOS App</p>
              </Parent>
              <Parent>
                <ParentImage src={android} alt="" />
                <p>Android App</p>
              </Parent>
            </div>
            <div>
              <h3>We accept</h3>
              <CardBox>
                {[VisaCard, VisaCard2, VisaCard3, VisaCard4, VisaCard5, VisaCard6].map((src, id) => (
                  <CardImage src={src} key={id} alt="" />
                ))}
              </CardBox>
            </div>
          </Content>
        </Container>
      </MainContainer>
      <SubContainer>
        <FlexBox>
          <p>© 2022 Zeomart. All Rights Reserved</p>
          <p>Privacy · Terms · Sitemap</p>
        </FlexBox>
        <StyledMainParent>
          <FilterSelect>
            <option value="all">currency USD</option>
            <option value="category1">Category 1</option>
            <option value="category2">Category 2</option>
            <option value="category3">Category 3</option>
          </FilterSelect>
          <FilterSelect>
            <option value="all">Language English</option>
            <option value="category1">Category 1</option>
            <option value="category2">Category 2</option>
            <option value="category3">Category 3</option>
          </FilterSelect>
        </StyledMainParent>
      </SubContainer>
    </>
  );
};

export default Footer;

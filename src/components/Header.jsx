import React from "react";
import styled from "styled-components";
import { MenuOutlined } from "@ant-design/icons";
import { Menu, Dropdown, Flex } from "antd";
import facebook from "../assets/svgs/facebook.svg";
import twitter from "../assets/svgs/twitter.svg";
import instagram from "../assets/svgs/instagram.svg";
import linkedin from "../assets/svgs/linkedin.svg";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { IoIosHeartEmpty } from "react-icons/io";
import Logo from "../assets/svgs/logoHorizontal 1.svg";
import { SearchOutlined } from "@ant-design/icons";
import { content_width } from "../consts";

const Header = () => {
  const menu = (
    <Menu>
      <Flex className="NavLink">
        <p>Free Express Shipping on orders $200!</p>
        <ul className="nav-links">
          {[
            {
              title: "English / USD",
              id: 1,
            },
            {
              title: "Help Center",
              id: 2,
            },
            {
              title: "Find a Store",
              id: 3,
            },
            {
              title: "Follow Us",
              id: 4,
            },
          ].map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
          {[
            {
              src: facebook,
              id: 1,
            },
            {
              src: twitter,
              id: 2,
            },
            {
              src: instagram,
              id: 3,
            },
            {
              src: linkedin,
              id: 4,
            },
          ].map((item) => (
            <img src={item.src} key={item.id} alt="Social Media" />
          ))}
        </ul>
      </Flex>
      <Flex>
        <ParentHeader className="mainParent">
          {/* <img src={Logo} alt="Logo" /> */}
          <Container>
            <SearchInputWrapper>
              <SearchInput type="text" placeholder="Search" />
              <FilterSelect>
                <option value="all">All</option>
                <option value="category1">Category 1</option>
                <option value="category2">Category 2</option>
                <option value="category3">Category 3</option>
              </FilterSelect>
              <SearchButton>
                <SearchOutlined />
              </SearchButton>
            </SearchInputWrapper>
          </Container>
          <HeaderSection>
            <AnchorStyle href="">
              <IoIosHeartEmpty /> Wishlist
            </AnchorStyle>
            <AnchorStyle href="">
              <FaRegUser /> My Account
            </AnchorStyle>{" "}
            <AnchorStyle href="">
              <IoCartOutline /> Cart
            </AnchorStyle>
          </HeaderSection>
        </ParentHeader>
      </Flex>
    </Menu>
  );
  return (
    <>
      <MainContainer>
        <StyledNavbar>
          <Flex className="NavLink">
            <p>Free Express Shipping on orders $200!</p>
            <ul className="nav-links">
              {[
                {
                  title: "English / USD",
                  id: 1,
                },
                {
                  title: "Help Center",
                  id: 2,
                },
                {
                  title: "Find a Store",
                  id: 3,
                },
                {
                  title: "Follow Us",
                  id: 4,
                },
              ].map((item) => (
                <li key={item.id}>{item.title}</li>
              ))}
              {[
                {
                  src: facebook,
                  id: 1,
                },
                {
                  src: twitter,
                  id: 2,
                },
                {
                  src: instagram,
                  id: 3,
                },
                {
                  src: linkedin,
                  id: 4,
                },
              ].map((item) => (
                <img src={item.src} key={item.id} alt="Social Media" />
              ))}
            </ul>
          </Flex>
          <Flex>
            <ParentHeader className="mainParent">
              <img src={Logo} alt="Logo" />
              <Container>
                <SearchInputWrapper>
                  <SearchInput type="text" placeholder="Search" />
                  <FilterSelect>
                    <option value="all">All</option>
                    <option value="category1">Category 1</option>
                    <option value="category2">Category 2</option>
                    <option value="category3">Category 3</option>
                  </FilterSelect>
                  <SearchButton>
                    <SearchOutlined />
                  </SearchButton>
                </SearchInputWrapper>
              </Container>
              <HeaderSection>
                <AnchorStyle href="">
                  <IoIosHeartEmpty /> Wishlist
                </AnchorStyle>
                <AnchorStyle href="">
                  <FaRegUser /> My Account
                </AnchorStyle>{" "}
                <AnchorStyle href="">
                  <IoCartOutline /> Cart
                </AnchorStyle>
              </HeaderSection>
            </ParentHeader>
          </Flex>
          <Dropdown overlay={menu} trigger={["click"]}>
            <MenuIcon className="MenuList" />
          </Dropdown>
        </StyledNavbar>
      </MainContainer>
      <ColoredBorder className="coloredBorder">
        <ColoredHr width="160px" color="#F5C34B" />
        <ColoredHr width="160px" color="#6BD68D" />
        <ColoredHr width="160px" color="#EC752F" />
        <ColoredHr width="160px" color="#F5C34B" />
        <ColoredHr width="160px" color="#6BD68D" />
      </ColoredBorder>
    </>
  );
};

const MainContainer = styled.div`
  max-width: ${content_width};
  margin: 0 auto;
`;
const StyledNavbar = styled.div`
  padding: 10px;
  .nav-links {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1rem;
    li {
      list-style-type: none;
    }
  }
  .NavLink {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: space-between;
  }
  .anticon svg {
    float: right;
  }
  .bzZdC {
    background-color: red;
    padding: 26px 11px;
  }
  @media (max-width: 772px) {
    justify-content: flex-end;
    .NavLink {
      display: none;
    }
    .mainParent {
      display: none;
    }
  }
`;
const MenuIcon = styled(MenuOutlined)`
  color: black;
  font-size: 20px;
  cursor: pointer;
  display: none;
  @media (max-width: 772px) {
    display: block;
    padding: 15px 10px;
  }
`;
const ParentHeader = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  .Iconparent {
    display: flex;
  }
`;
const Container = styled.div`
  flex: 1;
  padding: 20px;
`;
const SearchInputWrapper = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;
const SearchInput = styled.input`
  flex: 1;
  padding: 19px;
  margin-right: -171px; /* Adjust as needed */
  font-size: 16px;
  border: 1px solid #ccc;
  outline: none;
  border-radius: 40px;
`;
const SearchButton = styled.button`
  background-color: #fff;
  font-size: 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
const FilterSelect = styled.select`
  padding: 8px;
  border: none;
  border-left: 1px solid #ccc;
  font-size: 14px;
  outline: none;
`;
const HeaderSection = styled.div`
  display: flex;
  align-items: center;
`;
const AnchorStyle = styled.a`
  color: black;
  text-decoration: none;
  margin-right: 22px;
`;
const ColoredBorder = styled.div`
  display: flex;
  /* Ensure it covers the full width */
`;
const ColoredHr = styled.hr`
  border: 1px solid ${(props) => props.color};
  margin: 0;
  flex-grow: 1; /* Make it grow to occupy remaining space */
`;

export default Header;

import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { mobile } from "../responsive";
import { tablet } from "../responsive";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })};
  ${tablet({ height: "100px" })};
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({padding: "10px 0px"})};
  ${tablet({padding: "20px 30px"})};
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({display: "none"})};
  ${tablet({fontSize: "30px"})};
`;

const SearchContainer = styled.div`
  border: 0.5px Solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${mobile({marginLeft: "15px"})};
  ${tablet({marginLeft: "25px"})};
`;

const Input = styled.input`
  border: none;
  ${mobile({width: "50px"})};
  ${tablet({width: "150px"})};
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({fontSize: "20px"})};
  ${tablet({marginLeft: "30px"})};
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })};
`;

const MenuItem = styled.p`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })};
  ${tablet({ fontSize: "23px", marginLeft: "17px" })};
  
`;

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: 'blue'
};

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>
            <Link to="/" style={linkStyle}>ThiefPrice</Link>
          </Logo>
        </Center>

        <Right>
          <Link to="/register" style={linkStyle}>
            <MenuItem>REGISTER</MenuItem>
          </Link>
          <Link to="/login" style={linkStyle}>
            <MenuItem>SIGN IN</MenuItem>
          </Link>
          <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
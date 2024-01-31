import { Link } from "react-router-dom";

import Logo from "@/assets/logo-1.svg";

import { Container, Menu, MenuItem } from "./styles";

export const Header: React.FC = () => {
  return (
    <Container>
      <Link to="/">
        <img src={Logo} alt="logo" />
      </Link>
      <Menu>
        <MenuItem>
          <Link to="/" data-testid="home-link">
            Locations
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/bookings" data-testid="bookings-link">
            My Bookings
          </Link>
        </MenuItem>
      </Menu>
    </Container>
  );
};

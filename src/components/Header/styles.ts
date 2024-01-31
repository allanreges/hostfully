import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  align-items: center;

  img {
    width: 200px;
  }

  @media (width <= 720px) {
    width: 100%;
    position: fixed;
    padding: 0 16px;
    height: 70px;
    top: 0;
    background: white;
    box-shadow: 0px 12px 5px -6px rgba(0, 0, 0, 0.05);
    margin-top: 0;
    z-index: 10;

    img {
      width: 140px;
    }
  }
`;

export const Menu = styled.ul`
  display: flex;
  list-style: none;

  @media (width <= 720px) {
    flex-direction: column;
  }
`;

export const MenuItem = styled.li`
  margin-left: 16px;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  color: #4a4a4a;

  a {
    text-decoration: none;
    color: black;
  }

  @media (width <= 720px) {
    font-size: 16px;
  }
`;

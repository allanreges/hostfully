import { Card } from "@mui/material";
import styled from "styled-components";

export const StyledCard = styled(Card)`
  margin-top: 16px;
`;

export const Container = styled.div`
  display: flex;
  background-color: #fcfcfc;

  @media (width <= 720px) {
    flex-direction: column;
  }
`;

export const ImageContainer = styled.div`
  img {
    width: 500px;
    height: 100%;
    object-fit: cover;

    @media (width <= 720px) {
      width: 100%;
    }
  }
`;

export const ContentContainer = styled.div`
  padding: 16px;
  width: 100%;
`;

export const TitleContainer = styled.div`
  color: #2d2aa5;
`;

export const DescriptionContainer = styled.div`
  margin-top: 16px;

  h3 {
    font-weight: 500;
  }

  p {
    margin-top: 8px;
    font-weight: 600;
    font-size: 18px;
  }

  span {
    font-size: 14px;
    font-weight: 500;
    background-color: #33ae8a;
    color: white;
    padding: 5px 8px;
    border-radius: 13px;
    display: block;
    width: fit-content;
    margin-top: 8px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    margin-left: 16px;
  }

  @media (width <= 720px) {
    margin-top: 16px;
  }
`;

export const DatesContainer = styled.div`
  font-size: 18px;
  margin-top: 16px;
`;

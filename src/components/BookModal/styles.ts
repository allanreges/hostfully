import { Modal } from "@mui/material";
import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  padding: 32px;
  width: 600px;
  max-width: 90vw;
  background-color: #fcfcfc;
`;

export const CreateBookingContainer = styled.div`
  display: flex;
  margin-bottom: 16px;

  h3 {
    font-size: 22px;
    text-align: center;
    color: #2b2b2b;

    span {
      font-style: italic;
      color: black;
    }
  }
`;

export const DatesContainer = styled.div``;

export const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 32px;
  font-size: 18px;
  font-weight: 600;

  span {
    font-size: 14px;
    font-weight: 500;
    background-color: #33ae8a;
    color: white;
    padding: 5px 8px;
    border-radius: 13px;
    display: block;
    width: fit-content;
  }
`;

export const ActionsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 32px;

  button {
    margin-left: 16px;
  }
`;

export const BackgroundImage = styled.img`
  object-fit: cover;
`;

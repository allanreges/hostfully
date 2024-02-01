import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 32px;

  @media (width <= 720px) {
    max-width: 90%;
    margin: 80px auto 0 auto;
  }
`;

export const EmptyStateContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #3d3d3d;

  h2 {
    font-weight: 600;
    margin-top: 16px;
    tex-align: center;
  }
`;

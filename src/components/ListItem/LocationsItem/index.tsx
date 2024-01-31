import { Button } from "@mui/material";

import { store } from "@/store/store";
import { Location } from "@/types/types";

import {
  ButtonsContainer,
  Container,
  ContentContainer,
  DescriptionContainer,
  ImageContainer,
  StyledCard,
  TitleContainer,
} from "../styles";

type LocationsItem = {
  location: Location;
};

export const LocationsItem: React.FC<LocationsItem> = ({ location }) => {
  const { handleModal, setActiveLocation } = store(state => state);

  const handleBookModal = () => {
    handleModal({
      open: true,
      mode: "create",
    });
    setActiveLocation(location);
  };
  return (
    <StyledCard>
      <Container data-testid={`location item${location.id}`}>
        <ImageContainer>
          <img src={location.image} alt="location" />
        </ImageContainer>
        <ContentContainer>
          <TitleContainer>
            <h2>{location.name}</h2>
            <p>{location.location}</p>
          </TitleContainer>
          <DescriptionContainer>
            <h3>{location.details}</h3>
            <span>Daily Price: ${location.price}</span>
            <p>Type: {location.type}</p>
          </DescriptionContainer>
          <ButtonsContainer>
            <Button
              variant="contained"
              data-testid={`book-button${location.id}`}
              onClick={handleBookModal}
            >
              Book
            </Button>
          </ButtonsContainer>
        </ContentContainer>
      </Container>
    </StyledCard>
  );
};

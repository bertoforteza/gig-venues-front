import styled from "styled-components";

const VenueDetailedPageStyled = styled.article`
  padding-bottom: 4rem;
  display: flex;
  flex-direction: column;
  margin: -32px;

  .venue-detailed__picture {
    height: 15.625rem;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }

  .venue-detailed__info {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 1rem 2rem;
    background-color: ${(props) => props.theme.colors.ink.lightest};

    & .venue-detailed__title {
      color: ${(props) => props.theme.colors.ink.dark};
      padding-right: 2.5rem;
      font-weight: ${(props) => props.theme.fontWeights.medium};
      font-size: 1.5rem;
    }

    & .venue-detailed__group {
      position: relative;
      padding-left: 32px;
    }

    & .venue-detailed__icon-location {
      position: absolute;
      left: 9px;
    }

    & .venue-detailed__icon-capacity {
      position: absolute;
      left: 6px;

      svg {
        transform: translate(0px, 2px);
      }
    }

    & .venue-detailed__icon-indoor {
      position: absolute;
      left: 0;

      svg {
        transform: translate(0px, 2px);
      }
    }

    & .venue-detailed__icon-email {
      position: absolute;
      left: 8px;
    }

    & .venue-detailed__icon-phone {
      position: absolute;
      left: 8px;
    }
  }

  span {
    color: ${(props) => props.theme.colors.ink.gray};
    padding-right: 0.5rem;
    font-weight: ${(props) => props.theme.fontWeights.medium};
    font-size: 1rem;
  }

  .venue-detailed__description-heading {
    color: ${(props) => props.theme.colors.ink.light};
    font-weight: ${(props) => props.theme.fontWeights.regular};
    font-size: 1.5rem;
    padding: 1rem 2rem;
  }

  .venue-detailed__description-content {
    color: ${(props) => props.theme.colors.ink.light};
    font-weight: ${(props) => props.theme.fontWeights.regular};
    font-size: 1rem;
    padding: 0 2rem;
  }
`;

export default VenueDetailedPageStyled;

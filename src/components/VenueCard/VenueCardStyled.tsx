import styled from "styled-components";

const VenueCardStyled = styled.li`
  max-width: 20rem;

  & .venue-card__picture {
    display: block;
    object-fit: cover;
    object-position: center;
    min-width: 100%;
    border-top-left-radius: ${(props) => props.theme.borderRadius.small};
    border-top-right-radius: ${(props) => props.theme.borderRadius.small};
    height: 10rem;
    width: 100%;
  }

  & .venue-card__info {
    background-color: ${(props) => props.theme.colors.ink.lightest};
    padding: 0.8rem;
    border-bottom-left-radius: ${(props) => props.theme.borderRadius.small};
    border-bottom-right-radius: ${(props) => props.theme.borderRadius.small};
    min-width: 100%;
    position: relative;
    min-height: 6rem;

    & .venue-card__title {
      color: ${(props) => props.theme.colors.ink.dark};
      padding-right: 2.5rem;
      font-weight: ${(props) => props.theme.fontWeights.medium};
    }

    & .venue-card__icon-location {
      padding-right: 3px;
    }

    & .venue-card__icon-capacity {
      padding-right: 3px;

      svg {
        transform: translate(0px, 2px);
      }
    }
    & .venue-card__icon-detail {
      display: flex;
      position: absolute;
      top: 0.6rem;
      right: 0.8rem;
    }

    & .venue-card__icon-delete {
      position: absolute;
      bottom: 0.4rem;
      right: 0.8rem;
    }
  }

  span {
    color: ${(props) => props.theme.colors.ink.gray};
    padding-right: 0.5rem;
    font-weight: ${(props) => props.theme.fontWeights.medium};
  }
`;

export default VenueCardStyled;

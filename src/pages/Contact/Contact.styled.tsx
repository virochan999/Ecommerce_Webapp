import styled from "styled-components"
import { centerFlex, centerFlexWithDirection } from "../../GlobalStyles/mixins"
import { fontWeight } from "../../GlobalStyles/FontVariables"
import { colors } from "../../GlobalStyles/variables"

export const ContactWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;
  flex-grow: 1;

  & .contact-form {
    width: 50%;
    ${centerFlexWithDirection("column")}
    gap: 1.5rem;
    padding: 2rem;
    border-radius: 1rem;
    background-color: ${(props) => props.theme.backgroundPrimary};

    &__input {
      display: flex;
      flex-direction: column;
      width: 50%;
      gap: 0.5rem;
      position: relative;

      & label {
        font-weight: ${fontWeight.FONT_MEDIUM};
      }

      & textarea,
      input {
        border: 2px solid ${colors.TEXT_GREY};
        background-color: ${(props) => props.theme.inputBackground};
        color: ${(props) => props.theme.text};
        border-radius: 0.2rem;
        padding: 0.2rem;
        font-weight: ${fontWeight.FONT_MEDIUM};

        &:focus {
          outline: 2px solid ${colors.TEXT_GREY};
        }

        &::placeholder {
          color: ${(props) => props.theme.text};
          opacity: 0.5;
        }
      }

      & textarea {
        max-width: 100%;
      }
    }

    & .btn-wrapper {
      ${centerFlex}
      gap: 1rem;
    }
  }
`

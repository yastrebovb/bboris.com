import styled from "styled-components"

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 64rem;
  margin: 2rem auto;
  font-size: 1.7rem;
`

export const Label = styled.label`
  font-size: 1.7rem;
  font-weight: 500;
`

export const Input = styled.input`
  margin: 2rem 0;
  padding: 0.5rem 0.25rem;
  border: none;
  border-bottom: 1.5px solid #000;
  transition: all 0.1s linear;

  &:active,
  &:focus {
    border-color: rgb(255, 204, 51);
    outline: 0;
  }
`

export const Submit = styled(Input)`
  width: 20rem;
  margin: 4rem auto;
  padding: 1.2rem 1rem;
  border: 1.5px solid #000;
  border-color: ${({ borderColor }) => (borderColor ? borderColor : "initial")};
  border-radius: 6px;
  background-color: #fff;
  font-weight: 600;
  text-transform: uppercase;
  transition: all 0.2s linear;
  cursor: pointer;

  &:hover {
    transform: translateY(-6px);
    border-color: rgb(255, 204, 51);
  }

  &:disabled {
    color: inherit;
  }
`

export const TextArea = styled.textarea`
  margin: 2rem 0;
  padding: 0.5rem 0.25rem;
  border: none;
  border-bottom: 1.5px solid #000;

  &:active,
  &:focus {
    border-color: rgba(255, 204, 51, 0.6);
    outline: 0;
  }
`

import React from "react";
import styled from 'styled-components';


type StyledButtonProps = {
selected?: boolean;
cancel?: boolean;
};

const StyledButton = styled.button<StyledButtonProps>`
   width: 147px;
  height: 52px;
  border-radius: 8px;
  background-color: ${({ selected }) => (selected ? '#35B8BE' : 'transparent')};
  color: ${({ selected }) => (selected ? 'white' : 'black')};
  border: 1px solid #61728333;
  font-family: Times, Times New Roman, serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
color: var(--text-color);
  &:hover {
    background-color: #35B8BE;
    color: white;
  }
`;


//function Button

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  selected?: boolean;
  cancel?: boolean;
 };

const Button: React.FC<ButtonProps> = ({ selected, children, ...rest}) => {
  return (
    <StyledButton selected={selected} {...rest}>
      {children}
    </StyledButton>
  );
}

export default Button;

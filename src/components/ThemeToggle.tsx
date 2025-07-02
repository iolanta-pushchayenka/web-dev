import React, { useContext } from "react";
import styled from "styled-components";
import  {ThemeContext } from "../context/ThemeContext";

const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  margin-top: 13px;
  margin-left: 50px;
`;

const Checkbox = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

const Slider = styled.span<{ isDark: boolean }>`
  position: relative;
  cursor: pointer;
  display: block;
  width: 60px;
  height: 34px;
  background-color: transparent; 
  transition: 0.4s;
  border-radius: 34px;
  overflow: hidden;
  border: 2px solid ${({ isDark }) => (isDark ? "white" : "yellow")}; 
`;


const SliderIcon = styled.div<{ isDark: boolean }>`
  position: absolute;
  top: 4px;
  left: ${({ isDark }) => (isDark ? "30px" : "4px")};
  height: 26px;
  width: 26px;
  border-radius: 50%;
  background-color: transparent; 
  display: flex;
  align-items: center;
  justify-content: center;
  transition: left 0.4s ease;
  font-size: 20px; 
`;


const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <Switch>
      <Checkbox type="checkbox" checked={isDark} onChange={toggleTheme} />
      <Slider isDark={isDark}>
        <SliderIcon isDark={isDark}>
          {isDark ? "🌑" : "🌞"}
        </SliderIcon>
      </Slider>
    </Switch>
  );
};

export default ThemeToggle;
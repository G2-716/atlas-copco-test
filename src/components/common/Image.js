import styled from "styled-components";

export const ImageWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 41%;
  max-height: 350px;
  overflow: hidden;
  margin-left: -29px;
  display: flex;
  justify-content: center;
  z-index: -1;
`

export const ImageStyled = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`
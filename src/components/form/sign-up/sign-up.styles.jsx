import styled from 'styled-components';

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;

  @media screen and (max-width: 768px) {
    margin: 0 10% 25px 10%;
    width:80%;
  }
`;

export const TitleContainer = styled.h2`
  margin: 10px 0;
`;
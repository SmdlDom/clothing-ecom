import styled from 'styled-components';

export const SignInContainer = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
		margin: 0 10% 25px 10%;
		width:80%;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
import styled from 'styled-components';

export const SignUpAndSignInContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;

  @media screen and (max-width: 768px) {
		flex-direction: column;
  }
`;
import styled from 'styled-components';

export const CollectionPageContainerStyled = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    align-items: center;
  }
`;

export const TitleContainer = styled.h2`
  font-size: 38px;
  margin: 0 auto 30px;
`;


export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;

  & .collection-item {
    //margin-bottom: 30px;
  }

  @media screen and (max-width: 768px) {
		grid-template-columns: 1fr 1fr;
    grid-gap: 5px;
		
  }
`;
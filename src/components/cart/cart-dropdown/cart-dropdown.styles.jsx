import styled from 'styled-components';
import CustomButton from "../../common/custom-button/custom-button.component";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 80px;
  right: 0;
  z-index: 5;

  @media screen and (max-width: 768px) {
    width: 82%;
		height: 80%;
		margin: 0 9%;
  }
`;

export const EmptyMessageContainer = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItemsContainer = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: auto;
  
	@media screen and (max-width: 768px) {
		height: 100%;
  }
`;

export const CustomButtonContainer = styled(CustomButton)`
  margin-top: auto;
`;
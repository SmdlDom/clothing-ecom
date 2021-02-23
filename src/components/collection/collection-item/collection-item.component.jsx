import React from 'react';
import { connect } from 'react-redux'

import { addItem } from '../../../redux/cart/cart.actions'

import {
	CollectionItemContainer,
	CustomButtonContainer,
	CollectionFooterContainer,
	ImageContainer, PriceContainer
} from "./collection-item.styles";

const CollectionItem = ({item, addItem}) => {
	const { name, price, imageUrl } = item;
	return (
	<CollectionItemContainer>
		<ImageContainer
			style={{
				backgroundImage: `url(${imageUrl})`
			}}
		/>
		<CollectionFooterContainer>
			<span>{name}</span>
			<PriceContainer>{price}</PriceContainer>
		</CollectionFooterContainer>
		<CustomButtonContainer onClick={()=> addItem(item)} inverted>
			Add to cart
		</CustomButtonContainer>
	</CollectionItemContainer>
)};

const mapDispatchToProps = dispatch => ({
	addItem: item => dispatch(addItem(item))
});

export default connect(
	null,
	mapDispatchToProps
)(CollectionItem);
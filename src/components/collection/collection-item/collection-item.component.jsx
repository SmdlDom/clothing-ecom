import React from 'react';
import { connect } from 'react-redux'

import { addItem } from '../../../redux/cart/cart.actions'

import {
	CollectionItemContainer,
	CustomButtonContainer,
	CollectionFooter,
	ImageContainer
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
		<CollectionFooter>
			<span>{name}</span>
			<span>{price}</span>
		</CollectionFooter>
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
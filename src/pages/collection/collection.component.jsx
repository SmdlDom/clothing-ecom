import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from "../../components/collection/collection-item/collection-item.component";

import { selectCollection } from "../../redux/shop/shop.selector";

import './collection.styles'
import {CollectionPageContainerStyled, ItemsContainer, TitleContainer} from "./collection.styles";

const CollectionPage = ({ collection }) => {
	const { title, items } = collection;
	return (
		<CollectionPageContainerStyled>
			<TitleContainer>{ title }</TitleContainer>
			<ItemsContainer>
				{items.map(item => (
					<CollectionItem key={item.id} item={item} />
					))}
			</ItemsContainer>
		</CollectionPageContainerStyled>
	);
};


const mapStateToProps = (state, ownProps) => ({
	collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
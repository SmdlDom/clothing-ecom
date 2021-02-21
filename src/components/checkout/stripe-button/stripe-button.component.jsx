import React from 'react';
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {
	const priceForStripe = price * 100;
	const publishablekey =
		'pk_test_51INKyTIhQrKbVlHa1nOPSGcpZnyD1uXtZs3NVTb1gIEIFN7LyCxlWrcPgchrk75bGZU8quKc5FFBpC7m3v9HMFJK00bnEigQFH'

	const onToken = token => {
		console.log(token);
		alert('Payment Successful');
	}

	return (
		<StripeCheckout
			label='Pay Now'
			name='CRWN Clothing Ltd.'
			billingAddress
			shippingAddress
			image='https://svgshare.com/i/CUz.svg'
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel='Pay Now'
			token={onToken}
			stripeKey={publishablekey}
		/>
	)
};

export default StripeCheckoutButton;

define`
	<coin-preview>
		<style>
			div {
				background-color: var(--gray-8);
				border-radius: var(--radius-2);
				padding: var(--size-fluid-3);
				box-shadow: var(--shadow-2);

				&:hover {
					box-shadow: var(--shadow-3);
				}

				@media (--motionOK) {
					animation: var(--animation-fade-in);
				}
			}
			img {
				display: block;
			}
			span {
				display: block;
			}
			#price {
				font-size: 2em;
			}
		</style>
		<div onclick="goToCoin(this)">
			<img src="${'icon'}" />
			<span id="name">${'name'} (${'ticker'})</span>
			<span id="price">${'price'}</span>
		</div>
		<script>
			getPriceOf(this);
			const interval = 5000;//in milliseconds
			setInterval(() => {
				getPriceOf(this);
			}, (interval));
		</script>
	</coin-preview>
`

function goToCoin(button) {
	const coinPreview = button.getRootNode().host;
	const searchParams = new URLSearchParams();
	searchParams.set('coin', coinPreview.getAttribute('ticker'));
	window.location.search = searchParams.toString();
}
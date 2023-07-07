const urlParams = new URLSearchParams(window.location.search);

if (urlParams.get('coin')) {
	console.log(`load ${urlParams.get('coin')}`)
} else {
	console.log('load all coins')
}
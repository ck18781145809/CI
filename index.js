const arr = [22.80, 24.20, 22.70, 8.00, 15.30, 24.40, 18.40, 0.0]; //  135.8

let sum = arr.reduce((acr, cur) => {
	const [int = '', dec = ''] = String(cur).split('.');
	
	let result = Number(int + dec.padEnd(2, '0'));
	
	return String(Number(result) + Number(acr));
}, 0);

let resArr = sum.split('');
	resArr.splice(-2,0,'.');

const result = resArr.join('');

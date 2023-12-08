function toHex(intArray){
	let output = '';
	intArray.forEach((intCode) => {
  	const hexString = intCode.toString(16);
  	output += intCode < 0x10 ? '0' + hexString : hexString;
	});
	return output;
}

export default async function hash(text, algo){
	if(typeof algo === 'undefined') algo = 'SHA-256';
	if(typeof text !== 'string') text = JSON.stringify(text);
	return A.toHex(new Uint8Array(await crypto.subtle.digest(algo, (new TextEncoder()).encode(text))));
}

function reverseString(string){
	if(!string){
		throw Error('Please use a string as input')
	}
	let stringArray = string.toString().split('');
	stringArray = stringArray.reverse()
	return stringArray.join('')
}

export default reverseString

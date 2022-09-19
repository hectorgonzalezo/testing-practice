function capitalize(string){
	if( !string || string.length === 0 ){
		return ''
	}
	const inputString = string.toString()
	const firstLetter = inputString[0].toUpperCase()
	const rest = inputString.slice(1);
	return firstLetter + rest
}

export default capitalize

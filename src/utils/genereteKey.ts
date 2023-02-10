function generateKey() {
	// eslint-disable-next-line no-magic-numbers
	const rnd = () => Math.random().toString(36).substring(2, 15)
	return `${rnd()}-${rnd()}`
}

export default generateKey

function classNames(...arguments_: Array<string | Object>): string {
	const result = new Set()

	const classeNames = arguments_.filter(Boolean)

	for (const item of classeNames) {
		if (typeof item === 'string') {
			result.add(item)
		} else if (item instanceof Array) {
			for (const cl of item) {
				result.add(cl)
			}
		} else if (Object.getPrototypeOf(item) === Object.prototype) {
			for (const [key, value] of Object.entries(item)) {
				if (value) {
					result.add(key)
				}
			}
		}
	}

	return [...result].join(' ').replace(',', ' ')
}

export default classNames

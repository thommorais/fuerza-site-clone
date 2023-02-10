export const randomNumberBeetween = (min: number, max: number): number =>
	Math.floor(Math.random() * (max - min + 1) + min)

export const getRandomImage = ({ height, width }: { height: number; width: number }): string =>
	`https://picsum.photos/id/${randomNumberBeetween(1, 100 - (1 + 1))}/${width}/${height}`

export default getRandomImage

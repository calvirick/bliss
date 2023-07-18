// place files you want to import through the `$lib` alias in this folder.

export const capitalizeFirstLetter = (str: string) =>
	`${str.charAt(0).toUpperCase()}${str.slice(1)}`;

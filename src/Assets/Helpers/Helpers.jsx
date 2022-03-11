export const customSort = async (array, value) => {
	array.sort((a, b) => {
		return a[value].localeCompare(b[value]);
	});
};
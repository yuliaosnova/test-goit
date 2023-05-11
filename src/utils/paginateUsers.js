export function paginateUsers(arr, page, itemsPerPage) {
	const lastIndex = page * itemsPerPage;
	const firstIndex = 0;
	return arr.slice(firstIndex, lastIndex);
 }
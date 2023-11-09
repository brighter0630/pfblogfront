let timeout;

export function debounce(func, limit) {
	if(!timeout) {
		func();
		timeout = setTimeout(() => {
			timeout = undefined;
		}, limit);
	}
}

export const saveToStorage = (name: string, data) => {
	localStorage.setItem(name, JSON.stringify(data))
}

export const getFromStorage = (name: string) => {
	const storage = localStorage.getItem(name)
	return storage ? JSON.parse(storage) : []
}

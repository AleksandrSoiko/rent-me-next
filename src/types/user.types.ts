export interface IUser {
	id: string
	email: string
	isAdmin: true
	favorite: []
	address: string
	city: string
	country: string
	firstname: string
	lastname: string
	phonenumber: string
	foto: string
	age: FormData
}


export interface formikVal {
	firstname: string
	lastname: string
	email: string
	phonenumber: string
	age: Date
	country: string
	city: string
	address: string
}
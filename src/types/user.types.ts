import { Apartament } from './apartament.types'

export interface IUser {
	id: string
	email: string
	isAdmin: true
	favorite: [Apartament] | []
	address?: string
	city?: string
	country?: string
	firstname: string
	lastname?: string
	phonenumber?: string
	foto?: string
	age?: string
}

export interface formikVal {
	firstname: string
	lastname: string
	email?: string
	phonenumber: string
	age?: string
	country: string
	city: string
	address: string
}

import { FormValues } from './formikProfile.types'

export interface Apartament {
	_id: string
	title: string
	pictures: string[]
	place: string
	price: number
	description: string
	genres: string[]
	agent: FormValues[]
}

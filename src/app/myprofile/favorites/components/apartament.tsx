'use client'

import { useEffect, useState } from 'react'
import { Apartament } from 'types/apartament.types'
import LatestOffers from 'app/components/LatestOffers'
import { ApartamentService } from 'service/apartament/apartament.service'

const ApratamentReserv = () => {
	const [aparatament, setApartament] = useState<Apartament[]>([])
	useEffect(() => {
		getFavorite()
	}, [])

	const getFavorite = async () => {
		const resp = await ApartamentService.getFavoriteApartament()
		setApartament(resp)
	}

	return <LatestOffers apartament={aparatament} />
}

export default ApratamentReserv

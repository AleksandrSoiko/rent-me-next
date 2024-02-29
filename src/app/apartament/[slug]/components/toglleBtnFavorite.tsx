import 'toastr/build/toastr.css'
import toastr from 'toastr'
import Image from 'next/image'
import { IUser } from 'types/user.types'

export const togleBtnFavorite = (
	queryId: string,
	profile: IUser | null,
	inFavorite: string[],
	fetchAxios
) => {
	const togleAddFavotireApartament = async (idApartament: string) => {
		await fetchAxios({
			url: `/users/profile/reservation?idApartament=${idApartament}`,
			method: 'PUT',
			body: {},
		})
	}

	if (!profile) {
		return (
			<button onClick={() => toastr.error('Log in to add to favorites')}>
				<Image src="/header/like.svg" width="34" height="34" alt="like" />
			</button>
		)
	}

	const isFavorite = inFavorite.includes(queryId)

	return (
		<button onClick={() => togleAddFavotireApartament(queryId)}>
			<Image
				src={isFavorite ? '/header/likeUse.svg' : '/header/like.svg'}
				width="34"
				height="34"
				alt="like"
			/>
		</button>
	)
}

import MyProfile from '../page'
import ApratamentReserv from './components/apartament'

const MyFavorites = async () => {
	return (
		<div className="flex   max-w-[1180px] mx-[auto]">
			<MyProfile activeLabel={'reserv'} />
			<div className="max-w-[72.25rem] w-[100%] lg:w-[80%]">
				<p className="lg:hidden text-xl height-[1.8rem] mt-[1.5rem] ml-[1.5rem]">
					Favorites
				</p>
				<ul className="flex flex-col gap-[1.5rem] m-[1.5rem] ">
					<ApratamentReserv />
				</ul>
			</div>
		</div>
	)
}

export default MyFavorites

import React, { useState } from 'react'
import Image from 'next/image'
import CustomSelector from './Selector'
import RadioBtn from './RadioBtn'

const minBeds: string[] = ['1', '2', '3', '4']
const maxBeds: string[] = ['1', '2', '3', '4 and more']
const minPrice: string[] = ['100', '500', '1000', '2000']
const maxPrice: string[] = ['100', '500', '1000', '2000']
const addedArrayBtnName: string[] = ['Any time', '24 hours', '3 days', '7 days']
const furnishedArrayBtnName: string[] = [
	'Any',
	'Part furnished',
	'Furnished',
	'Unfurnished',
]

interface FilterProps {
	openFilter: boolean
	setOpenFilter: React.Dispatch<React.SetStateAction<boolean>>
}

const Filter: React.FC<FilterProps> = ({ openFilter, setOpenFilter }) => {
	const [selectedMinBeds, setSelectedMinBeds] = useState<string>('No Min')
	const [selectedMaxBeds, setSelectedMaxBeds] = useState<string>('No Max')
	const [selectedMinPrice, setSelectedMinPrice] = useState<string>('No Min')
	const [selectedMaxPrice, setSelectedMaxPrice] = useState<string>('No Max')
	const [selectedFurnished, setSelectedFurnished] = useState<string>('Any')
	const [selectedAdded, setSelectedAdded] = useState<string>('Any time')

	return (
		<div className="truncate pb-4 pl-4 pr-4 ">
			<div
				className={`${
					openFilter ? 'animate__dropFilter ' : 'animate__dropFilter--back '
				}   lg:py-10 shadow `}
			>
				<div
					className={`text-[#000] md:grid px-6 lg:px-10 pt-4  grid-cols-2 max-md:flex  max-md:flex-col max-md:gap-4 md:gap-8 lg:gap-5 justify-center `}
				>
					<div className="flex flex-col md:w-[20rem] lg:w-[33.75rem] lg:h-[18.18rem] ">
						<p className="font-ComhtmlFortaa text-lg leading-[1.35rem] ">
							Bedrooms
						</p>
						<div className="flex gap-5 max-md:justify-center">
							<CustomSelector
								label="Min beds"
								variable={minBeds}
								selectedOption={selectedMinBeds}
								onSelect={(option) => setSelectedMinBeds(option)}
							/>
							<CustomSelector
								label="Max beds"
								variable={maxBeds}
								selectedOption={selectedMaxBeds}
								onSelect={(option) => setSelectedMaxBeds(option)}
							/>
						</div>
					</div>
					<div className="flex flex-col md:w-[20rem] lg:w-[33.75rem] lg:h-[18.18rem]">
						<p className="font-ComhtmlFortaa text-lg leading-[1.35rem]">
							Price
						</p>
						<div className="flex gap-5 max-md:justify-center">
							<CustomSelector
								label="Min Price"
								variable={minPrice}
								selectedOption={selectedMinPrice}
								onSelect={(option) => setSelectedMinPrice(option)}
							/>
							<CustomSelector
								label="Max Price"
								variable={maxPrice}
								selectedOption={selectedMaxPrice}
								onSelect={(option) => setSelectedMaxPrice(option)}
							/>
						</div>
					</div>
					<RadioBtn
						arrayBtnName={furnishedArrayBtnName}
						name="Furnished"
						selectedValue={selectedFurnished}
						onSelect={(option) => setSelectedFurnished(option)}
					/>
					<RadioBtn
						arrayBtnName={addedArrayBtnName}
						name="Added"
						selectedValue={selectedAdded}
						onSelect={(option) => setSelectedAdded(option)}
					/>
				</div>
				<button
					onClick={() => setOpenFilter(true)}
					className={`
            mx-[auto] text-[#000] flex justify-center items-center gap-4 font-Montserrat text-base leading-[1.2rem] my-4 md:my-8 lg:text-xl lg:leading-[1.5rem]`}
				>
					<p>Show less filters</p>
					<Image
						src="/LatestOffers/showMore.svg"
						width="25"
						height="25"
						alt="showLess"
						className="origin-center rotate-180 "
					/>
				</button>
			</div>
		</div>
	)
}

export default Filter

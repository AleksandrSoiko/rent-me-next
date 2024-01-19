import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
	return (
		<footer className=" lg:w-[1180px] mx-[auto] py-12  md:px-8 md:pt-10 md:pb-16 font-Manrope text-lg font-semibold leading-[1.35rem] max-md:bg-gradient-to-t from-rose to-transparent">
			<ul className="flex flex-col md:justify-between md:flex-row-reverse max-md:grid mx-[auto] grid-cols-2 justify-items-center text-[#000]">
				<li className="row-span-1">
					<ul className="flex flex-col gap-4">
						<li>
							<Link href={'/searchPage/buy'}>Buy</Link>
						</li>
						<li>
							<Link href={'/searchPage/rent'}>Rent</Link>
						</li>
						<li>Sell</li>
						<li>Agents</li>
					</ul>
				</li>
				<li className="col-span-1">
					<ul className="flex flex-col gap-4">
						<li>Terms of use</li>
						<li>Security rules</li>
						<li>Privacy Policy</li>
						<li>Cookies settings</li>
					</ul>
				</li>
				<li className="col-span-2 max-md:mt-8">
					<div>
						<Image
							src="/header/logo.svg"
							width="177"
							height="64"
							alt="logo"
							className="max-md:hidden"
						/>
						<Image
							src="/header/logo.svg"
							width="111"
							height="40"
							alt="logo"
							className="md:hidden"
						/>
						<p className="mt-4">
							<span>2023</span>
							<span>©</span>Real Estate. All rights reserved
						</p>
						<div className="flex gap-5 mt-6">
							<Image
								src="/social/facebook.svg"
								width="41"
								height="40"
								alt="facebook"
							/>
							<Image
								src="/social/instagram.svg"
								width="41"
								height="40"
								alt="instagram"
							/>
							<Image
								src="/social/telegram.svg"
								width="41"
								height="40"
								alt="telegram"
							/>
							<Image
								src="/social/twitter.svg"
								width="41"
								height="40"
								alt="twitter"
							/>
						</div>
					</div>
				</li>
			</ul>
		</footer>
	)
}

export default Footer

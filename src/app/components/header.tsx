'use client'
import Cookies from 'js-cookie'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
	const isAuth = Cookies.get('accessToken')
	return (
		<header className="flex justify-between items-center lg:w-[1180px] mx-[auto] px-4">
			<div className="md:hidden">
				<Image src="/header/burger.svg" width="41" height="40" alt="burger" />
			</div>
			<Link href="/">
				<Image
					src="/header/logo.svg"
					width="111"
					height="40"
					alt="logo"
					className="md:hidden"
				/>
				<Image
					src="/header/logoLg.svg"
					width="177"
					height="64"
					alt="logo"
					className="max-md:hidden"
				/>
			</Link>
			<nav className="max-md:hidden">
				<ul className="flex gap-10 font-Manrope text-lg font-semibold leading-[1.35rem] text-[#000]">
					<li>
						<Link href="/searchPage/buy">Buy</Link>
					</li>
					<li>
						<Link href="/searchPage/rent">Rent</Link>
					</li>
					<li>
						<Link href="/">Sell</Link>
					</li>
					<li>
						<Link href="/agent">Agents</Link>
					</li>
				</ul>
			</nav>
			<ul className="flex gap-4">
				<li>
					<Link href={'/myprofile/favorites'}>
						<Image src="/header/like.svg" width="28" height="28" alt="like" />
					</Link>
				</li>
				<li>
					<Link href={isAuth ? '/myprofile/profile' : '/signIn'}>
						<Image src="/header/user.svg" width="28" height="28" alt="user" />
					</Link>
				</li>
			</ul>
		</header>
	)
}

export default Header

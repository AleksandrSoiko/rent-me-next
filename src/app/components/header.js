import Image from "next/image"

const Header = () => {
    return (
        <header className="flex justify-around items-center">
            <div className="md:hidden">
            <Image src='/header/burger.svg' width="41" height="40" alt="burger" />
            </div>
            <a href="/">
                <Image src='/header/logo.svg' width="111" height="40" alt="logo" className="md:hidden" />
                <Image src='/header/logoLg.svg' width="177" height="64" alt="logo" className="max-md:hidden" />
            </a>
            <nav className="max-md:hidden">
                <ul
                    className="flex gap-10 font-Manrope text-lg font-semibold leading-[1.35rem]"
                >
                    <li><a href="./partials/CardPage/cardPage.html">Buy</a></li>
                    <li><a href="partials/404/404.html">Rent</a></li>
                    <li><a href="partials/searchPage/searchPage.html">Sell</a></li>
                    <li>
                        <a href="partials/propertyAdding/propertyAdding.html">Agents</a>
                    </li>
                </ul>
            </nav>
            <ul className="flex gap-4">
                <li>
                    <Image src='/header/like.svg' width="28" height="28" alt="like" />
                </li>
                <li>
                <Image src='/header/user.svg' width="28" height="28" alt="user"  />
                </li>
            </ul>
        </header>
    )
}

export default Header
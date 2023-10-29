const Footer = ()=>{
    return (
        <footer
        className="py-12 px-4 md:px-8 md:pt-10 md:pb-16 font-Manrope text-lg font-semibold leading-[1.35rem] max-md:bg-gradient-to-t from-rose to-transparent"
      >
        <ul
          className="flex flex-col md:justify-around md:flex-row-reverse max-md:grid mx-[auto] grid-cols-2 justify-items-stretch"
        >
          <li className="row-span-1">
            <ul className="flex flex-col gap-4">
              <li>Buy</li>
              <li>Rent</li>
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
              <svg
                width="177"
                height="64"
                viewBox="0 0 177 64"
                fill="none"
                className="max-md:hidden"
              >
                <use href="partials/HomePage/sprite.svg#logoLg"></use>
              </svg>
              <svg width="111" height="40" viewBox="0 0 111 40" className="md:hidden">
                <use href="partials/HomePage/sprite.svg#logo"></use>
              </svg>
              <p className="mt-4">
                <span>2023</span><span>©</span>Real Estate. All rights reserved
              </p>
              <div className="flex gap-5 mt-6">
                <svg width="41" height="40" viewBox="0 0 41 40">
                  <use href="partials/HomePage/sprite.svg#facebook"></use>
                </svg>
                <svg width="41" height="40" viewBox="0 0 41 40">
                  <use href="partials/HomePage/sprite.svg#instagram"></use>
                </svg>
                <svg width="41" height="40" viewBox="0 0 41 40">
                  <use href="partials/HomePage/sprite.svg#twitter"></use>
                </svg>
                <svg width="41" height="40" viewBox="0 0 41 40">
                  <use href="partials/HomePage/sprite.svg#telegram"></use>
                </svg>
              </div>
            </div>
          </li>
        </ul>
      </footer>
    )
}

export default Footer
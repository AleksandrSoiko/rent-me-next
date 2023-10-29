const HeroSection = ()=>{
    return (
        <>
        <h2
          className="md:w-[45rem] w-[18rem] mr-[auto] ml-[auto] text-center font-Comfortaa text-2xl font-normal not-italic leading-[1.8rem] mb-2 md:text-[3.75rem] md:leading-[3.75rem] mx-4"
        >
          We know exactly what you are loking for
        </h2>
        <div className="relative w-[400px] h-[179px] md:hidden mr-[auto] ml-[auto]">
          <svg
            width="33"
            height="54"
            viewBox="0 0 33 54"
            fill="none"
            className="absolute bottom-0 left-0"
          >
            <ellipse
              cx="26.4576"
              cy="26.4576"
              rx="26.4576"
              ry="26.4576"
              transform="matrix(-1 0 0 1 32.915 0.609497)"
              fill="#FFE5D2"
            />
          </svg>
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            className="absolute top-[1.53rem] left-[3.79rem]"
          >
            <ellipse
              cx="17.6384"
              cy="17.6384"
              rx="17.6384"
              ry="17.6384"
              transform="matrix(-1 0 0 1 35.9727 0.559692)"
              fill="#FFE5D2"
            />
          </svg>
          <svg
            width="103"
            height="106"
            viewBox="0 0 103 106"
            fill="none"
            className="absolute top-0 right-0"
          >
            <ellipse
              cx="52.9152"
              cy="52.9152"
              rx="52.9152"
              ry="52.9152"
              transform="matrix(-1 0 0 1 106.194 -0.134033)"
              fill="#FFE5D2"
            />
          </svg>
          <img
            src="partials/HomePage/main-illustration.svg"
            alt="person"
            className="absolute bottom-0 right-0"
          />
          <img
            src="partials/HomePage/person1-illustration.svg"
            alt="person"
            className="absolute bottom-0 left-[1.53rem]"
          />
        </div>
        <div
          className="relative w-[800px] h-[369px] hidden md:block mr-[auto] ml-[auto]"
        >
          <svg
            className="absolute bottom-0 left-0"
            width="120"
            height="120"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="60"
              cy="60"
              r="60"
              transform="matrix(-1 0 0 1 120 0)"
              fill="#FFE5D2"
            />
          </svg>

          <svg
            className="absolute top-[1.53rem] left-[3.79rem]"
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="40"
              cy="40"
              r="40"
              transform="matrix(-1 0 0 1 80 0)"
              fill="#FFE5D2"
            />
          </svg>
          <svg
            className="absolute top-0 right-0"
            width="240"
            height="240"
            viewBox="0 0 240 240"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="120"
              cy="120"
              r="120"
              transform="matrix(-1 0 0 1 240 0)"
              fill="#FFE5D2"
            />
          </svg>

          <img
            src="partials/HomePage/main_png.svg"
            alt="person"
            className="absolute bottom-0 right-0"
          />
          <img
            src="partials/HomePage/persona1_png.svg"
            alt="persons"
            className="absolute bottom-0 left-[1.53rem]"
          />
        </div>
      </>
    )
}

export default HeroSection
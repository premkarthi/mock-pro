/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

function Mentor(props) {
  const {
    image,
    name,
    profile,
    company,
    currency,
    language,
    experience
  } = props.item;
  return (
    <div className="rounded-lg mr-3 md:mx-3 p-4 bg-white">
      <div className="relative mb-5 bg-lightBg">
        <img src={image} alt={name} className="rounded-lg h-48 mx-auto" />
        <span className="bg-secondary rounded-sm text-xs px-2 py-1 absolute bottom-2 right-2">
          {experience} Years Exp
        </span>
      </div>
      <div className="text-center">
        <h4 className="mb-2 font-semibold">
          {name}
        </h4>
        <h5 className="mb-3 text-lightBlock font-semibold flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 mr-1 mb-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
            />
          </svg>
          <span>
            {profile} AT {company}
          </span>
        </h5>
        <p className="mb-3 text-lightBlock flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 mr-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>

          <span>
            {currency}/hr
          </span>
        </p>
        <p className="mb-3 text-lightBlock flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 mr-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"
            />
          </svg>

          {language &&
            language.map((item, i) => {
              return (
                <span key={i}>
                  {item}
                </span>
              );
            })}
        </p>
        <button className="btn btn-primary w-full">Book Now</button>
      </div>
    </div>
  );
}

export default Mentor;

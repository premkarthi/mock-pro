/* eslint-disable react/prop-types */

function Testimonal(props) {
    
    const {name, company, country,text, image}  = props.details
  return (
    <div className="bg-lightBg rounded-lg p-5 md:py-10 md:p-7 mr-5">
        <div className="mx-auto w-40 rounded-full mb-5 bg-white p-2 ">
            <img src={image} alt={name} />
        </div>
        <p className="mb-5 text-md line-clamp-5">{text}</p>
        <p className="font-medium">- {name}, {company} , {country}</p>
    </div>
  )
}

export default Testimonal
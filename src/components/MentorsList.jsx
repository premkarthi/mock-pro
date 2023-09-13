import { useState } from "react"
import Mentor from "./Mentor"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function MentorsList() {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1.3,
              slidesToScroll: 1
            }
          }
        ]
      };
    const [mentors] = useState([
        {
            image: 'https://robohash.org/hicveldicta.png',
            company: 'Amazon',
            profile: 'SDE 2',
            experience: '10',
            language: ['English, Hindi'],
            name: "Xander Richard",
            phone: "1-387-274-8724",
            email: "duis.ac.arcu@hotmail.ca",
            address: "652-9405 Mollis. Rd.",
            postalZip: "865557",
            region: "Sverdlovsk Oblast",
            country: "Turkey",
            numberrange: 5,
            currency: "$42.44"
        },
        {
            image: 'https://robohash.org/hicveldicta.png',
            company: 'Amazon',
            profile: 'SDE 2',
            experience: '10',
            language: ['English, Hindi'],
            name: "Colleen Donovan",
            phone: "(325) 236-3834",
            email: "pellentesque.ultricies.dignissim@hotmail.com",
            address: "928-1021 Ut St.",
            postalZip: "868415",
            region: "Hậu Giang",
            country: "Costa Rica",
            numberrange: 4,
            currency: "$15.30"
        },
        {
            image: 'https://robohash.org/hicveldicta.png',
            company: 'Amazon',
            profile: 'SDE 2',
            experience: '10',
            language: ['English, Hindi'],
            name: "Jonas Madden",
            phone: "1-833-756-3670",
            email: "orci.ut@outlook.edu",
            address: "Ap #213-8004 Erat Avenue",
            postalZip: "28251",
            region: "Nuevo León",
            country: "Vietnam",
            numberrange: 5,
            currency: "$49.71"
        },
        {
            image: 'https://robohash.org/hicveldicta.png',
            company: 'Amazon',
            profile: 'SDE 2',
            experience: '10',
            language: ['English, Hindi'],
            name: "Jasmine Higgins",
            phone: "1-480-976-7632",
            email: "ut.pharetra@icloud.ca",
            address: "Ap #646-5227 At Av.",
            postalZip: "72808",
            region: "Mykolaiv oblast",
            country: "Chile",
            numberrange: 7,
            currency: "$16.67"
        },
        {
            image: 'https://robohash.org/hicveldicta.png',
            company: 'Amazon',
            profile: 'SDE 2',
            experience: '10',
            language: ['English, Hindi'],
            name: "Brianna Terry",
            phone: "(422) 262-5342",
            email: "mauris.quis.turpis@yahoo.ca",
            address: "692-4242 Gravida Av.",
            postalZip: "7915",
            region: "Comunitat Valenciana",
            country: "New Zealand",
            numberrange: 4,
            currency: "$7.67"
        }
    ])

  return (
    <div className='bg-lightBg'>
        <div className="container py-10 md:py-16  mx-auto ">
            <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-3">Meet some of our Mentors</h2>
            <p className="text-md text-center mx-auto sm:w-auto  md:w-2/3 ">We already have over 1,711+ amazing mentors available across the world. Sign up today to get
access to our mentors, and soon we will have many more resources available.</p>
            </div>

            <div className="my-5">
                <Slider {...settings} className="overflow-hidden md:overflow-visible">
                {
                    mentors.map((item,i)=>{
                        return <Mentor key={i} item={item}/>
                    })
                }
                </Slider>
            </div>
        </div>
    </div>
  )
}

export default MentorsList
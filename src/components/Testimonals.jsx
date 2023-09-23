
import Slider from "react-slick";
import Testimonal from "./Testimonal";
import { useState } from "react";

function Tesitmonals() {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2.3,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              arrows: false
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1.1,
              slidesToScroll: 1,
              initialSlide: 1,
              arrows: false
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1.1,
              slidesToScroll: 1,
              arrows: false
            }
          }
        ]
      };
      const [testimonals] = useState([
        {
          name: "Marsden Underwood",
          country: "Mexico",
          text: "Quisque ornare tortor at risus. Nunc ac sem ut dolor dapibus gravida. Aliquam tincidunt, nunc ac mattis ornare, lectus ante dictum mi, ac mattis velit justo nec ante. Maecenas mi felis, adipiscing fringilla, porttitor vulputate, posuere vulputate, lacus. Cras interdum. Nunc sollicitudin",
          company: "A Ultricies Corp.",
          image: 'https://robohash.org/hicveldicta.png',
        },
        {
          name: "Aiko Delgado",
          country: "Colombia",
          image: 'https://robohash.org/hicveldicta.png',
          text: "neque non quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam fringilla cursus purus. Nullam scelerisque neque sed sem egestas blandit. Nam nulla magna, malesuada vel, convallis in, cursus et, eros. Proin ultrices. Duis volutpat nunc sit amet metus. Aliquam erat volutpat. Nulla facilisis. Suspendisse commodo tincidunt nibh.",
          company: "Auctor Odio Institute"
        },
        {
          name: "Garrison Mckee",
          country: "Vietnam",
          image: 'https://robohash.org/hicveldicta.png',
          text: "purus. Duis elementum, dui quis accumsan convallis, ante lectus convallis est, vitae sodales nisi magna sed dui. Fusce aliquam, enim nec tempus scelerisque, lorem ipsum sodales purus, in molestie tortor nibh sit amet orci. Ut sagittis lobortis mauris. Suspendisse aliquet molestie tellus.",
          company: "Erat Sed LLP"
        },
        {
          name: "Deacon Crane",
          country: "Australia",
          image: 'https://robohash.org/hicveldicta.png',
          text: "pede, nonummy ut, molestie in, tempus eu, ligula. Aenean euismod mauris eu elit. Nulla facilisi. Sed neque. Sed eget lacus. Mauris non dui nec urna suscipit nonummy. Fusce fermentum fermentum arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere",
          company: "Pede Company"
        },
        {
          name: "Clinton Hewitt",
          country: "Chile",
          image: 'https://robohash.org/hicveldicta.png',
          text: "fringilla. Donec feugiat metus sit amet ante. Vivamus non lorem vitae odio sagittis semper. Nam tempor diam dictum sapien. Aenean massa. Integer vitae nibh. Donec est mauris, rhoncus id, mollis nec, cursus a, enim. Suspendisse aliquet, sem ut cursus luctus,",
          company: "Nascetur Ridiculus Inc."
        }
      ])

  return (
    <div className="container mx-auto py-10 md:py-20 ">
        <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-5 md:mb-14">Testimonials</h2>
        <div className="md:my-5 ">
        <Slider {...settings} className="overflow-hidden flex md:overflow-visible">
              {
                testimonals.map((item, index)=>{
                    return <Testimonal details={item} key={index}/>
                })
              }
        </Slider>
        </div>
    </div>
  )
}

export default Tesitmonals
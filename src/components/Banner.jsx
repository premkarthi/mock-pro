import bannerImage from '../assets/banner.png'

function Banner() {
  return (
    <section className="banner">
        <div className="container flex mx-auto py-5  items-center justify-between flex-col-reverse md:flex-row">
            <div className="md:w-1/2">
                <h2 className="text-2xl md:text-4xl mb-2 md:mb-5 font-bold md:leading-relaxed">Monetize your passion with us Today.</h2>
                <p className="mb-5 md:mb-10 leading-relaxed">Give your followers the easiest way to connect with you. Host 1:1 and group sessions, answer text queries, sell digital products and more</p>
                <div className="flex items-center">
                    <button className="btn btn-primary mr-5 sm:px-5 md:px-10 py-3 whitespace-nowrap">Start Interview Now</button>
                    <button className="btn btn-transparent sm:px-5 md:px-10 py-3 whitespace-nowrap">Watch Now</button>
                </div>
            </div>
            <div className="flex align-middle justify-center md:p-5">
                <img src={bannerImage} alt="mock-banner" />
            </div>
        </div>
    </section>
  )
}

export default Banner
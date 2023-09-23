import FooterLogo from '../assets/footer-logo.png'

function Footer() {
  return (
    <div className="bg-primary text-white">
        <div className="container mx-auto py-10">
            <div className="md:flex justify-between items-start mb-10 py-10">
                <img src={FooterLogo} alt="logo" className='object-contain mb-10 md:m-0' />
                <div className="flex self-end">
                    <ul className='mr-10'>
                        <li className='mb-5 font-light'>About</li>
                        <li className='mb-5 font-light'>Contact Us</li>
                        <li className='mb-5 font-light'>Terms of Service</li>
                        <li className='font-light'>Privacy</li>
                    </ul>
                    <ul>
                        <li className='mb-5 font-light'>Pricing</li>
                        <li className='mb-5 font-light'>Blog</li>
                        <li className='mb-5 font-light'>Privacy policy</li>
                        <li className='font-light'>Terms and Condition</li>
                    </ul>
                </div>
            </div>
            <div className="md:flex justify-between items-center">
                <div className="font-light">
                    <h3>Address</h3>
                    <p className='mb-5'>Somewhere in the Globe</p>
                    <p>© 2023 MockInterview</p>
                </div>
                <ul className='flex mt-5 md:mt-0'>
                    <li className='mr-4 text-2xl'>😄</li>
                    <li className='mr-4 text-2xl'>🥹</li>
                    <li className='text-2xl'>😃</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer
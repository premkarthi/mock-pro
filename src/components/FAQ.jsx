/* eslint-disable react/prop-types */
import { useState } from 'react';

function FAQ({ data }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div>
      {data.map((item, index) => (
        <div key={index} className="">
          <div
            className={`question border-b  font-medium py-5 cursor-pointer flex items-center justify-between ${openIndex === index ? 'open' : ''}`}
            onClick={() => toggleOpen(index)}
          >
            <span className='capitalize'>{item.question}?</span>
            <span>

            {
                openIndex == index ? 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                </svg>
                :
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>

            }
           
            </span>
          </div>
          {openIndex === index && (
            <div className="p-5 bg-lightBg ">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
}


export default  FAQ
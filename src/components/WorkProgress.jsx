import { useState } from "react"

function WorkProgress() {
    const [steps] = useState([
        {
            stepNumber: '01',
            title: 'Steps 1',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos nobis molestias at cum, repudiandae perferendis fugiat molestiae architecto quasi nostrum iste itaque alias, animi veniam dignissimos quis, laborum optio cupiditate.'
        },
        {
            stepNumber: '02',
            title: 'Steps 2',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos nobis molestias at cum, repudiandae perferendis fugiat molestiae architecto quasi nostrum iste itaque alias, animi veniam dignissimos quis, laborum optio cupiditate.'
        },
        {
            stepNumber: '03',
            title: 'Steps 3',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos nobis molestias at cum, repudiandae perferendis fugiat molestiae architecto quasi nostrum iste itaque alias, animi veniam dignissimos quis, laborum optio cupiditate.'
        },
        {
            stepNumber: '04',
            title: 'Steps 4',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos nobis molestias at cum, repudiandae perferendis fugiat molestiae architecto quasi nostrum iste itaque alias, animi veniam dignissimos quis, laborum optio cupiditate.'
        },
        {
            stepNumber: '05',
            title: 'Steps 5',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos nobis molestias at cum, repudiandae perferendis fugiat molestiae architecto quasi nostrum iste itaque alias, animi veniam dignissimos quis, laborum optio cupiditate.'
        },
    ])

  return (
    <div className="container mx-auto py-10 md:py-20 ">
        <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-10 md:mb-20">How does an Mockinview work?</h2>
        <ul className="md:w-10/12">
        {  
            steps.map((step, index)=>{
                return <li className={index !== steps.length - 1 ? 'flex mb-5 md:mb-14': 'flex'} key={index}>
                        <div className={index !== steps.length - 1 ? "after:content-[''] after:w-0.5 after:top-13 after:h-full after:bg-primary after:block after:absolute after:left-0 after:right-0 after:m-auto  relative mr-5 md:mr-10" : " relative mr-5 md:mr-10 "} >
                            <span className="border text-primary text-xl md:text-4xl rounded-full w-14 h-14 md:w-20 md:h-20 flex items-center justify-center  md:pt-1 bg-white z-10 relative">{step.stepNumber}</span>
                        </div>
                        <div className="details">
                            <h1 className="text-2xl font-medium mb-3">{step.title}</h1>
                            <p>{step.description}</p>
                        </div>
                    </li>
            })
        }
      
        </ul>
    </div>
  )
}

export default WorkProgress
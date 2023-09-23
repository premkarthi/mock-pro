/* eslint-disable react/no-unescaped-entities */

import { useState } from "react"
import FAQ from "./FAQ"

function FrequentlyAskQues() {
    const [questions] = useState(
        [
            {
                question: "nonummy ipsum non arcu. Vivamus sit amet risus. Donec egestas.",
                answer: "vulputate eu, odio. Phasellus at augue id ante dictum cursus. Nunc mauris elit, dictum eu, eleifend nec, malesuada ut, sem. Nulla"
            },
            {
                question: "metus urna convallis erat, eget tincidunt dui augue eu tellus.",
                answer: "pellentesque a, facilisis non, bibendum sed, est. Nunc laoreet lectus quis massa. Mauris vestibulum, neque sed dictum eleifend, nunc risus varius orci,"
            },
            {
                question: "nunc risus varius orci, in consequat enim diam vel arcu.",
                answer: "et malesuada fames ac turpis egestas. Fusce aliquet magna a neque. Nullam ut nisi a odio semper cursus. Integer mollis. Integer tincidunt aliquam arcu."
            },
            {
                question: "penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin",
                answer: "vel turpis. Aliquam adipiscing lobortis risus. In mi pede, nonummy ut, molestie in, tempus eu, ligula. Aenean euismod mauris eu"
            },
            {
                question: "Sed congue, elit sed consequat auctor, nunc nulla vulputate dui,",
                answer: "Nullam enim. Sed nulla ante, iaculis nec, eleifend non, dapibus rutrum, justo. Praesent luctus. Curabitur egestas nunc sed"
            },
            {
                question: "nunc risus varius orci, in consequat enim diam vel arcu.",
                answer: "et malesuada fames ac turpis egestas. Fusce aliquet magna a neque. Nullam ut nisi a odio semper cursus. Integer mollis. Integer tincidunt aliquam arcu."
            },
            {
                question: "penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin",
                answer: "vel turpis. Aliquam adipiscing lobortis risus. In mi pede, nonummy ut, molestie in, tempus eu, ligula. Aenean euismod mauris eu"
            },
            {
                question: "nunc risus varius orci, in consequat enim diam vel arcu.",
                answer: "et malesuada fames ac turpis egestas. Fusce aliquet magna a neque. Nullam ut nisi a odio semper cursus. Integer mollis. Integer tincidunt aliquam arcu."
            },
            {
                question: "penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin",
                answer: "vel turpis. Aliquam adipiscing lobortis risus. In mi pede, nonummy ut, molestie in, tempus eu, ligula. Aenean euismod mauris eu"
            },
        ]
    )
  return (
    <div className="container mx-auto py-10 md:py-20 md:flex">
        <div className="md:w-1/3">
            <h2 className="text-2xl md:text-3xl font-semibold  mb-5">Frequently asked
    questions</h2>
            <p>Can't find the answer you are looking for?</p>
            <span className="text-secondary font-semibold cursor-pointer">Reach out to us</span>
        </div>
        <div className="md:w-8/12">
            <FAQ data={questions} />
        </div>
    </div>
  )
}

export default FrequentlyAskQues
import React from 'react'
import "./DestinationStyle.css"
import DestinationData from './DestinationData'
import img1 from "../assets/andre-frueh-UBA_W3_LsOk-unsplash.jpg"
import img2 from "../assets/joe-chen-X0M9VccWXrc-unsplash.jpg"
import img3 from "../assets/mick-haupt-pg8k1mZPMRg-unsplash.jpg"
import img4 from "../assets/spencer-davis-ckotRXopwRM-unsplash.jpg"

function Destination() {
    return (
        <div className='destination'>
            <h1>Popular Destinations</h1>
            <p className='sub-head'>Tours give you the opportunity to see a lot, within a time frame</p>

            <DestinationData

cName="first-des"
                title="Destination Title"
                text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae nobis
                                   expedita temporibus laboriosam enim ab officiis at error molestias facere
                                   numquam voluptatibus, corrupti quasi quo, alias mollitia laborum, in architecto!
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa provident, 
                                    libero officiis ducimus laborum amet molestiae fuga labore, illum, cupiditate 
                                    ipsa. Mollitia sint molestias praesentium perferendis? Ad ratione id laudantium?"

                img1={img1}
                img2={img2}

            />


 <DestinationData
cName="first-des-rev"
                title="Destination Title"
                text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae nobis
                                   expedita temporibus laboriosam enim ab officiis at error molestias facere
                                   numquam voluptatibus, corrupti quasi quo, alias mollitia laborum, in architecto!
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa provident, 
                                    libero officiis ducimus laborum amet molestiae fuga labore, illum, cupiditate 
                                    ipsa. Mollitia sint molestias praesentium perferendis? Ad ratione id laudantium?"

                img1={img3}
                img2={img4}

            />


        </div>
    )
}

export default Destination
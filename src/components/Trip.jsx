import TripData from "./TripData"
import "./TripStyle.css"
import img1 from "../assets/shashank-verma-6euav6BvsH4-unsplash.jpg";
import img2 from "../assets/jovyn-chamb-iWMfiInivp4-unsplash.jpg";
import img3 from "../assets/alexander-popovkin-PdqZ-APGOFQ-unsplash.jpg";

import React from 'react'

function Trip() {
  return (
    <div className="trip">
        <h1>Recent Trips</h1>
        <p className="sub-head">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
             Eligendi recusandae exercitationem perferendis, ratione
             psam est!</p>

              <div className="tripcard">
                <TripData 
                image={img1}
                heading="Eiffel Tower"
                text="perspiciatis commodi ipsum repudiandae distinctio ab 
              inventore mollitia ea architecto nulla similique doloribus quasi ut, ipsaperspiciatis commodi ipsum repudiandae distinctio ab 
              inventore mollitia ea architecto nulla similique doloribus quasi ut, ipsa"
                
                />

                 <TripData 
                image={img2}
                heading="Taj Mahal"
                text="perspiciatis commodi ipsum repudiandae distinctio ab 
              inventore mollitia ea architecto nulla similique doloribus quasi ut, ipsaperspiciatis commodi ipsum repudiandae distinctio ab 
              inventore mollitia ea architecto nulla similique doloribus quasi ut, ipsa"
                
                />
              

               <TripData 
                image={img3}
                heading="Giza"
                text="perspiciatis commodi ipsum repudiandae distinctio ab 
              inventore mollitia ea architecto nulla similique doloribus quasi ut, ipsaperspiciatis commodi ipsum repudiandae distinctio ab 
              inventore mollitia ea architecto nulla similique doloribus quasi ut, ipsa"
                
                />
              
              </div>
    </div>
  )
}

export default Trip
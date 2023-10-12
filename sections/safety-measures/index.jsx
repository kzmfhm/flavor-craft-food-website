import React from 'react'
import './style.css'
const SafetyMeasures = () => {
  return (
   
        <div class="safety-measures-div">
        <p class="safety-measures-para">
          While we have always followed hygiene regime at Flavor Craft, we have taken
          <br />
          a few specific measures at these times.
        </p>
        <div class=" safety-measures">
          <div class="col-sm-3 col-6">
            <img
              src="./svg/mask.svg"
              alt="Our Kitchen executives have been instructed to wear masks at all times."
            />
            <p>
              Our Kitchen executives have been instructed to wear masks at all
              times.
            </p>
          </div>

          <div class="col-sm-3 col-6">
            <img
              src="./svg/thermo.svg"
              alt="A daily log of our executives’ body temperatures is being maintained."
            />
            <p>
              A daily log of our executives’ body temperatures is being <br />
              maintained.
            </p>
          </div>

          <div class="col-sm-3 col-6">
            <img
              src="./svg/sanitizer.svg"
              alt="Every kitchen executive sanitizes his/her hands every hour."
            />
            <p>
              Every kitchen executive sanitizes his/her hands every hour.
              <br /><br />
            </p>
          </div>

          <div class="col-sm-3 col-6">
            <img
              src="./svg/clean.svg"
              alt="Every kitchen surface is rigorously cleaned to ensure a clean and sanitized workstation."
            />
            <p>
              Every kitchen surface is rigorously cleaned to ensure a clean and
              sanitized workstation.
            </p>
          </div>
        </div>
      </div>
   
  )
}

export default SafetyMeasures
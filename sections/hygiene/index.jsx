import React from 'react'
import './style.css'
import SafetyMeasures from '../safety-measures'
import ScrollUp from '../../components/Buttons/ScrollUp'
const Hygiene = () => {
  return (
 
        <section id="healthySection">
      <h1 class="hygiene-title">
        <span><b>HYGIENE</b></span>
      </h1>
      <div class="eatSure container">
        <div class="row">
          <div class="col-sm-2 col-12">
            <img
              src="https://assets.faasos.io/ovenstory-react.in/production/eat-sure-mobile.png"
              alt="eat-sure logo"
            />
          </div>

          <div class="col-sm-2 col-6 borderLeft">
            <div class="icon-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Capa_1"
                enable-background="new 0 0 515.556 515.556"
                height="512px"
                viewBox="0 0 515.556 515.556"
                width="512px"
              >
                <g>
                  <path
                    d="m0 274.226 176.549 176.886 339.007-338.672-48.67-47.997-290.337 290-128.553-128.552z"
                    data-original="#000000"
                    class="active-path"
                    data-old_color="#000000"
                    fill="#FFFFFF"
                  ></path>
                </g>
              </svg>
            </div>
            <div class="text">Medically Certified Kitchen Staff</div>
          </div>

          <div class="col-sm-2 col-6 borderLeft">
            <div class="icon-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Capa_1"
                enable-background="new 0 0 515.556 515.556"
                height="512px"
                viewBox="0 0 515.556 515.556"
                width="512px"
              >
                <g>
                  <path
                    d="m0 274.226 176.549 176.886 339.007-338.672-48.67-47.997-290.337 290-128.553-128.552z"
                    data-original="#000000"
                    class="active-path"
                    data-old_color="#000000"
                    fill="#FFFFFF"
                  ></path>
                </g>
              </svg>
            </div>
            <div class="text">200+ Stringent Quality Checks</div>
          </div>

          <div class="col-sm-2 col-6 borderLeft">
            <div class="icon-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Capa_1"
                enable-background="new 0 0 515.556 515.556"
                height="512px"
                viewBox="0 0 515.556 515.556"
                width="512px"
              >
                <g>
                  <path
                    d="m0 274.226 176.549 176.886 339.007-338.672-48.67-47.997-290.337 290-128.553-128.552z"
                    data-original="#000000"
                    class="active-path"
                    data-old_color="#000000"
                    fill="#FFFFFF"
                  ></path>
                </g>
              </svg>
            </div>
            <div class="text">No Artificial Colours or Flavours</div>
          </div>

          <div class="col-sm-2 col-6 borderLeft">
            <div class="icon-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Capa_1"
                enable-background="new 0 0 515.556 515.556"
                height="512px"
                viewBox="0 0 515.556 515.556"
                width="512px"
              >
                <g>
                  <path
                    d="m0 274.226 176.549 176.886 339.007-338.672-48.67-47.997-290.337 290-128.553-128.552z"
                    data-original="#000000"
                    class="active-path"
                    data-old_color="#000000"
                    fill="#FFFFFF"
                  ></path>
                </g>
              </svg>
            </div>
            <div class="text">Double Sealed Packaging <br /><br /></div>
          </div>

          <div class="col-sm-2 col-12 borderLeft">
            <a
              href="/"
              target="_blank"
              class="btn know-more-btn"
              >Know More</a
            >
          </div>
        </div>
      </div>

    <SafetyMeasures/>
    <ScrollUp/>
    </section>


 
  )
}

export default Hygiene;
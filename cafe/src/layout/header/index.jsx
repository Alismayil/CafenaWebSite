import React from "react";
import "./header.scss";
import { FaPlay } from "react-icons/fa";
const Header = () => {
  return (
    <div>
      <section>
        <div className="headerHeroArea">
          <div className="heroAreaContent">
            {/* <img
              src="https://xpressrow.com/html/cafena/cafena/assets/images/shape/hero-shape-2-1.png"
              alt=""
            /> */}
            <h1>
              Distinct <br /> coffee aroma
            </h1>
            <p>
              The coffee is brewed by first roasting the green coffee beans over{" "}
              <br />
              hot coals in a brazier. given an opportunity to sample.
            </p>
            <div className="heroAreaBtn">
              <a href="" className="sitebtn1">
                <p> TESTY COFFEE</p>
                <div> </div>
              </a>
              <a href="" className="sitebtn2">
                <p> READ MORE</p>
                <div> </div>
              </a>
            </div>
          </div>
          <div className="heroAreoImage">
            <div className="image">
            <img
              src="https://xpressrow.com/html/cafena/cafena/assets/images/hero/hero-img-2-1.png"
              alt=""
            />
            </div>
            <div className="main_num">
              <div className="playVideo">
                <FaPlay  className="FaPlay"/>
              </div>
              <a className="borderEffect">PLAY VIDEO</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;

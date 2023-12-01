

// export default Header;
import React, { useState } from "react";
import "./header.scss";
import { FaPlay } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";

const Header = () => {
  const [isvideoopen, setisvideoopen] = useState(false);

  const handleVideoOpen = () => {
    setisvideoopen(!isvideoopen);
  };

  return (
    <>
      <div>
        <section id="Header">
          <div className="notMeanHeader"></div>
          <div className="headerHeroArea">
            <div className="heroAreaContent">
              <h1>
                Distinct <br /> coffee aroma
              </h1>
              <p className="coffeText">
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
              <div className='main_num'>
                <div className="playVideo" onClick={handleVideoOpen}>
                  <FaPlay className="FaPlay" />
                </div>
                <a className="borderEffect">PLAY VIDEO</a>
              </div>
            </div>
          </div>
        </section>
      </div>
      {isvideoopen && (
        <div className={`playVideoOpening ${isvideoopen ? 'playVideoOpening_active' : ''}`}>
          <button onClick={handleVideoOpen}><IoCloseOutline /></button>
          <iframe
            width="800"
            height="500"
            src="https://www.youtube.com/embed/4xe72U7mXNg"
            title="CGI Animated Short Film HD &quot;A Fox Tale &quot; by A Fox Tale Team | CGMeetup"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      )}
    </>
  );
};

export default Header;

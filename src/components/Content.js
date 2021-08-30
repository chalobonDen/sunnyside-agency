import React from 'react';

const Content = () => {
  return (
    <div>
      <div className="content">
        <div className="detail">
          <b>Transform your brand</b>
          <p>
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <span className="learnmore-yellow">Learn more</span>
        </div>
        <div className="image-transform"></div>
      </div>

      <div className="content">
        <div className="image-stand-out"></div>
        <div className="detail">
          <b>Stand out to the right audience</b>
          <p>
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.
          </p>
          <span class="learnmore-pink">Learn more</span>
        </div>
      </div>

      <div className="content">
        {/* <div className="detail">
          <b>Transform your brand</b>
          <p>
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <span className="learnmore-yellow">Learn more</span>
        </div> */}
        <div className="image-graphic-design">
          <div className="text-img">
            <b>Graphic design</b>
            <p>
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential clients’
              attention.
            </p>
          </div>
        </div>
        <div className="image-photography">
          <div className="text-img">
            <b>Photography</b>
            <p>
              Increase your credibility by getting the most stunning,
              high-quality photos that improve your business image.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;

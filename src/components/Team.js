import React from 'react';
import emily from '../images/image-emily.jpg';
import thomas from '../images/image-thomas.jpg';
import jennie from '../images/image-jennie.jpg';

const Team = () => {
  return (
    <div className="main-team">
      <div className="title">
        <p>Client testimonials</p>
      </div>
      <section className="content-team">
        <div className="member">
          <img src={emily} alt="" />
          <p>
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit.
          </p>
          <b>Emily R.</b>
          <div>Marketing Director</div>
        </div>

        <div className="member">
          <img src={thomas} alt="" />
          <p>
            Sunnyside’s enthusiasm coupled with their keen interest in our
            brand’s success made it a satisfying and enjoyable experience.
          </p>
          <b>Thomas S.</b>
          <div>Chief Operating Officer</div>
        </div>

        <div className="member">
          <img src={jennie} alt="" />
          <p>
            Incredible end result! Our sales increased over 400% when we worked
            with Sunnyside. Highly recommended!
          </p>
          <b>Jennie F.</b>
          <div>Business Owner</div>
        </div>
      </section>
    </div>
  );
};

export default Team;

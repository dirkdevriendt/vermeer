import React from 'react';
import classes from './About.css';

const about = ( props ) => {
  return (
    <div className={classes.About}>            
      <h2>About Bagela Belgium Luxemburg</h2>
      <p>We are a full-service equipment dealer specializing in selling and servicing equipment manufactured by Bagela.</p>
      <p>Bagela Belgium Luxemburg has the exclusive rights to distribute Bagela equipment in Belgium and Luxemburg.</p>
      <p>You can count on our dedication to you in everything we do. That spirit comes out loud and clear through our industry-leading equipment and our constant drive to back it up with quality parts, reliable service, superior support and our extensive industry experience and expertise.</p>
      <h3>Outstanding Customer Service</h3>
      <p>Every service technician, parts specialist and salesperson understands the value of, and is committed to, delivering world-class customer service before, during and after the sale. We will not be satisfied until you are. </p>
      <p>In addition to the Bagela brand, we are also dealer for a variety of other premium brands, such as Vermeer, DigiTrak (HDD locating equipment), Kennametal (teeth and tooling options), McLaughlin (vacuum excavators, auger and cradle boring), SiteTec, radiodetection, Baroid and Amcol (drilling fluids).</p>
    </div>
  );
};

export default about;
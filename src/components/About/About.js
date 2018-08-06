import React from 'react';
import classes from './About.css';

const about = ( props ) => {
    return (
        <div className={classes.About}>            
           <h2>Vermeer</h2>
           <p>Vermeer is the authorized distributor for Bagela for Belgium but also sells other products.</p>
           <p>If you need to get any cable laying work done, you will soon find our machines, cables and trailers an absolute necessity.  Our friendly and knowledgeable staff will help you to get the best match for your specific needs, so do not hesitate to:</p>
           <ul>
               <li>Tell us about your next project</li>
               <li>Ask us about all available options</li>
               <li>Get the best price offer to realize your project</li>
            </ul>
            <p>We look forward to help you realize a quality project</p> 
        </div>
    );
};

export default about;
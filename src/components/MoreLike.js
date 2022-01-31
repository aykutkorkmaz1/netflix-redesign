import react from "react";
import './MoreLike.css'

import img1 from '../img/rcd1.jpeg';
import img2 from '../img/rcd2.jpeg';
import img3 from '../img/rcd3.jpeg';
import img4 from '../img/rcd4.jpeg';
import img5 from '../img/rcd5.jpeg';
import img6 from '../img/rcd6.jpeg';
import img7 from '../img/rcd7.jpeg';
import img8 from '../img/rcd8.jpeg';

export default function MoreLike () {
    return (
        <div className="morelikethis">
            <div className="header">More Like Accordingly This</div>
            <div className="section-grid">
                <img className="image" src={img1}></img>
                <img className="image" src={img2}></img>
                <img className="image" src={img3}></img>
                <img className="image" src={img4}></img>
                <img className="image" src={img5}></img>
                <img className="image" src={img6}></img>
                <img className="image" src={img7}></img>
                <img className="image" src={img8}></img>
            </div>
        </div>
    );
}
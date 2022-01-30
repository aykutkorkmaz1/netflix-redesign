import react from "react";

import ep1 from '../img/ep1.jpeg';
import ep2 from '../img/ep2.jpeg';
import ep3 from '../img/ep3.jpeg';

import '../components/Episode.css';

export default function Episode (props) {
    return (
        <div className='episode'>
              <img src={props.ep}></img>
              <div className='ep-duration'>
                <span className='ep-no'>{props.ep_no}</span>
                <span className='duration'>{props.duration}</span>
              </div>
              <div className='ep-text'>
                <span className='ep-title'>{props.title}</span>
                <span className='ep-desc'>{props.desc}</span>
              </div>
        </div>
    );
}
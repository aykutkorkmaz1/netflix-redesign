import react from "react";
import '../components/Video.css';

export default function Video (props) {
    return (
        <div className='video'>
              <img src={props.video}></img>
              <span>{props.vid_title}</span>
              <div className="play">Play</div>
        </div>
    );
}
import react from "react";
import './Footer.css';

import nlogo from '../img/nlogo.svg';

export default function Footer () {
    return (
        <div className="footer">
            <div className="section-1">
                <span><img src={nlogo}></img></span>
                <span className="text call">Questions? Call +1 (866) 579-7172</span>
                <span className="text country">Netflix United States</span>
            </div>
            <div className="section-2">
                <div>
                    <span className="text">FAQ</span>
                    <span className="text">Investor Relations</span>
                    <span className="text">Terms of Use</span>
                    <span className="text">Contact Us</span>
                </div>
                <div>
                    <span className="text">Help Center</span>
                    <span className="text">Jobs</span>
                    <span className="text">Privacy</span>
                    <span className="text">Speed Test</span>
                </div>
                <div>
                    <span className="text">Account</span>
                    <span className="text">Reedeem Gift Cards</span>
                    <span className="text">Cookie Preferences</span>
                    <span className="text">Legal Notices</span>
                </div>
                <div>
                    <span className="text">Media Center</span>
                    <span className="text">Ways to Watch</span>
                    <span className="text">Corporate Information</span>
                    <span className="text">Only on Netflix</span>
                </div>
            </div>
        </div>
    );
}
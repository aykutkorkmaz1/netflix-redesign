import './App.css';

import logo from '../src/img/nlogo.svg';
import media_logo from '../src/img/logo.png';
import trailer from '../src/img/trailer.jpeg';
import teaser from '../src/img/teaser.jpeg';
import ep1 from '../src/img/ep1.jpeg';
import ep2 from '../src/img/ep2.jpeg';
import ep3 from '../src/img/ep3.jpeg';


import Video from './components/Video.js';
import Episode from './components/Episode.js';
import MoreLike from './components/MoreLike';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      
      <div className='navbar'>
        <div><img className='logo-navbar' src={logo}/></div>
        <div className='navigation'>
          <span className='buttons'>Watch List</span>
          <span className='buttons'>Serie</span>
          <span className='buttons'>Movie</span>
          <span className='buttons'>Documentary</span>
          <span className='buttons'>Netflix Awards</span>
        </div>
      </div>

      <div className='showcase'>
        <div className='media-main'>

              <div><img className='media-logo' src={media_logo}/></div>
              <div className='tags-area'>
                <div className='tag'>2022</div>
                <div className='tag'>16+</div>
                <div className='tag'>1 Season</div>
                <div className='tag'>Biographical Documentary</div>
              </div>
              <div className='info'>
                <span className='media-name'>Neymar: The Perfect Chaos</span>
                <span className='media-desc'>
                  Beloved worldwide but also a lightning rod for criticism, Neymar
                  shares the highs and loves of his personal life and brilliant football
                  carreer.
                </span>
                <div className='cast'>Starring: <span>Neymar Jr.</span> </div>
              </div>
              <div className='media-button-group'>
                <div className='button-media'> <span>Play</span> </div>
                <div className='button-media'> <span>Watch Trailer</span> </div>
              </div>
            </div>

        </div>

      <div className='videos'>
        <div className='header'>Videos</div>
        <div className='sub-header'>Neymar: The Perfect Chaos</div>
          <div className='vid-area'>
            <Video video={trailer} vid_title='Trailer of Neymar: The Perfect Chaos' />
            <Video video={teaser} vid_title='Teaser of Neymar: The Perfect Chaos' />
          </div>

      </div>

      <div className='episodes'>
        <div className='header'>Episodes</div>
        <div className='sub-header'>Neymar: The Perfect Chaos</div>
          <div className='ep-area'>
            <div>
            <Episode
            ep={ep1} ep_no='S1 E1' duration='51m'
            title='The Great Brazilian Promise'
            desc='Neymar rises from humble beginnings to become a
            star with a carefully crafted image worldwide brand.
            Yet to criticism still follows him at every turn.'
            />
            </div>

            <div>
            <Episode
            ep={ep2} ep_no='S1 E2' duration='61m'
            title='The Comeback'
            desc="Neymar's career and celebrity soar in Barcelona,
            but a move to Paris. World Cup pressure and a
            shocking allegation fuel further scrunity on the
            player."
            />
            </div>

            <Episode
            ep={ep3} ep_no='S1 E3' duration='53m'
            title='This is Paris'
            desc='As tensions rise with PSG, Neymar takes a step
            back to rediscover his love for the game and to make
            a difference in many lives back in his hometown.'
            />
          </div>
      </div>

      <MoreLike />
      <Footer />

    </div>
  );
}

export default App;

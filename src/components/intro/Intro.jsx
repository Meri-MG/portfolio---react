import './intro.scss';
import TypeWriterEffect from 'react-typewriter-effect';


export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="img bg"></div>
        <div className="img img_container">
          <img src="images/proPhoto.png" alt="my_photo" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Meri Gogichashvili</h1>
          <h3><span> <TypeWriterEffect
            textStyle={{ fontFamily: 'Red Hat Display' }}
            startDelay={100}
            cursorColor="crimson"
            multiText={[
              'Mentor',
              'Reviewer',
              'Web Developer',
            ]}
            multiTextDelay={1000}
            typeSpeed={100}
          />
            </span></h3>
        </div>
        <a href="#portfolio">
          <img src="images/down.png" alt="down_arrow" />
        </a>
      </div>
    </div>
  )
}

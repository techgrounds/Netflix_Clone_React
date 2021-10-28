import logo from "../../../Assets/images/netflix-logo.svg";
import { Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
// import FooterGuest from "../../Contents/FooterContents/FooterGuest";
import { FaGlobeAmericas } from "react-icons/fa";

export default function LandingPage() {
  // const [clicked, setClicked] = useState(null);
  // const toggle = i => {
  //     if (clicked === i) {
  //         return setClicked(null)
  //     }

  //     setClicked(i)
  // }

  const accordion = [
    {
      question: "Wat kan ik kijken op Netflix?",
      answer:
        "Netflix heeft een uitgebreide catalogus van speelfilms, documentaires, series, anime, bekroonde Netflix Originals en meer. Kijk zoveel je wilt en wanneer je wilt.",
      link: "",
    },
    {
      question: "Wat is Netflix?",
      answer:
        "Netflix is een streamingservice met een zeer groot aanbod van bekroonde series, films, anime, documentaires en nog veel meer op duizenden apparaten met een internetverbinding. Je kijkt zo veel je wilt, wanneer je wilt, zonder enige vorm van reclame. En dit allemaal voor één lage prijs per maand. Er valt altijd iets nieuws te ontdekken en elke week worden er nieuwe series en films toegevoegd!",
      link: "",
    },
  ];

  return (
    <div id="landing-page">
      <div>
        <header>
          <Navbar.Brand className="nav">
            <LinkContainer to="/LogInScreen">
              <img className="logo" src={logo} alt="Netflix Logo" />
            </LinkContainer>
            <div className="navBtn ml-auto">
              <button className="px-2 rounded">
                <FaGlobeAmericas /> English
              </button>
              <LinkContainer to="/LogInScreen">
                <button>Sign In</button>
              </LinkContainer>
            </div>
          </Navbar.Brand>
        </header>
        <h1>Unlimited films, TV programmes and more.</h1>
        <h4>Watch anywhere. Cancel at any time.</h4>
        <h5>
        Ready to watch? Enter your email to create or restart your membership.
        </h5>

        <form action="" method="post">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email address"
          />
          <button type="submit">Get Started &#62;</button>
        </form>
      </div>

      <div className="our-story-card">
        <div className="our-story-card-text">
          <h2 className="our-story-card-title">Enjoy on your TV.</h2>
          <p className="our-story-card-subtitle">
          Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.
          </p>
        </div>
        <div className="our-story-card-img-container">
          <div className="our-story-card-animation-container">
            <img
              className="our-story-card-img"
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
              alt="image of a flat screen tv"
            />
            <div className="our-story-card-animation">
              <video
                className="our-story-card-video"
                autoPlay
                playsInline
                muted
                loop
              >
                <source
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </div>

      <div className="our-story-card downloadAndWatch">
        <div className="our-story-card-img-container">
          <div className="our-story-card-animation-container">
            <img
              className="our-story-card-img"
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
              alt="Mobile device with Stranger Things television series on it"
            />
            <div className="our-story-card-animation">
              <div className="our-story-card-animation-image">
                <img
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
                  alt="Poster of Stranger Things, television series"
                />
              </div>

              <div className="our-story-card-animation-text">
                <div className="text-0">Stranger Things</div>
                <div className="text-1">Downloading...</div>
              </div>
            </div>
          </div>
        </div>
        <div className="our-story-card-text">
          <h2 className="our-story-card-title">
          Download your programmes to watch offline.
          </h2>
          <p className="our-story-card-subtitle">
          Save your favourites easily and always have something to watch.
          </p>
        </div>
      </div>

      <div className="our-story-card">
        <div className="our-story-card-text">
          <h2 className="our-story-card-title">Watch everywhere.</h2>
          <p className="our-story-card-subtitle">
          Stream unlimited films and TV programmes on your phone, tablet, laptop and TV without paying more.
          </p>
        </div>
        <div className="our-story-card-img-container">
          <div className="our-story-card-animation-container">
            <img
              className="our-story-card-img"
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
              alt="Netflix on a cell phone, a tablet and a desktop"
            />
            <div className="our-story-card-animation animationPlace">
              <video
                className="our-story-card-video positionChange"
                autoPlay
                playsInline
                muted
                loop
              >
                <source
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </div>

      <div className="our-story-card">
        <div className="our-story-card-img-container">
          <img
            className="our-story-card-img"
            src="https://occ-0-769-768.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABfHU6rUGPM-0fCFyBI9QmkWq2Gde4IN73Rd3fPa5OZwCMTevvHHH4I1cJcvKPU2xBsGT4NSOMRpRA9L4IVQrGZHaCPFo.png?r=bb1"
            alt="colorful 3D figures for children"
          />
        </div>
        <div className="our-story-card-text">
          <h2 className="our-story-card-title">Create profiles for children.</h2>
          <p className="our-story-card-subtitle">
          Send children on adventures with their favourite characters in a space made just for them – free with your membership.
          </p>
        </div>
      </div>

      <div className="our-story-card">
        <div className="our-story-card-text">
          <h2 className="our-story-card-title">Frequently Asked Questions</h2>
          <ul className="faq-list">
            <li className="faq-list-item">
              <button className="faq-question">
                What can I watch on Netflix?
              </button>
            </li>
          </ul>
          {/* Accordion */}
          {/* <div className="accordion-title" onClick={() => toggle(i)} /> */}
          {/* <div className={clicked === i ? "accordion-content open" : "accordion-content"} /> */}
          {/* Accordion */}
          <p>
          Ready to watch? Enter your email to create or restart your membership.
          </p>

          <form className="form" action="" method="post">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email address"
            />
            <button type="submit">Get Started &#62;</button>
          </form>
          {/* <FooterGuest /> */}
        </div>
      </div>
    </div>
  );
}

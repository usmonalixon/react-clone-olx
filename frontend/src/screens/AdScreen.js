import React from "react";
import { Link } from "react-router-dom";
import data from "../data";
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

function AdsScreen(props) {
  console.log(props.match.params.id);
  const ad = data.ads.find((x) => x._id === props.match.params.id);
  return (
    <div>
      <Fade cascade top>
        <Zoom>
        <div className="back-to-result">
          <Link to="/">Back to result</Link>
        </div>
        <div className="details">
          <div className="details-image">
            <img src={ad.image} alt="ad"></img>
          </div>
          <div className="details-info">
            <ul>
              <li>
                <h4>{ad.name}</h4>
              </li>
              <li>
                Narx: <b>${ad.price}</b>
              </li>
              <li>
                Ko'rinishi:
                <div>{ad.description}</div>
              </li>
              <li>Kategoriya: Elitniy {ad.sort}</li>
              <li>Maydoni: 120 m.kv</li>
              <li>Qavat: 40</li>
            </ul>
          </div>
          <div className="details-action">
            <ul>
              <li>Narx: {ad.price}</li>
              <li>Avtor: Usmonalixon</li>
              <li>Tel: 999999999</li>
            </ul>
          </div>
        </div>
        </Zoom>
      </Fade>
    </div>
  );
}
export default AdsScreen;

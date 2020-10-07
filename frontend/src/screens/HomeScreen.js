import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Fade from 'react-reveal/Fade';

function HomeScreen(props) {
  const [ads, setAd] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/api/ads");
      setAd(data);
    };
    fetchData();
    return () => {
      //
    };
  }, []);
  return (
    <Fade cascade bottom>
      <ul className="ads">
        {ads.map((ad) => (
          <li>
            <div className="ad">
              <Link to={"/ad/" + ad._id}>
                <img className="ad-image" src={ad.image} alt="ad" />
              </Link>
              <div className="ad-name">
                <Link to={"/ad/" + ad._id}>{ad.name}</Link>
              </div>
              <div className="ad-sort">{ad.sort}</div>
              <div className="ad-price">${ad.price}</div>
            </div>
          </li>
        ))}
      </ul>
    </Fade>
  );
}
export default HomeScreen;

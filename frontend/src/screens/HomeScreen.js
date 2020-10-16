import React, {  useEffect } from "react";
import { Link } from "react-router-dom";
import Zoom from 'react-reveal/Zoom';
import { useDispatch, useSelector } from "react-redux";
import { listAds } from "../actions/adActions";

function HomeScreen(props) {

  const adList = useSelector(state => state.adList);
  const {ads,loading,error} = adList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listAds())

    return () => {
      //
    };
  }, []);
  return loading ? <div>Loading...</div>:
  error? <div>{error}</div>:

      <ul className="ads">
        {ads.map((ad) => (
          <li key={ad._id}>
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
}
export default HomeScreen;

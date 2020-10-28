import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listAds } from "../actions/adActions";

function HomeScreen(props) {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [sortAd, setSortAd] = useState('');
  const category = props.match.params.id ? props.match.params.id : '';
  const adList = useSelector((state) => state.adList);
  const { ads, loading, error } = adList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listAds(category));

    return () => {
      //
    };
  }, [category]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(listAds(category, searchKeyword, sortAd));
  };
  const sortHandler = (e) => {
    setSortAd(e.target.value);
    dispatch(listAds(category, searchKeyword, sortAd));
  };
  return (
    <>
    <ul className="filter">
      <li className="search">
        <form onSubmit={submitHandler}>
          <input name="searchKeyword" onChange={(e) => setSearchKeyword(e.target.value)} />
          <button type="submit"><i className="fas fa-search"></i></button>
        </form>
      </li>
      <li className="sort-by">
        <span></span> {' '}
        <select name="sortAd" className="sort-by" onChange={sortHandler}>
          <option value="">Eng Yangilari</option>
          <option value="lowest">Eng Qimmatlari</option>
          <option value="highest">Eng Arzonlari</option>
        </select>
        <select className="sort-by region">
          <option>Mirzo Ulug'bek</option>
          <option>Sergeli</option>
          <option>Olmazor</option>
          <option>Chilonzor</option>
          <option>Bektemir</option>
          <option>Yashnobod</option>
          <option>Yakkasaroy</option>
          <option>Yunusobod</option>
          <option>Tashkent City</option>
        </select>
      </li>
    </ul>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
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
                <div className="ad-price">{ad.price + "  so'm"}</div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
export default HomeScreen;

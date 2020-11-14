import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listAds } from "../actions/adActions";
import { listAuto } from "../actions/adAutoActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

function HomeScreen(props) {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [sortAd, setSortAd] = useState("");
  const [searchKeyword2, setSearchKeyword2] = useState("");
  const [sortAuto, setSortAuto] = useState("");
  const category2 = props.match.params.id ? props.match.params.id : "";
  const category = props.match.params.id ? props.match.params.id : "";
  const adList = useSelector((state) => state.adList);
  const { ads, loading, error } = adList;
  const autoList = useSelector((state) => state.autoList);
  const { autos } = autoList;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listAds(category));
    dispatch(listAuto(category2));
    return () => {
      //
    };
  }, [category, category2, dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(listAds(category, searchKeyword, sortAd));
    dispatch(listAuto(category2, searchKeyword2, sortAuto));
  };
  const sortHandler = (e) => {
    setSortAd(e.target.value) || setSortAuto(e.target.value);
    dispatch(listAds(category, searchKeyword, sortAd));
    dispatch(listAuto(category2, searchKeyword2, sortAuto));
  };
  return (
    <>
      <ul className="filter">
        <li className="search">
          <form onSubmit={submitHandler}>
            <input
              name="searchKeyword searchKeyword2"
              onChange={(e) =>
                setSearchKeyword2(e.target.value) ||
                setSearchKeyword(e.target.value)
              }
            />
            <button type="submit">
              <i className="fas fa-search"></i>
            </button>
          </form>
        </li>
        <li className="sort-by">
          <span></span>{" "}
          <select
            name="sortAd sortAuto"
            className="sort-by"
            onChange={sortHandler}
          >
            <option selected value="">
              Eng Yangilari
            </option>
            <option value="lowest">Eng Qimmatlari</option>
            <option value="highest">Eng Arzonlari</option>
          </select>
          <select className="sort-by region">
            <option hidden>Rayonni tanlang</option>
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
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div>
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
            <ul className="autos">
              {autos.map((auto) => (
                <li key={auto._id}>
                  <div className="auto">
                    <Link to={"/auto/" + auto._id}>
                      <img className="ad-image" src={auto.image} alt="auto" />
                    </Link>

                    <div className="auto-name">
                      <Link to={"/auto/" + auto._id}>{auto.name}</Link>
                    </div>
                    <div className="auto-sort"> {auto.sort} </div>
                    <div className="auto-price"> {auto.price + " so'm"} </div>
                  </div>
                </li>
              ))}
            </ul>
          </ul>
        </div>
      )}
    </>
  );
}
export default HomeScreen;

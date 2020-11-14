import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listAds } from "../actions/adActions";

function AdsScreen(props) {
  const adDelete = useSelector((state) => state.adDelete);
  const { success: successDelete } = adDelete;

  const adSave = useSelector((state) => state.adSave);
  const { success: successSave } = adSave;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listAds());
    return () => {
      //
    };
  }, [successSave, successDelete, dispatch]);

  const showMenu = () => {
    document.querySelector(".select-dropdown").classList.toggle("show");
  };
  return (
    <div>
      <div className="select">
        <button onClick={showMenu} className="button primary">
          Bosing
        </button>
        <div
          style={{
            textAlign: "center",
            justifyContent: "center",
            listStyleType: "none",
            textDecoration: "none",
            listStyle: "none",
          }}
          className="select-dropdown"
        >
          <li>
            <a href="/ads/nedvizhimost">Ko'chmas mulk</a>
          </li>
          <li>
            <a href="/ads/auto">Avtomobil</a>
          </li>
        </div>
      </div>
    </div>
  );
}
export default AdsScreen;

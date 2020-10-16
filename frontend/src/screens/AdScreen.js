import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import { detailsAd } from "../actions/adActions";
import { useDispatch, useSelector } from "react-redux";

function AdScreen(props) {
  const adDetails = useSelector((state) => state.adDetails);
  const { ad, loading, error } = adDetails;
  const dispatch = useDispatch();
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  useEffect(() => {
    dispatch(detailsAd(props.match.params.id));
    return () => {
      //
    };
  }, []);
  return (
    <div>
      <Fade cascade top>
        <Zoom>
          <button className="button primary back">
            <Link to="/">
               <span className="back"><i class="fas fa-chevron-left"></i> Orqaga qaytish</span>
            </Link>
          </button>
          {loading ? (
            <div>Loading...</div>
          ) : error ? (
            <div>{error}</div>
          ) : (
            <div className="details">
              <div className="details-image">
                <img src={ad.image} alt="ad"></img>
              </div>
              <div className="details-info">
                <ul>
                  <li>
                    <h1>{ad.name}</h1>
                  </li>
                  <li>
                    <div className="button primary">
                      Narx: {ad.price}
                    </div>
                  </li>
                  <li>
                    <div className="button primary">Kategoriya: {ad.sort}</div>
                  </li>
                  <li>
                    <div className="button primary">
                      Xonalar soni: {ad.countRooms}
                    </div>
                  </li>
                  <li>
                    <div className="button primary">
                      Qavatlar soni: {ad.houseStorey}
                    </div>
                  </li>
                  <li>
                    <div className="button primary">
                      Quriish turi: {ad.buildingType}
                    </div>
                  </li>
                  <li>
                    <div className="button primary">Rejasi: {ad.plan}</div>
                  </li>
                  <li>
                    <div className="button primary">
                      Sanuzellar soni: {ad.sanuzel}
                    </div>
                  </li>
                  <li>
                    {ad.nearBy ? (
                      <div className="button primary">
                        Yaqinda joylashgan: {ad.nearBy}
                      </div>
                    ) : (
                      ""
                    )}
                  </li>
                  <li>
                    {ad.withFurniture ? (
                      <div className="button primary">
                        mebelli: {ad.withFurniture}
                      </div>
                    ) : (
                      ""
                    )}
                  </li>
                  <li>
                    {ad.roomHeight ? (
                      <div className="button primary">
                        Shiftning balandligi: {ad.roomHeight}
                      </div>
                    ) : (
                      ""
                    )}
                  </li>
                  <li>
                    {ad.builtAt ? (
                      <div className="button primary">
                        Qachon qurilgan / Qachon topshirilgan: {ad.builtAt}
                      </div>
                    ) : (
                      ""
                    )}
                  </li>
                  
                  <li>
                    <div className="button primary">Ta'miri: {ad.repairs}</div>
                  </li>
                  <li>
                    {ad.fee ? (
                      <div className="button primary">
                        Vositachilik haqqi: {ad.fee}
                      </div>
                    ) : (
                      ""
                    )}
                  </li>
                  <li>
                    <div className="button primary">
                      Sanuzellar soni: {ad.sanuzel}
                    </div>
                  </li>
                  <li>
                    <div className="button primary">
                      Maydoni: {ad.area} m.kv
                    </div>
                  </li>
                  <li>
                    <div className="button primary">Qavat: {ad.storey}</div>
                  </li>
                  <li>
                    <h3>Ko'rinishi:</h3>
                    <div className="details-description">{ad.description} </div>
                  </li>
                </ul>
              </div>
              <div className="details-action">
                <ul>
                  <li>Avtor: {ad.author}</li>
                  <li>Tel: {ad.phoneNumber}</li>
                  <li>Narx: {ad.price}</li>
                </ul>
              </div>
            </div>
          )}
        </Zoom>
      </Fade>
    </div>
  );
}
export default AdScreen;

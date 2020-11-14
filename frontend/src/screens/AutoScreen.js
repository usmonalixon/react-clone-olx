import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import { detailsAuto } from "../actions/adAutoActions";
import { useDispatch, useSelector } from "react-redux";

function AutoScreen(props) {
  const autoDetails = useSelector((state) => state.autoDetails);
  const { auto, loading, error } = autoDetails;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(detailsAuto(props.match.params.id));
    return () => {
      //
    };
  }, [dispatch, props.match.params.id]);
  return (
    <div>
      <Fade cascade top>
        <Zoom>
          <button className="button primary back">
            <Link className="back" to="/">
              <span className="back">
                <i className="fas fa-chevron-left"></i> Orqaga qaytish
              </span>
            </Link>
          </button>
          {loading ? (
            <div>Yuklanmoqda...</div>
          ) : error ? (
            <div>{error}</div>
          ) : (
            <div className="details">
              <div className="details-image">
                <img src={auto.image} alt="auto"></img>
              </div>
              <div className="details-info">
                <ul>
                  <li>
                    <h1>{auto.name}</h1>
                  </li>
                  <li>
                    <div className="button primary">
                      Kategoriya: {auto.sort}
                    </div>
                  </li>
                  <li>
                    <div className="button primary">Region {auto.region}</div>
                  </li>

                  <li>
                    <div className="button primary">Rangi: {auto.color}</div>
                  </li>

                  <li>
                    {auto.autoType ? (
                      <div className="button primary">
                        Turi: {auto.autoType}
                      </div>
                    ) : (
                      ""
                    )}
                  </li>
                  <li>
                    {auto.builtAt ? (
                      <div className="button primary">
                        Qachon qurilgan / Qachon topshirilgan: {auto.builtAt}
                      </div>
                    ) : (
                      ""
                    )}
                  </li>
                  <li>
                    <div className="button primary">
                      Ta'miri: {auto.repairs}
                    </div>
                  </li>
                  <li>
                    {auto.fee ? (
                      <div className="button primary">
                        Vositachilik haqqi: {auto.fee}
                      </div>
                    ) : (
                      ""
                    )}
                  </li>
                  <li>
                    <div className="button primary">Model: {auto.model}</div>
                  </li>
                  <li>
                    {auto.addOptions ? (
                      <div className="button primary">
                        Qo'shimcha optsiyalar: {auto.addOptions}
                      </div>
                    ) : (
                      ""
                    )}
                  </li>
                  <li>
                    <div className="button primary">Kuzov: {auto.kuzov}</div>
                  </li>
                  <li>
                    <h3>Tavsif:</h3>
                    <div className="details-description">
                      {auto.description}
                    </div>
                  </li>
                </ul>
              </div>
              <div className="details-action">
                <ul>
                  <li>Avtor: {auto.author}</li>
                  <li>Tel: {auto.phoneNumber}</li>
                  <li>Narx: {auto.price + "so'm"}</li>
                </ul>
              </div>
            </div>
          )}
        </Zoom>
      </Fade>
    </div>
  );
}
export default AutoScreen;

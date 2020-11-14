import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import { detailsAd } from "../actions/adActions";
import { useDispatch, useSelector } from "react-redux";
import $ from "jquery";

function AdScreen(props) {
  $(function () {
    $("#slideLeft").on("click", function () {
      // document.querySelector("#slider").scrollLeft -= 180;
      $("#slider").scrollLeft(-180);
    });
    $("#slideRight").on("click", function () {
      // document.querySelector("#slider").scrollLeft += 180;
      $("#slider").scrollLeft(+180);
    });
  });
  window.document.addEventListener("mouseover", function () {
    const thumbnails = document.getElementsByClassName("thumbnail");
    const activeImages = document.getElementsByClassName("active");
    for (let i = 0; i < thumbnails.length; i++) {
      thumbnails[i].addEventListener("mouseover", function () {
        if (activeImages.length > 0) {
          activeImages[0].classList.remove("active");
          this.classList.add("active");
          document.querySelector("#featured").src = this.src;
        }
      });
    }
  });

  const adDetails = useSelector((state) => state.adDetails);
  const { ad, loading, error } = adDetails;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(detailsAd(props.match.params.id));
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
                <img
                  id="featured"
                  className="image"
                  src={ad.image}
                  data-zoom={ad.image}
                  alt="ad"
                ></img>
              </div>
              <div id="slide-wrapper">
                <img
                  id="slideLeft"
                  className="arrow"
                  src="/images/arrow-left.png"
                ></img>
                <div id="slider">
                  <img className="thumbnail active" src={ad.image}></img>
                  <img
                    className="thumbnail"
                    src="/images/d4.jpg"
                    alt="ad"
                  ></img>
                  <img className="thumbnail" src="/images/d5.jpg"></img>
                  <img className="thumbnail" src="/images/d6.jpg"></img>
                  <img
                    className="thumbnail"
                    src="/images/d7.jpg"
                    alt="ad"
                  ></img>
                  <img className="thumbnail" src="/images/d8.jpg"></img>
                  <img className="thumbnail" src="/images/d9.jpg"></img>
                </div>
                <img
                  id="slideRight"
                  className="arrow"
                  src="/images/arrow-right.png"
                ></img>
              </div>

              <div className="details-info">
                <ul>
                  <li>
                    <h1>{ad.name}</h1>
                  </li>
                  <li>
                    <div className="button primary">Kategoriya: {ad.sort}</div>
                  </li>
                  <li>
                    <div className="button primary">Region {ad.region}</div>
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
                      Qurilish turi: {ad.buildingType}
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
                        Mebel: {ad.withFurniture}
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
                      Maydoni: {ad.area + "m.kv"}
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
                  <li>Narx: {ad.price + "so'm"}</li>
                </ul>
              </div>
            </div>
          )}
        </Zoom>
      </Fade>{" "}
    </div>
  );
}

export default AdScreen;

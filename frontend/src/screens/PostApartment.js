import React, { useEffect, useState } from "react";
import Bounce from "react-reveal/Bounce";
import { useDispatch, useSelector } from "react-redux";
import { deleteAd, listAds, saveAd } from "../actions/adActions";
import { showMessage } from "../util";
import $ from "jquery";

function PostApartment(props) {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [image4, setImage4] = useState("");
  const [image5, setImage5] = useState("");
  const [image6, setImage6] = useState("");
  const [image7, setImage7] = useState("");
  const [image8, setImage8] = useState("");
  const [houseStorey, setHouseStorey] = useState("");
  const [countRooms, setCountRooms] = useState("");
  const [sanuzel, setSanuzel] = useState("");
  const [builtAt, setBuiltAt] = useState("");
  const [plan, setPlan] = useState("");
  const [withFurniture, setWithFurniture] = useState("");
  const [repairs, setRepairs] = useState("");
  const [nearBy, setNearBy] = useState("");
  const [area, setArea] = useState("");
  const [fee, setFee] = useState("");
  const [buildingType, setBuildingType] = useState("");
  const [roomHeight, setRoomHeight] = useState("");
  const [sort, setSort] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [liveArea, setLiveArea] = useState("");
  const [category, setCategory] = useState("");
  const [storey, setStorey] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [region, setRegion] = useState("");

  const adDelete = useSelector((state) => state.adDelete);
  const { success: successDelete } = adDelete;

  const adSave = useSelector((state) => state.adSave);
  const {
    loading: loadingSave,
    success: successSave,
    error: errorSave,
  } = adSave;

  const dispatch = useDispatch();

  useEffect(() => {
    if (successSave) {
      alert("E'lon muvaffaqiyatli yaratildi.");
    } else if (successDelete) {
      alert("e'lon muvaffaqiyatli o'chirildi");
    }
    dispatch(listAds());
    return () => {
      //
    };
  }, [successDelete, successSave, dispatch]);

  // const openModal = (ad) => {
  //   setModalVisible(true);
  //   setId(ad._id);
  //   setName(ad.name);
  //   setImage(ad.image);
  //   setRegion(ad.region);
  //   setSort(ad.sort);
  //   setSanuzel(ad.sanuzel);
  //   setHouseStorey(ad.houseStorey);
  //   setBuiltAt(ad.builtAt);
  //   setPlan(ad.plan);
  //   setWithFurniture(ad.withFurniture);
  //   setRepairs(ad.repairs);
  //   setNearBy(ad.nearBy);
  //   setLiveArea(ad.liveArea);
  //   setRank(ad.rank);
  //   setArea(ad.area);
  //   setFee(ad.fee);
  //   setBuildingType(ad.buildingType);
  //   setRoomHeight(ad.roomHeight);
  //   setCategory(ad.category);
  //   setStorey(ad.storey);
  //   setAuthor(ad.author);
  //   setCountRooms(ad.countRooms);
  //   setPrice(ad.price);
  //   setPhoneNumber(ad.phoneNumber);
  //   setSort(ad.sort);
  //   setDescription(ad.description);
  // };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveAd({
        _id: id,
        name,
        image,
        image2,
        image3,
        image4,
        image5,
        image6,
        image7,
        image8,
        sort,
        countRooms,
        sanuzel,
        houseStorey,
        builtAt,
        plan,
        withFurniture,
        repairs,
        liveArea,
        nearBy,
        area,
        fee,
        buildingType,
        roomHeight,
        phoneNumber,
        category,
        storey,
        author,
        description,
        price,
        region,
      })
    );
  };
  const deleteHandler = (ad) => {
    dispatch(deleteAd(ad._id));
  };
  $(function () {
    // var form = $("#form");
    // var auto = $("#automobile");
    // if (form.attr("value") === "ko'chmasmulk") {
    //   $("")
    // }
    $("#form").on("click", function () {
      $(this).attr("className", "ko'chmasmulk");
    });
  });
  return (
    <Bounce right cascade>
      <div className="content content-margined">
        <div className="ad-header"></div>
        <div className="form">
          <form onSubmit={submitHandler}>
            <ul className="form-container">
              <li>
                <h2>E'lon berish</h2>
              </li>
              <li>
                {loadingSave && <div>Yuklanmoqda...</div>}
                {errorSave &&
                  showMessage("Siz birinchi tizimga kirishingiz kerak") &&
                  document.location.hash("/signin")}
              </li>{" "}
              <li>
                <label htmlFor="test">Tanlang</label>
                <select type="text" name="test" id="test">
                  <option></option>
                  <option id="form" value="ko'chmasmulk">
                    Ko'chmas mulk
                  </option>
                  <option id="automobile" value="auto">
                    Avtomobil
                  </option>
                </select>
              </li>
              <div>
                <li>
                  <label htmlFor="name">
                    Ism <i className="fa fa-asterisk color"></i>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  ></input>
                </li>
                <li>
                  <label htmlFor="image">
                    Rasm <i className="fa fa-asterisk color"></i>
                  </label>
                  <input
                    value={image}
                    type="text"
                    name="image"
                    id="image"
                    onChange={(e) => setImage(e.target.value)}
                  ></input>
                </li>
                <li>
                  <label htmlFor="image2">Rasm 2</label>
                  <input
                    value={image2}
                    type="text"
                    name="image2"
                    onChange={(e) => setImage2(e.target.value)}
                  ></input>
                </li>
                <li>
                  <label htmlFor="image3">Rasm 3</label>
                  <input
                    value={image3}
                    type="text"
                    name="image3"
                    onChange={(e) => setImage3(e.target.value)}
                  ></input>
                </li>
                <li>
                  <label htmlFor="image4">Rasm 4</label>
                  <input
                    value={image4}
                    type="text"
                    name="image4"
                    onChange={(e) => setImage4(e.target.value)}
                  ></input>
                </li>
                <li>
                  <label htmlFor="image5">Rasm 5</label>
                  <input
                    value={image5}
                    type="text"
                    name="image5"
                    onChange={(e) => setImage5(e.target.value)}
                  ></input>
                </li>
                <li>
                  <label htmlFor="image6">Rasm 6</label>
                  <input
                    value={image6}
                    type="text"
                    name="image6"
                    onChange={(e) => setImage6(e.target.value)}
                  ></input>
                </li>
                <li>
                  <label htmlFor="image7">Rasm 7</label>
                  <input
                    value={image7}
                    type="text"
                    name="image7"
                    onChange={(e) => setImage7(e.target.value)}
                  ></input>
                </li>
                <li>
                  <label htmlFor="image8">Rasm 8</label>
                  <input
                    value={image8}
                    type="text"
                    name="image8"
                    onChange={(e) => setImage8(e.target.value)}
                  ></input>
                </li>
                <li>
                  <label htmlFor="price">
                    Narx <i className="fa fa-asterisk color"></i>
                  </label>
                  <input
                    value={price}
                    type="text"
                    name="price"
                    id="price"
                    onChange={(e) => setPrice(e.target.value)}
                  ></input>
                </li>
                <li>
                  <label htmlFor="countRooms">
                    Xonalar soni <i className="fa fa-asterisk color"></i>
                  </label>
                  <input
                    value={countRooms}
                    type="text"
                    name="countRooms"
                    id="countRooms"
                    onChange={(e) => setCountRooms(e.target.value)}
                  ></input>
                </li>
                <li>
                  <label htmlFor="houseStorey">
                    Qavatlar soni <i className="fa fa-asterisk color"></i>{" "}
                  </label>
                  <input
                    value={houseStorey}
                    type="text"
                    name="houseStorey"
                    id="houseStorey"
                    onChange={(e) => setHouseStorey(e.target.value)}
                  ></input>
                </li>
                <li>
                  <label htmlFor="storey">
                    Nechanchi Qavat <i className="fa fa-asterisk color"></i>
                  </label>
                  <input
                    value={storey}
                    type="text"
                    name="storey"
                    id="storey"
                    onChange={(e) => setStorey(e.target.value)}
                  ></input>
                </li>
                <li>
                  <label htmlFor="builtAt">
                    Qachon qurilgan/Qachon topshirilgan
                  </label>
                  <input
                    value={builtAt}
                    type="text"
                    name="builtAt"
                    id="builtAt"
                    onChange={(e) => setBuiltAt(e.target.value)}
                  ></input>
                </li>
                <li>
                  <label htmlFor="sanuzel">
                    Sanuzellar soni <i className="fa fa-asterisk color"></i>
                  </label>
                  <input
                    value={sanuzel}
                    type="text"
                    name="sanuzel"
                    id="sanuzel"
                    onChange={(e) => setSanuzel(e.target.value)}
                  ></input>
                </li>
                <li>
                  <label htmlFor="plan">Rejasi</label>
                  <input
                    value={plan}
                    type="text"
                    name="plan"
                    id="plan"
                    onChange={(e) => setPlan(e.target.value)}
                  ></input>
                </li>
                <li>
                  <label htmlFor="withFurniture">Mebelli</label>
                  <select
                    value={withFurniture}
                    type="text"
                    name="withFurniture"
                    id="withFurniture"
                    onChange={(e) => setWithFurniture(e.target.value)}
                  >
                    <option></option>
                    <option>Bor</option>
                    <option>Yo'q</option>
                  </select>
                </li>
                <li>
                  <label htmlFor="repairs">
                    Ta'miri <i className="fa fa-asterisk color"></i>{" "}
                  </label>
                  <select
                    value={repairs}
                    type="text"
                    name="repairs"
                    id="repairs"
                    onChange={(e) => setRepairs(e.target.value)}
                  >
                    <option></option>
                    <option>Ta'mir talab</option>
                    <option>O'rtacha</option>
                    <option>Yevro remont</option>
                  </select>
                </li>
                <li>
                  <label htmlFor="nearBy">Yaqinda joylashgan</label>
                  <textarea
                    value={nearBy}
                    type="text"
                    name="nearBy"
                    id="nearBy"
                    onChange={(e) => setNearBy(e.target.value)}
                  ></textarea>
                </li>
                <li>
                  <label htmlFor="area">
                    Umumiy maydon <i className="fa fa-asterisk color"></i>
                  </label>
                  <input
                    value={area}
                    type="text"
                    name="area"
                    id="area"
                    onChange={(e) => setArea(e.target.value)}
                  ></input>
                </li>
                <li>
                  <label htmlFor="liveArea">
                    Yashash maydoni <i className="fa fa-asterisk color"></i>
                  </label>
                  <input
                    value={liveArea}
                    type="text"
                    name="liveArea"
                    id="liveArea"
                    onChange={(e) => setLiveArea(e.target.value)}
                  ></input>
                </li>
                <li>
                  <label htmlFor="fee">
                    Vositachilik haqqi <i className="fa fa-asterisk color"></i>{" "}
                  </label>
                  <select
                    value={fee}
                    type="text"
                    name="fee"
                    id="fee"
                    onChange={(e) => setFee(e.target.value)}
                  >
                    <option></option>
                    <option>Bor</option>
                    <option>Yo'q</option>
                  </select>
                </li>
                <li>
                  <label htmlFor="buildingType">
                    Qurilish turi <i className="fa fa-asterisk color"></i>{" "}
                  </label>
                  <select
                    value={buildingType}
                    type="text"
                    name="buildingType"
                    id="buildingType"
                    onChange={(e) => setBuildingType(e.target.value)}
                  >
                    <option></option>
                    <option>Panelniy</option>
                    <option>G'ishtlik</option>
                  </select>
                </li>
                <li>
                  <label htmlFor="roomHeight">Shiftning balandligi</label>
                  <input
                    value={roomHeight}
                    type="text"
                    name="roomHeight"
                    id="roomHeight"
                    onChange={(e) => setRoomHeight(e.target.value)}
                  ></input>
                </li>
                <li>
                  <label htmlFor="sort">
                    Turi (Novostroyka yoki Ikkilamchi){" "}
                    <i className="fa fa-asterisk color"></i>
                  </label>
                  <select
                    value={sort}
                    name="sort"
                    id="sort"
                    onChange={(e) => setSort(e.target.value)}
                  >
                    <option></option>
                    <option>Novostroyka</option>
                    <option>Ikkilamchi</option>
                  </select>
                </li>
                <li>
                  <label htmlFor="phoneNumber">
                    Telefon Nomer <i className="fa fa-asterisk color"></i>{" "}
                  </label>
                  <input
                    value={phoneNumber}
                    type="text"
                    name="phoneNumber"
                    id="phoneNumber"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  ></input>
                </li>
                <li>
                  <label htmlFor="region">
                    Region <i className="fa fa-asterisk color"></i>
                  </label>
                  <select
                    value={region}
                    type="text"
                    name="region"
                    id="region"
                    onChange={(e) => setRegion(e.target.value)}
                  >
                    <option></option>
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
                <li>
                  <label htmlFor="category">
                    Kategoriya <i className="fa fa-asterisk color"></i>{" "}
                  </label>
                  <input
                    value={category}
                    type="text"
                    name="category"
                    id="category"
                    onChange={(e) => setCategory(e.target.value)}
                  ></input>
                </li>
                <li>
                  <label htmlFor="author">
                    Avtor <i className="fa fa-asterisk color"></i>{" "}
                  </label>
                  <input
                    value={author}
                    type="text"
                    name="author"
                    id="author"
                    onChange={(e) => setAuthor(e.target.value)}
                  ></input>
                </li>
                <li>
                  <label htmlFor="description">
                    Tasvirlash <i className="fa fa-asterisk color"></i>{" "}
                  </label>
                  <textarea
                    value={description}
                    name="description"
                    id="description"
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </li>
              </div>
              <li>
                <button type="submit" className="button primary">
                  {id ? "O'zgartirmoq" : "E'lon Berish"}
                </button>
                <button
                  onClick={(props.history.push = "/")}
                  type="submit"
                  className="button margin-top primary"
                >
                  Orqaga
                </button>
              </li>
              <div>
                <i className="fa fa-asterisk color"></i> belgi qo'yilgan
                joylarni belgilash shart!
              </div>
            </ul>
          </form>
          <form id="auto" style={{ display: "block" }}>
            <ul>
              <li>test</li>
              <li>test</li>
              <li>test</li>
              <li>test</li>
              <li>test</li>
              <li>test</li>
              <li>test</li>
            </ul>
          </form>
        </div>
      </div>
    </Bounce>
  );
}
export default PostApartment;

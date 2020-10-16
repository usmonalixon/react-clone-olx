import React, { useEffect, useState } from "react";
import Bounce from "react-reveal/Bounce";
import { useDispatch, useSelector } from "react-redux";
import { listAds, saveAd } from "../actions/adActions";
import { showMessage } from "../util";
function AdsScreen(props) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
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
  const [category, setCategory] = useState("");
  const [storey, setStorey] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const adList = useSelector((state) => state.adList);
  const { loading, ads, error } = adList;
  const adSave = useSelector((state) => state.adSave);
  const {
    loading: loadingSave,
    success: successSave,
    error: errorSave,
  } = adSave;
  const dispatch = useDispatch();

  useEffect(() => {
    if (successSave) {
      showMessage("Yangi e'lon muvaffaqiyatli yaratildi.");
    }
    dispatch(listAds());
    return () => {
      //
    };
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveAd({
        name,
        image,
        sort,
        countRooms,
        sanuzel,
        houseStorey,
        builtAt,
        plan,
        withFurniture,
        repairs,
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
      })
    );
  };
  return (
    <Bounce right cascade>
      <div className="form">
        <form onSubmit={submitHandler}>
          <ul className="form-container">
            <li>
              <h2>E'lon berish</h2>
            </li>
            <li>
              {loadingSave && <div>Loading...</div>}
              {errorSave && <div>{errorSave}</div>}
            </li>
            <li>
              <label htmlFor="name">
                Ism <i class="fa fa-asterisk color"></i>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                onChange={(e) => setName(e.target.value)}
              ></input>
            </li>
            <li>
              <label htmlFor="image">
                Rasm <i class="fa fa-asterisk color"></i>
              </label>
              <input
                type="text"
                name="image"
                id="image"
                onChange={(e) => setImage(e.target.value)}
              ></input>
            </li>
            <li>
              <label htmlFor="price">
                Narx <i class="fa fa-asterisk color"></i>
              </label>
              <input
                type="text"
                name="price"
                id="price"
                onChange={(e) => setPrice(e.target.value)}
              ></input>
            </li>
            <li>
              <label htmlFor="countRooms">
                Xonalar soni <i class="fa fa-asterisk color"></i>
              </label>
              <input
                type="text"
                name="countRooms"
                id="countRooms"
                onChange={(e) => setCountRooms(e.target.value)}
              ></input>
            </li>
            <li>
              <label htmlFor="houseStorey">
                Qavatlar soni <i class="fa fa-asterisk color"></i>{" "}
              </label>
              <input
                type="text"
                name="houseStorey"
                id="houseStorey"
                onChange={(e) => setHouseStorey(e.target.value)}
              ></input>
            </li>
            <li>
              <label htmlFor="storey">
                Nechanchi Qavat <i class="fa fa-asterisk color"></i>
              </label>
              <input
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
                type="text"
                name="builtAt"
                id="builtAt"
                onChange={(e) => setBuiltAt(e.target.value)}
              ></input>
            </li>
            <li>
              <label htmlFor="sanuzel">
                Sanuzellar soni <i class="fa fa-asterisk color"></i>
              </label>
              <input
                type="text"
                name="sanuzel"
                id="sanuzel"
                onChange={(e) => setSanuzel(e.target.value)}
              ></input>
            </li>
            <li>
              <label htmlFor="plan">Rejasi</label>
              <input
                type="text"
                name="plan"
                id="plan"
                onChange={(e) => setPlan(e.target.value)}
              ></input>
            </li>
            <li>
              <label htmlFor="withFurniture">Mebelli</label>
              <select
                type="text"
                name="withFurniture"
                id="withFurniture"
                onChange={(e) => setWithFurniture(e.target.value)}
              >
                <option>Bor</option>
                <option>Yo'q</option>
              </select>
            </li>
            <li>
              <label htmlFor="repairs">
                Ta'miri <i class="fa fa-asterisk color"></i>{" "}
              </label>
              <select
                type="text"
                name="repairs"
                id="repairs"
                onChange={(e) => setRepairs(e.target.value)}
              >
                <option>Ta'mir talab</option>
                <option>O'rtacha</option>
                <option>Yevro remont</option>
              </select>
            </li>
            <li>
              <label htmlFor="nearBy">Yaqinda joylashgan</label>
              <textarea
                type="text"
                name="nearBy"
                id="nearBy"
                onChange={(e) => setNearBy(e.target.value)}
              ></textarea>
            </li>
            <li>
              <label htmlFor="area">
                Yashash maydoni <i class="fa fa-asterisk color"></i>
              </label>
              <input
                type="text"
                name="area"
                id="area"
                onChange={(e) => setArea(e.target.value)}
              ></input>
            </li>
            <li>
              <label htmlFor="fee">
                Vositachilik haqqi <i class="fa fa-asterisk color"></i>{" "}
              </label>
              <select
                type="text"
                name="fee"
                id="fee"
                onChange={(e) => setFee(e.target.value)}
              >
                <option>Bor</option>
                <option>Yo'q</option>
              </select>
            </li>
            <li>
              <label htmlFor="buildingType">
                Qurilish turi <i class="fa fa-asterisk color"></i>{" "}
              </label>
              <select
                type="text"
                name="buildingType"
                id="buildingType"
                onChange={(e) => setBuildingType(e.target.value)}
              >
                <option>Panelniy</option>
                <option>G'ishtlik</option>
              </select>
            </li>
            <li>
              <label htmlFor="roomHeight">Shiftning balandligi</label>
              <input
                type="text"
                name="roomHeight"
                id="roomHeight"
                onChange={(e) => setRoomHeight(e.target.value)}
              ></input>
            </li>
            <li>
              <label htmlFor="sort">
                Turi (Novostroyka yoki Ikkilamchi){" "}
                <i class="fa fa-asterisk color"></i>
              </label>
              <select
                name="sort"
                id="sort"
                onChange={(e) => setSort(e.target.value)}
              >
                <option>Novostroyka</option>
                <option>Ikkilamchi</option>
              </select>
            </li>
            <li>
              <label htmlFor="phoneNumber">
                Telefon Nomer <i class="fa fa-asterisk color"></i>{" "}
              </label>
              <input
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                onChange={(e) => setPhoneNumber(e.target.value)}
              ></input>
            </li>
            <li>
              <label htmlFor="category">
                Kategoriya <i class="fa fa-asterisk color"></i>{" "}
              </label>
              <input
                type="text"
                name="category"
                id="category"
                onChange={(e) => setCategory(e.target.value)}
              ></input>
            </li>
            <li>
              <label htmlFor="author">
                Avtor <i class="fa fa-asterisk color"></i>{" "}
              </label>
              <input
                type="text"
                name="author"
                id="author"
                onChange={(e) => setAuthor(e.target.value)}
              ></input>
            </li>
            <li>
              <label htmlFor="description">
                Tasvirlash <i class="fa fa-asterisk color"></i>{" "}
              </label>
              <textarea
                name="description"
                id="description"
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </li>
            <li>
              <button type="submit" className="button primary">
                E'lon Berish
              </button>
            </li>
            <div>
              <i class="fa fa-asterisk color"></i> belgi qo'yilgan joylarni
              belgilash shart!
            </div>
          </ul>
        </form>
      </div>
    </Bounce>
  );
}
export default AdsScreen;

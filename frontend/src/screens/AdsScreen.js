import React, { useEffect, useState } from "react";
import Bounce from "react-reveal/Bounce";
import { useDispatch, useSelector } from "react-redux";
import { deleteAd, listAds, saveAd } from "../actions/adActions";
import $ from 'jquery';

function AdsScreen(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState("");
  const [id, setId] = useState("");
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
  const [region, setRegion] = useState("");
  const adList = useSelector((state) => state.adList);
  const { loading, ads, error } = adList;

  const adDelete = useSelector((state) => state.adDelete);
  const {
    loading: loadingDelete,
    success: successDelete,
    error: errorDelete,
  } = adDelete;

  const adSave = useSelector((state) => state.adSave);
  const {
    loading: loadingSave,
    success: successSave,
    error: errorSave,
  } = adSave;

  const dispatch = useDispatch();

  useEffect(() => {
    if (successSave) {
      setModalVisible(false);
    }
    dispatch(listAds());
    return () => {
      //
    };
  }, [successSave, successDelete]);

  const openModal = (ad) => {
    setModalVisible(true);
    setId(ad._id);
    setName(ad.name);
    setImage(ad.image);
    setRegion(ad.region);
    setSort(ad.sort);
    setSanuzel(ad.sanuzel);
    setHouseStorey(ad.houseStorey);
    setBuiltAt(ad.builtAt);
    setPlan(ad.plan);
    setWithFurniture(ad.withFurniture);
    setRepairs(ad.repairs);
    setNearBy(ad.nearBy);
    setArea(ad.area);
    setFee(ad.fee);
    setBuildingType(ad.buildingType);
    setRoomHeight(ad.roomHeight);
    setCategory(ad.category);
    setStorey(ad.storey);
    setAuthor(ad.author);
    setCountRooms(ad.countRooms);
    setPrice(ad.price);
    setPhoneNumber(ad.phoneNumber);
    setSort(ad.sort);
    setDescription(ad.description);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveAd({
        _id: id,
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
        region,
      })
    );
  };
  const deleteHandler = (ad) => {
    dispatch(deleteAd(ad._id));
  };

  return (
    <Bounce right cascade>
      <div className="content content-margined">
        <div className="ad-header">
          <button onClick={() => openModal({})} className="button primary">
            E'lon Berish
          </button>
        </div>
        {modalVisible && (
          <div className="form">
            <form onSubmit={submitHandler}>
              <ul className="form-container">
                <li>
                  <h2>E'lon berish</h2>
                </li>
                <li>
                  {loadingSave && <div>Yuklanmoqda...</div>}
                  {errorSave && <div>{errorSave}</div>}
                </li>
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
                    Yashash maydoni <i className="fa fa-asterisk color"></i>
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
                  ><option></option><option>Mirzo Ulug'bek</option></select>
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
                <li>
                  <button type="submit" className="button primary">
                    {id ? "O'zgartirmoq" : "E'lon Berish"}
                  </button>
                  <button
                    onClick={() => setModalVisible(false)}
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
          </div>
        )}

        <div className="ad-list">
          <table className="table">
            <thead>
              <tr key={id}>
                <th>ID</th>
                <th>ISM</th>
                <th>NARX</th>
                <th>KATEGORIYA</th>
                <th>RUKN</th>
                <th>HARAKAT</th>
              </tr>
            </thead>
            <tbody>
              {ads.map((ad) => (
                <tr key={ad._id}>
                  <td>{ad._id}</td>
                  <td>{ad.name}</td>
                  <td>{ad.price}</td>
                  <td>{ad.category}</td>
                  <td>{ad.sort}</td>
                  <td>
                    <button
                      onClick={() => openModal(ad)}
                      className="button primary"
                    >
                      O'zgartirmoq
                    </button>
                    <button
                      onClick={() => deleteHandler(ad)}
                      className="button margin-left primary"
                    >
                      O'chirmoq
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Bounce>
  );
}
export default AdsScreen;

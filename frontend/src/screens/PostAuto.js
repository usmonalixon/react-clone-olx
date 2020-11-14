import React, { useEffect, useState } from "react";
import Bounce from "react-reveal/Bounce";
import { useDispatch, useSelector } from "react-redux";
import { saveAuto } from "../actions/adAutoActions";
import { showMessage } from "../util";

function PostAuto(props) {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [image, setImage] = useState("");
  const [color, setColor] = useState("");
  const [mile, setMile] = useState("");
  const [builtAt, setBuiltAt] = useState("");
  const [kuzov, setKuzov] = useState("");
  const [model, setModel] = useState("");
  const [repairs, setRepairs] = useState("");
  const [autoType, setAutoType] = useState("");
  const [addOptions, setAddOptions] = useState("");
  const [fee, setFee] = useState("");
  const [sort, setSort] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [category2, setCategory2] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [region, setRegion] = useState("");


  const autoSave = useSelector((state) => state.autoSave);
  const {
    loading: loadingSave,
    success: successSave,
    error: errorSave,
  } = autoSave;

  const dispatch = useDispatch();

  useEffect(() => {
    //
    return () => {
      //
    };
  }, [successSave]);

  // const openModal = (auto) => {
  //   setId(auto._id);
  //   setName(auto.name);
  //   setImage(auto.image);
  //   setRegion(auto.region);
  //   setSort(auto.sort);
  //   setAddOptions(auto.autodOptions);
  //   setMile(auto.mile);
  //   setAutoType(auto.autoType);
  //   setBuiltAt(auto.builtAt);
  //   setKuzov(auto.kuzov);
  //   setColor(auto.color);
  //   setRepairs(auto.repairs);
  //   setModel(auto.model);
  //   setFee(auto.fee);
  //   setCategory2(auto.category2);
  //   setAuthor(auto.author);
  //   setPrice(auto.price);
  //   setPhoneNumber(auto.phoneNumber);
  //   setSort(auto.sort);
  //   setDescription(auto.description);
  // };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveAuto({
        _id: id,
        name,
        image,
        sort,
        model,
        addOptions,
        mile,
        builtAt,
        color,
        autoType,
        fee,
        repairs,
        kuzov,
        phoneNumber,
        category2,
        author,
        description,
        price,
        region,
      })
    );
  };
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
                  <label htmlFor="model">
                    Model <i className="fa fa-asterisk color"></i>
                  </label>
                  <input
                    value={model}
                    type="text"
                    name="model"
                    id="model"
                    onChange={(e) => setModel(e.target.value)}
                  ></input>
                </li>
                <li>
                  <label htmlFor="color">
                    Rang <i className="fa fa-asterisk color"></i>{" "}
                  </label>
                  <input
                    value={color}
                    type="text"
                    name="color"
                    id="color"
                    onChange={(e) => setColor(e.target.value)}
                  ></input>
                </li>
                <li>
                  <label htmlFor="autoType">
                    Turi <i className="fa fa-asterisk color"></i>
                  </label>
                  <input
                    value={autoType}
                    type="text"
                    name="autoType"
                    id="autoType"
                    onChange={(e) => setAutoType(e.target.value)}
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
                  <label htmlFor="kuzov">
                    Kuzov <i className="fa fa-asterisk color"></i>
                  </label>
                  <input
                    value={kuzov}
                    type="text"
                    name="kuzov"
                    id="kuzov"
                    onChange={(e) => setKuzov(e.target.value)}
                  ></input>
                </li>
                <li>
                  <label htmlFor="mile">Qancha yo'l bosib o'tgan</label>
                  <input
                    value={mile}
                    type="text"
                    name="mile"
                    id="mile"
                    onChange={(e) => setMile(e.target.value)}
                  ></input>
                </li>
                <li>
                  <label htmlFor="addOptions">Qo'shimcha optsiyalar</label>
                  <select
                    value={addOptions}
                    type="text"
                    name="addOptions"
                    id="addOptions"
                    onChange={(e) => setAddOptions(e.target.value)}
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
                    <option>Idealniy</option>
                    <option>Yangi</option>
                  </select>
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
                  <label htmlFor="sort">
                    Turi {" "}
                    <i className="fa fa-asterisk color"></i>
                  </label>
                  <input
                    value={sort}
                    name="sort"
                    id="sort"
                    onChange={(e) => setSort(e.target.value)}
                  >
                  </input>
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
                  <label htmlFor="category2">
                    Kategoriya <i className="fa fa-asterisk color"></i>{" "}
                  </label>
                  <input
                    value={category2}
                    type="text"
                    name="category2"
                    id="category2"
                    onChange={(e) => setCategory2(e.target.value)}
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
      </div>
    </Bounce>
  );
}
export default PostAuto;

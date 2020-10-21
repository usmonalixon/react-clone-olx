import React, { useState, useEffect } from "react";
import { logout, update } from "../actions/userActions";
import { useDispatch, useSelector } from "react-redux";

function ProfileScreen(props) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const handleLogout = () => {
    dispatch(logout());
    props.history.push("/");
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(update({ userId: userInfo._id, email, name, password }));
  };
  const userUpdate = useSelector((state) => state.userUpdate);
  const { loading, error, success } = userUpdate;
  
  useEffect(() => {
    if (userInfo) {
      console.log(userInfo.name);
      setEmail(userInfo.email);
      setName(userInfo.name);
      setPassword(userInfo.password);
    }
    return () => {};
  }, [userInfo]);

  return (
    <div className="profile">
      <div className="profile-info">
        <div className="form">
          <form onSubmit={submitHandler}>
            <ul className="form-container">
              <li>
                <h2>Profil</h2>
              </li>
              <li>
                {loading ? <div>Yuklanmoqda...</div> : ""}
                {success ? (
                  alert("Profilingiz muvaffaqiyatli o'zgartirildi.")
                ) : (
                  ""
                )}
                {error ? <div>{error}</div> : ""}
              </li>
              <li>
                <label htmlFor="name">Ism</label>
                <input
                  value={name}
                  type="name"
                  name="name"
                  id="name"
                  onChange={(e) => setName(e.target.value)}
                ></input>
              </li>
              <li>
                <label htmlFor="email">Email</label>
                <input
                  value={email}
                  type="email"
                  name="email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
              </li>
              <li>
                <label htmlFor="password">Parol</label>
                <input
                  value={password}
                  type="password"
                  id="password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
              </li>
              <li>
                <button type="submit" className="button primary">
                  O'zgartirish
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="button full full-width"
                >
                  Tizimdan chiqish
                </button>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;

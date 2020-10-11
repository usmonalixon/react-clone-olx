import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LightSpeed from "react-reveal/LightSpeed";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../actions/userActions";

function RegisterScreen(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, userInfo, error } = userRegister;
  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfo) {
      props.history.push("/");
    }
    return () => {
      //
    };
  }, [userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(register(name, email, password));
  };
  return (
    <LightSpeed left>
      <div className="form">
        <form onSubmit={submitHandler}>
          <ul className="form-container">
            <li>
              <h2>Akkaunt yaratish</h2>
            </li>
            <li>
              {loading && <div>Loading...</div>}
              {error && <div>{error}</div>}
            </li>
            <li>
              <label htmlFor="name">Ism</label>
              <input
                type="name"
                name="name"
                id="name"
                onChange={(e) => setName(e.target.value)}
              ></input>
            </li>
            <li>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </li>
            <li>
              <label htmlFor="password">Parol</label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </li>
            <li>
              <label htmlFor="rePassword">Parolni qayta kiriting</label>
              <input
                type="password"
                name="rePassword"
                id="rePassword"
                onChange={(e) => setRePassword(e.target.value)}
              ></input>
            </li>
            <li>
              <button type="submit" className="button primary">
                Registratsiya
              </button>
            </li>
            <li>Akkauntingiz bormi? </li>
            <li>
              <Link to="/signin" className="button full">
                Tizimga kirish
              </Link>
            </li>
          </ul>
        </form>
      </div>
    </LightSpeed>
  );
}
export default RegisterScreen;

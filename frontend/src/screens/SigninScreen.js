import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Bounce from 'react-reveal/Bounce';
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../actions/userActions";

function SigninScreen(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userSignin = useSelector((state) => state.userSignin);
  const { loading, userInfo, error } = userSignin;
  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfo) {
      props.history.push("/");
    }
    return () => {
      //
    };
  }, [userInfo, props.history]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };
  return (
    <Bounce right cascade>
    <div className="form">
      <form onSubmit={submitHandler}>
        <ul className="form-container">
          <li>
            <h2>Tizimga Kirish</h2>
          </li>
          <li>
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
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
            <button type="submit" className="button primary">
              Tizimga kirish
            </button>
          </li>
          <li>Akkauntingiz yo'qmi?</li>
          <li>
            <Link to="/register" className="button full full-width">
              O'zingizni akkauntingizni yarating
            </Link>
          </li>
        </ul>
      </form>
    </div>
    </Bounce>
  );
}
export default SigninScreen;

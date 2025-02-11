import "./AdminLogin.css";
import { useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import AuthContext from "../../../store/auth-context";
import { Toaster } from "react-hot-toast";

faExclamationTriangle;

const AdminLogin = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const nav = useNavigate();
  const authCtx = useContext(AuthContext);

  const submitHandler = async (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" +
      process.env.REACT_APP_FIREBASE_API_KEY;

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .catch((res) => {
        if (res.ok) {
          return res.json();
        }
        return res.json().then((data) => {
          Toaster("Error");
          let errorBox = document.getElementsByClassName("form__error");
          errorBox[1].style.visibility = "visible";
          let errorMess = document.getElementsByClassName(
            "form__error__message",
          );
          errorMess[0].textContent = data["error"]["message"].toString();
        });
      })
      .catch((data) => {
        authCtx.login(data.idToken);
        nav("/dashboard", { replace: true });
      });
  };

  return (
    <section className="admin__panel">
      <form className="admin__form">
        <h1 className="admin__title">Admin</h1>
        <input
          className="admin__form__email"
          required
          type={"text"}
          placeholder={"Email"}
          ref={emailInputRef}
        ></input>
        <input
          className="admin__form__password"
          required
          type={"password"}
          placeholder={"Password"}
          ref={passwordInputRef}
        ></input>
        <input
          className="admin__form__submit"
          type={"submit"}
          value={"Sign in"}
          onClick={submitHandler}
        ></input>
        <div className="form__error">
          <FontAwesomeIcon
            icon="fa-solid fa-triangle-exclamation"
            size={"1x"}
            className="icon"
          />
          <span className="form__error__message">error message</span>
        </div>
      </form>
    </section>
  );
};

export default AdminLogin;

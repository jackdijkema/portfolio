import "./AdminLogin.css";
import { useRef, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import AuthContext from "../../../store/auth-context";
import { toast } from "react-toastify";

library.add(faExclamationTriangle);

const AdminLogin = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const nav = useNavigate();
  const authCtx = useContext(AuthContext);
  const [isSubmitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const submitHandler = async (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    setSubmitting(true);
    setErrorMessage("");

    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" +
      process.env.REACT_APP_FIREBASE_API_KEY;

    const loginPromise = fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(async (response) => {
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error?.message || "Loginfailed");
      }
      authCtx.login(data.idToken);
      return data;
    });

    toast.promise(loginPromise, {
      success: "Login successful! Redirecting...",
      pending: "Logging in...",
      error: "Login failed. " + loginPromise,
    });

    try {
      await loginPromise;
      nav("/admin");
    } catch (error) {
      setSubmitting(false);
      setErrorMessage(error.message);
    }
  };

  return (
    <section className="admin__panel">
      <form className="admin__form" onSubmit={submitHandler}>
        <h1 className="admin__title">Admin</h1>
        <input
          className="admin__form__email"
          required
          type="text"
          placeholder="Email"
          ref={emailInputRef}
        />
        <input
          className="admin__form__password"
          required
          type="password"
          placeholder="Password"
          ref={passwordInputRef}
        />
        <input
          className="admin__form__submit"
          type="submit"
          value={isSubmitting ? "Signing in..." : "Sign in"}
          disabled={isSubmitting}
        />
        {errorMessage && (
          <div className="form__error">
            <FontAwesomeIcon
              icon="fa-solid fa-triangle-exclamation"
              size="1x"
              className="icon"
            />
            <span className="form__error__message">{errorMessage}</span>
          </div>
        )}
      </form>
    </section>
  );
};

export default AdminLogin;

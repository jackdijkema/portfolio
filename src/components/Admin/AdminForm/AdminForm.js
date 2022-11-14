import "./AdminForm.css";

function Admin() {
  return (
    <main>
      <section className="admin__panel">
        <form className="admin__form" method="POST">
          <h1 className="admin__title">Admin panel</h1>
          <input
            className="admin__form__username"
            type={"text"}
            placeholder={"Username"}
          ></input>
          <input
            className="admin__form__password"
            type={"password"}
            placeholder={"Password"}
          ></input>
          <input
            className="admin__form__password"
            type={"submit"}
            placeholder={"submit"}
          ></input>
        </form>
      </section>
    </main>
  );
}

export default Admin;

import LoginLink from "./LoginLink";
import "./register.scss";

export default function Register() {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Cool Name.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem
            veritatis provident quae porro, dolorem tempora reprehenderit quasi
            quod rem distinctio?
          </p>
          <LoginLink />
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Name" />
            <button>Register</button>
          </form>
          <LoginLink />
        </div>
      </div>
    </div>
  );
}

import "./login.scss";
import { useAuthContext } from "../../context/AuthContext";
import RegisterLink from "./RegisterLink";

export default function Login() {
  const { login } = useAuthContext();

  const handleLogin = () => {
    login();
  };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem
            veritatis provident quae porro, dolorem tempora reprehenderit quasi
            quod rem distinctio?
          </p>
          <RegisterLink />
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button onClick={handleLogin}>Login</button>
          </form>
          <RegisterLink />
        </div>
      </div>
    </div>
  );
}

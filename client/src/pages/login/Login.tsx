import "./login.scss";
import { useAuthContext } from "../../context/AuthContext";
import RegisterLink from "./RegisterLink";
import { useState } from "react";
import { AxiosError, AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";

interface Inputs {
  username: string;
  password: string;
}

export default function Login() {
  const { login } = useAuthContext();
  const [inputs, setInputs] = useState<Inputs>({
    username: "",
    password: "",
  });
  const [err, setErr] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent) => {
    const input = e.target as HTMLInputElement;
    setInputs((prev) => ({ ...prev, [input.name]: input.value }));
  };

  const handleLogin = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      if (login) await login(inputs);
      navigate("/");
    } catch (error) {
      const err = error as AxiosError;
      const res = err.response as AxiosResponse;
      setErr(res.data);
    }
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
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
            {err && err}
            <button onClick={handleLogin}>Login</button>
          </form>
          <RegisterLink />
        </div>
      </div>
    </div>
  );
}

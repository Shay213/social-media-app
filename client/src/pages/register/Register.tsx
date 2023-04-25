import { useState } from "react";
import LoginLink from "./LoginLink";
import "./register.scss";
import axios, { AxiosError, AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";

interface Inputs {
  username: string;
  email: string;
  password: string;
  name: string;
}

export default function Register() {
  const [inputs, setInputs] = useState<Inputs>({
    username: "",
    email: "",
    password: "",
    name: "",
  });
  const [err, setErr] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent) => {
    const input = e.target as HTMLInputElement;
    setInputs((prev) => ({ ...prev, [input.name]: input.value }));
  };

  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8800/api/auth/register", inputs);
    } catch (error) {
      const err = error as AxiosError;
      const res = err.response as AxiosResponse;
      setErr(res.data);
    }
  };

  console.log(err);

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
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={handleChange}
            />
            {err && err}
            <button onClick={handleClick}>Register</button>
          </form>
          <LoginLink />
        </div>
      </div>
    </div>
  );
}

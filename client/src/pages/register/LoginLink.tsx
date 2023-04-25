import { Link } from "react-router-dom";

export default function LoginLink() {
  return (
    <div className="loginLink">
      <span>Do you have an account?</span>
      <Link to="/login">
        <button>Login</button>
      </Link>
    </div>
  );
}

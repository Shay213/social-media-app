import { Link } from "react-router-dom";

export default function RegisterLink() {
  return (
    <div className="registerLink">
      <span>Don&apos;t you have an account?</span>
      <Link to="/register">
        <button>Register</button>
      </Link>
    </div>
  );
}

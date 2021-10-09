export default function LoginCard({ setLogin }) {
  return (
    <>
      <h2 className="login-header">Login</h2>
      Email
      <input id="email" placeholder="Email"></input>
      Password
      <input id="password" placeholder="Password"></input>
      <div className="RememberMe">
        <input className="check-box" type="checkbox"></input> Remember Me
      </div>
      <button id="submit-btn">Submit</button>
      New here ?{" "}
      <span
        className="link"
        onClick={() => {
          setLogin(false);
        }}
      >
        Register
      </span>
    </>
  );
}

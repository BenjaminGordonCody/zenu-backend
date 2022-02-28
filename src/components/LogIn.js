import { Input } from "./Input";
import { submitLogInHandler } from "../utils";

export const Login = ({ p }) => {
  //p does recieve state values
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        submitLogInHandler(e, p.setUser, p.username, p.password);
      }}
    >
      <h1>Log In!</h1>
      Username:
      <Input setter={p.setUsername} />
      Password:
      <Input setter={p.setPassword} />
      <button type="submit">sign up</button>
    </form>
  );
};

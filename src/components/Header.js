import { CrudButtons } from "./CRUDButtons";
import { Logo } from "./Logo";

export const Header = ({ user, setUser }) => {
  let headerMessage;

  if (user.hasOwnProperty("err")) {
    headerMessage = "Login failed";
  } else if (user.hasOwnProperty("username")) {
    headerMessage = `Welcome ${user.username}`;
  } else {
    headerMessage = "Please log in";
  }
  return (
    <div id="header">
      <Logo />
      <h3>{headerMessage}</h3>
      {user ? <CrudButtons user={user} setUser={setUser} /> : ""}
    </div>
  );
};

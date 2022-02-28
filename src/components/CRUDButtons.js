import { fetchRequestDeleteUser } from "../utils";

export const CrudButtons = ({ user, setUser }) => {
  return (
    <div id="crudButtons">
      <button
        onClick={() => {
          fetchRequestDeleteUser(user, setUser);
        }}
      >
        Delete Account
      </button>
    </div>
  );
};

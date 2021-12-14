import { Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAuth } from "../hooks/use-auth.js";
import { removeUser } from "../store/slices/userSlice";

const Home = () => {
  const dispatch = useDispatch();

  const { isAuth, email } = useAuth();

  return isAuth ? (
    <div>
      <h1>Welcome</h1>

      <button onClick={() => dispatch(removeUser())}>
        Log out from {email}
      </button>
    </div>
  ) : (
    <Redirect to="/login" />
  );
};

export default Home;

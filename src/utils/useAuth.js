import { useDispatch, useSelector } from 'react-redux';
import { setUser, clearUser } from '../redux/authSlice';
import firebase from '../firebase';
import { useNavigate } from "react-router-dom"

const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  const signup = async (email, password) => {
    try {
      const response = await firebase.auth().createUserWithEmailAndPassword(email, password);
      navigate("/signin")
    } catch (error) {
      // Handle error
    }
  };

  const login = async (email, password) => {
    try {
      const response = await firebase.auth().signInWithEmailAndPassword(email, password);
      dispatch(setUser(response.user));
      navigate("/home")
    } catch (error) {
      // Handle error
    }
  };

  const logout = async () => {
    try {
      await firebase.auth().signOut();
      dispatch(clearUser());
      navigate("/")
    } catch (error) {
      // Handle error
    }
  };

  return {
    user,
    signup,
    login,
    logout,
  };
};

export default useAuth;

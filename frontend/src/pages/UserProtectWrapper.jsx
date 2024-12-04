// import { UserDataContext } from "../context/UserContext";
// import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useEffect } from "react";

const UserProtectWrapper = ({ children }) => {
  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);

  return <>{children}</>;
};

UserProtectWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserProtectWrapper;

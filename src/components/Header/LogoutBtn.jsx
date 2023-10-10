import Button from "../utils/Button";
import authService from "../../appwrite/auth"
import { logout } from "../../store/authSlice"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const LogoutBtn = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutHandler = () => {
        authService.logout()
        .then(() => {
            dispatch(logout());
            navigate("/");
        })
        .catch((error) => {
            console.log("LogoutBtn :: logoutHandler :: error", error);
        })
    }
    return (
        <Button
        className="inline-block mr-4 px-6 py-2 duration-200 rounded-full text-white border-2"
            onClick={logoutHandler}
        >Logout
        </Button>
    )
}

export default LogoutBtn;
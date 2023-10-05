import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AuthLayout = ({ children, authentication = true }) => {
    const navigate = useNavigate();
    const authStatus = useSelector((state) => state.auth.status);

    const [loader, setLoader] = useState(true);

    useEffect(() => {
        if (authentication && authStatus !== authentication) {
            navigate("/login");
        } else if (!authentication && authStatus !== authentication) {
            navigate("/");
        }
        setLoader(false);
    }, [authStatus, authentication, navigate]);

    return loader ? <p>Loading...</p> : <>{children}</>;
}

export default AuthLayout;
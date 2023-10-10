import { LogoutBtn, Container, Logo, Button } from "../index";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
    const navigate = useNavigate();
    const authStatus = useSelector((state) => state.auth.status);

    const navItems = [
        {
            name: "Home",
            path: "/",
            active: true,
        },
        {
            name: "Login",
            path: "/login",
            active: !authStatus,
        },
        {
            name: "Signup",
            path: "/signup",
            active: !authStatus,
        },
    ]

    return (
        <header className="py-3 bg-#d2e2f2 border-b-2 border-500">
            <Container>
                <nav className="flex">
                    <div className="mr-4">
                        <Link to="/">
                            <Logo width="150px" />
                        </Link>
                    </div>
                    <ul className="flex ml-auto">
                        {navItems.map((item) => (
                            item.active ? (
                                <li key={item.name}>
                                    <Button
                                        onClick={() => navigate(item.path)}
                                        className="inline-block mr-4 px-6 py-2 duration-200 rounded-full"
                                    ></Button>
                                </li>
                            ) : null
                        ))}
                        {authStatus && (
                            <li>
                                <LogoutBtn />
                            </li>
                        )}
                    </ul>
                </nav>
            </Container>
        </header>
    )
}

export default Header;
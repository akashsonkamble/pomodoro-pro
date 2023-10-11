import { Container, Pomodoro } from "../components/index";

import { useSelector } from "react-redux";

const HomePage = () => {
    const authStatus = useSelector(state => state.auth.status);

    if (authStatus === false) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-5xl font-bold mt-8 text-white drop-shadow-[0_1.2px_1.2px_rgba(102,51,153,1)]">
                                Login to Start
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    return (
        <div className="w-full py-8">
            <Container>
                <div className="flex flex-wrap">
                    <div className="p-2 w-full">
                        <Pomodoro />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default HomePage;
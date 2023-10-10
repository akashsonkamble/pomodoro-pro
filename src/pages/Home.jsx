import { Container } from "../components/Container";
import { Pomodoro } from "../components/Pomodoro";
import { useSelector } from "react-redux";

const HomePage = () => {
    const status = useSelector(state => state.auth.status);

    if (!status) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login to Start
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    return (
        <Pomodoro />
    )
}

export default HomePage;
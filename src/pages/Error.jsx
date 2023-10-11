import { Container, Logo, Button } from "../components/index";

import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <>
            <header className="mb-8 py-3 bg-#d2e2f2 border-b-2 border-500">
                <Container>
                    <div className="mr-4">
                        <Link to="/">
                            <Logo width="150px" />
                        </Link>
                    </div>
                </Container>
            </header>

            <div className="w-full py-8 mt-4 text-center">
                <div className="w-full block">
                    <h2 className="text-5xl font-bold mt-8 text-[#663399]">Something went wrong!</h2>
                    <p className="text-xl mt-8 text-[#663399]">A page you are looking for could not be found.</p>
                    <Button
                        type="submit"
                        className="inline-block mt-8 mr-4 px-6 py-2 duration-200 rounded-full text-white border-2"
                    >
                        <Link to="/">Back to Home</Link>
                    </Button>
                </div>
            </div>
        </>
    )
}
export default ErrorPage;
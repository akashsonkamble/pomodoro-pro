import { Header } from "../components/index";

const ErrorPage = () => {
    return (
        <>
            <Header />
            <div className="w-full py-8 mt-4 text-center">
                <div className="w-full block">
                    <p className="text-5xl font-bold mt-8 text-white drop-shadow-[0_1.2px_1.2px_rgba(102,51,153,1)]">Something went wrong!</p>
                </div>
            </div>
        </>
    )
}
export default ErrorPage;
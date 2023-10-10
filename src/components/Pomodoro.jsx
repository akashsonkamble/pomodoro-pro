import React, { useState, useEffect } from "react";
import { Container, Button} from "./index";

import { toast } from "react-toastify";

const Pomodoro = () => {
    const [timer, setTimer] = useState(0.1 * 60);
    const [breakTimer, setBreakTimer] = useState(5 * 60);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let intervalId;

        if (isRunning) {
            intervalId = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);
        }

        return () => clearInterval(intervalId);
    }, [isRunning]);

    useEffect(() => {
        if (timer === 0) {
            toast.success("It's time to take a break");
            setIsRunning(false);
            setBreakTimer(5 * 60);
        }
    }, [timer]);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;

        return `${minutes
            .toString()
            .padStart(2, "0")}:
            ${seconds
                .toString()
                .padStart(2, "0")}`;
    };

    const startHandler = () => {
        if (timer === 0) {
            setTimer(25 * 60);
        }
        setIsRunning(true);
    };

    const pauseHandler = () => {
        setIsRunning(false);
    };

    const resetHandler = () => {
        setIsRunning(false);
        setTimer(25 * 60);
        setBreakTimer(0);
    };
    return (
        <div className="flex items-center justify-center w-full">
            <Container>
                <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10
                border border-black/10`}>
                    <h2 className="text-center text-9xl text-[#663399]">
                        {formatTime(timer)}
                    </h2>
                    <div className="mt-8 text-center">
                        <div className="space-y-5 justify-center align-center">
                        <Button
                            className="w-1/4 mr-4 px-6 py-2 duration-200 rounded-full text-white border-2"
                            onClick={startHandler}
                            >
                            Start
                        </Button>
                        <Button
                            className="w-1/4 mr-4 px-6 py-2 duration-200 rounded-full text-white border-2"
                            onClick={pauseHandler}
                            >
                            Pause
                        </Button>
                        <Button
                            className="w-1/4 mr-4 px-6 py-2 duration-200 rounded-full text-white border-2"
                            onClick={resetHandler}
                            >
                            Reset
                        </Button>
                        </div>
                    </div>
                </div>

                {timer === 0 && (
                    <div className="flex flex-col items-center mt-8">
                        <h1 className="text-2xl font-bold mb-4 text-[#663399]">
                            Break Timer
                        </h1>
                        <div className="text-4xl mb-4 text-[#663399]">
                            {formatTime(breakTimer)}
                        </div>
                    </div>
                )}
            </Container>
        </div>
    )
}

export default Pomodoro;
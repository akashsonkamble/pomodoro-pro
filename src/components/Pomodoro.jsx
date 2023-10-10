import React, { useState, useEffect } from "react";
import { Container, Button} from "./index";

const Pomodoro = () => {
    const [timer, setTimer] = useState(25 * 60);
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
        <Container>
            <div className=" text-center flex flex-col items-center align-center justify-center py-10">
                <div className="text-9xl text-rebeccapurple">{formatTime(timer)}</div>
                <div className="flex gap-10 mt-10">
                <Button
                    className="text-2xl text-white bg-rebeccapurple border-rebeccapurple border-2 hover:text-rebeccapurple hover:border-rebeccapurple hover:bg-white focus:outline-none  font-bold py-2 px-4 rounded"
                    onClick={startHandler}
                >
                    Start
                </Button>
                <Button
                    className="text-2xl text-white bg-rebeccapurple border-rebeccapurple border-2 hover:text-rebeccapurple hover:border-rebeccapurple hover:bg-white focus:outline-none  font-bold py-2 px-4 rounded"
                    onClick={pauseHandler}
                >
                    Pause
                </Button>
                <Button
                    className="text-2xl text-white bg-rebeccapurple border-rebeccapurple border-2 hover:text-rebeccapurple hover:border-rebeccapurple hover:bg-white focus:outline-none  font-bold py-2 px-4 rounded"
                    onClick={resetHandler}
                >
                    Reset
                </Button>
                </div>
            </div>

            {timer === 0 && (
                <div className="flex flex-col items-center mt-8">
                <h1 className="text-2xl font-bold mb-4 text-rebeccapurple">
                    Break Timer
                </h1>
                <div className="text-4xl mb-4 text-rebeccapurple">
                    {formatTime(breakTimer)}
                </div>
                </div>
            )}
        </Container>
    )
}

export default Pomodoro;
import { useEffect, useState } from "react";

export const Clock = ({ setTime }) => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const clockTime = currentTime.toLocaleTimeString().slice(0, 5)

    function refreshClock() {
        setCurrentTime(new Date());
    }

    useEffect(() => {
        const timerId = setInterval(refreshClock, 1000);
        return () => clearInterval(timerId);
    }, [])

    useEffect(() => {
        setTime(clockTime.slice(0, 2))
    }, [clockTime, setTime])

    return (
        <div className="clockName--container">
            <h2>TV-Guide</h2>
            <h3 title="currentTime">{clockTime}</h3>
        </div>
    )
}
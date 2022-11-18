import { useEffect } from "react"

export const ProgramInfo = ({ schedule, time }) => {

    // useEffect(() => {
    //     const allProgramInfo = document.querySelectorAll('.ProgramInfo--info');
    //     for (const program of allProgramInfo) {
    //         if (program.classList.contains(time)) program.scrollIntoView({ block: 'start', inline: 'center' });
    //     }
    // }, [time])

    const getShowLength = (start, end) => {
        const [startHour, startMinutes] = start.split(':');
        const [endHour, endMinutes] = end.split(':');
        let endMinutesNum = Number(endMinutes)
        const hourDiff = Number(endHour - startHour);
        if (hourDiff) {
            const diff = Number(hourDiff * 60);
            endMinutesNum += diff;
        };
        const minutesDiff = endMinutesNum - startMinutes;
        return (minutesDiff / 10) * 3;
    }

    return (

        <div className="program--row">
            {
                schedule && schedule.map(item => {
                    const start = item.start.substring(11, 16)
                    const end = item.end.substring(11, 16)
                    const width = getShowLength(start, end);
                    const className = `ProgramInfo--info ${start.substring(0, 2)}`
                    return <div className={className} key={item.start} style={{ width: width + 'rem' }}>
                        <h4 className="ProgramInfo--info--title">{item.title}</h4>
                        <h5 className="ProgramInfo--info--time">{start} : {end}</h5>
                    </div>
                }
                )
            }

        </div>




    )
}
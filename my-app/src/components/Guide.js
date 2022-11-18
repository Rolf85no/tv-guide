import { useState, useEffect } from 'react'

import { Timeline } from './Timeline';
import { Channel } from './Channel';
import { Clock } from './Clock'
import { ProgramInfo } from './ProgramInfo'

export const Guide = ({ allChannelsData }) => {
    const [time, setTime] = useState('');
    const allChannels = allChannelsData.map(item => {
        return { title: item.title, id: item.id }
    }
    )

    const schedules = allChannelsData.map(item => item.schedules)
    useEffect(() => setTime(new Date().toLocaleTimeString().slice(0, 2)), [])

    let pos = { left: 0, x: 0 }
    function scroller(e) {
        const ele = document.querySelector(`.${e.currentTarget.className}`);
        ele.style.userSelect = 'none';
        pos = {
            left: ele.scrollLeft,
            x: e.clientX
        }
        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);

        function mouseMoveHandler(e) {
            const dx = e.clientX - pos.x;
            ele.scrollLeft = pos.left - dx;
        }

        function mouseUpHandler() {
            document.removeEventListener('mousemove', mouseMoveHandler);
            document.removeEventListener('mouseup', mouseUpHandler);
            ele.style.removeProperty('user-select');
        }
    }

    return (
        <>
            <Clock
                setTime={setTime}
            />

            {/* TIMELINE MÅ I SAMME CONTAINERS SOM PROGRAMMET*/}


            {time && <Timeline
                time={time}
                handleScroller={scroller}

            />}

            <section className="guide--container">
                <div className="channel--container">
                    {allChannels &&
                        allChannels.map(item =>
                            <Channel
                                title={item.title}
                                key={item.id}
                            />
                        )
                    }
                </div>

                {time &&
                    <div className="programInfo--container">
                        {
                            schedules && schedules.map((schedule, index) =>
                                <ProgramInfo
                                    schedule={schedule}
                                    time={time}
                                    key={index}
                                />

                            )
                        }

                    </div>
                }

            </section>

        </>




    )
}
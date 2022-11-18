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

    return (
        <main>
            <Clock
                setTime={setTime}
            />


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

                {time && <Timeline
                    time={time}

                />}

                {time &&
                    <>
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
                        <div className="button--now"> <button > NOW</button> </div>
                    </>

                }


            </section>



        </main>


    )
}
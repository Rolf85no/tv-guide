import { useMemo, useEffect } from "react"

export const Timeline = ({ time, handleScroller }) => {

    const elementsArray = useMemo(() => getElementsArray(), [])

    //// THIS DOESNT WORK
    // useEffect(() => {
    //     const focusTime = document.getElementById(`${time}:00`);
    //     focusTime.scrollIntoView({ block: 'start', inline: 'center' });

    // }, [time])

    return (

        <>
            {/* <div className='marker'></div> */}
            <div className="timeline--container" title="timeline--container">
                <h3>Channels</h3>

                {elementsArray && elementsArray.map(item =>
                    <div className="timeline--time"
                        key={item}
                        id={item}
                    >
                        {item}
                        <div className="timeline--time--half"></div>
                    </div>)
                }

            </div>

        </>




    )
}

function getElementsArray() {
    let myArray = []
    for (let i = 0; i < 24; i++) {
        myArray.push(`${i}:00`);
    }
    return myArray;
}
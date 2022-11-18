
// import { ProgramInfo } from "./ProgramInfo"

export const Channel = ({ title }) => {

    if (!title) return <>Loading...</>

    return (
        <div className="channel--container--title"> <h3>{title}</h3></div>

    )
}
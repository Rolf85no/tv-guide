import React from 'react'
import { Guide } from './components/Guide'
import { FetchData } from './proxies/FetchData'

export default function App() {
    const { allChannelsData, loading, error } = FetchData("/express_backend")

    if (loading) return <div> ..loading </div>
    return (
        <>
            <h1>App</h1>
            <React.StrictMode>
                <Guide
                    allChannelsData={allChannelsData}
                />
                <button className="button--now"> NOW</button>

            </React.StrictMode>

        </>

    )
}
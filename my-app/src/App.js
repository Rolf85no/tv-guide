import React from 'react'
import { Guide } from './components/Guide'
import { FetchData } from './proxies/FetchData'

export default function App() {
    const { allChannelsData, loading, error } = FetchData("/express_backend")

    if (loading) return <div> ..loading </div>
    return (
        <>
            <React.StrictMode>
                <Guide
                    allChannelsData={allChannelsData}
                />

            </React.StrictMode>

        </>

    )
}
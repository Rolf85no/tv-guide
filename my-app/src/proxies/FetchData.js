import { useEffect, useState } from 'react'

export const FetchData = (url) => {
    const [allChannelsData, setAllChannelsData] = useState(null)
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const getChannelData = async () => {
            try {
                const res = await fetch(url)
                const data = await res.json()
                const allChannelsBackEnd = data.data.channels;
                setAllChannelsData(allChannelsBackEnd);
                setLoading(false);
            }
            catch (err) {
                console.log(err);
                setError(err.message);
            }
        }
        getChannelData(url)
    }, [url])

    return { allChannelsData, loading, error }

}


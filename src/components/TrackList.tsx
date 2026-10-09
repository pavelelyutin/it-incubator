import {useEffect, useState} from "react";
import {TrackItem} from "./TrackItem.tsx";

export function TrackList({ selectedTrackId, onTrackSelect }) {
    const [tracks, setTracks] = useState(null)

    useEffect(() => {
        fetch("https://musicfun.it-incubator.app/api/1.0/playlists/tracks", {
            headers: {
                "api-key": "c251ca4c-bece-44f5-adb8-762906fb5aa8",
            },
        })
            .then((res) => res.json())
            .then((json) => {
                setTracks(json.data)
            })
    }, [])

    if (tracks === null) {
        return (
            <div>
                <span>Loading...</span>
            </div>
        )
    }

    if (tracks.length === 0) {
        return (
            <div>
                <span>No tracks</span>
            </div>
        )
    }

    const handleResetClick = () => {
        onTrackSelect?.(null)
    }

    const handleClick = (trackId) => {
        onTrackSelect?.(trackId)
    }

    return (
        <div>
            <button onClick={handleResetClick}>reset
            </button>
            <hr/>
            <ul>
                {tracks.map((track) => {
                        return (
                            <TrackItem
                                key={track.id}
                                track={track}
                                isSelected={track.id === selectedTrackId}
                                onSelect={handleClick}
                            />
                        )
                    }
                )
                }
            </ul>

        </div>
    )
}


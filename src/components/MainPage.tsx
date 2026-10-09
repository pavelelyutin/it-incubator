import {TrackList} from "./TrackList.tsx";
import {TrackDetail} from "./TrackDetail.tsx";
import {useState} from "react";

export function MainPage() {
    const [trackId, setTrackId] = useState(null)

    const handleTrackSelect = (id) => {
        setTrackId(id)
    }

    return (
        <>
            <div style={{display: "flex", gap: "20px"}}>
                <TrackList
                    onTrackSelect={handleTrackSelect}
                    selectedTrackId={trackId}
                />
                <TrackDetail trackId={trackId} />
            </div>
        </>
    )
}
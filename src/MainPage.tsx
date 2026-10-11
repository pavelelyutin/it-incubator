import {TrackList} from "./components/TrackList";
import {TrackDetail} from "./components/TrackDetail";
import {useState} from "react";

export function MainPage() {
    const [trackId, setTrackId] = useState<string | null>(null)

    const handleTrackSelect = (id: string | null): void => {
        setTrackId(id)
    }

    return (
        <>
            <div style={{display: "flex", gap: "20px"}}>
                <TrackList
                    selectedTrackId={trackId}
                    onTrackSelect={handleTrackSelect}
                />
                <TrackDetail trackId={trackId} />
            </div>
        </>
    )
}
import {useEffect, useState} from "react";

export function TrackDetail() {
  const [selectedTrack, setSelectedTrack] = useState(null)

  const selectedTrackId = '8c1c8624-b409-43cd-9ac3-10b15576feb9'

  useEffect(() => {
    if (!selectedTrackId) {
      return;
    }

    fetch(`https://musicfun.it-incubator.app/api/1.0/playlists/tracks/${selectedTrackId}`, {
      headers: {
        "api-key": 'c251ca4c-bece-44f5-adb8-762906fb5aa8'
      }
    })
      .then((res) => res.json())
      .then((json) => setSelectedTrack(json.data))
  }, [selectedTrackId])

  return (
    <div>
      <h3>Details</h3>
      {!selectedTrack && !selectedTrackId && "Track is not selected"}
      {!selectedTrack && selectedTrackId && "Loading..."}
      {selectedTrack && selectedTrackId && selectedTrackId !== selectedTrack.id && "Loading..."}
      {selectedTrack && (
        <div>
          <h3>{selectedTrack.attributes.title}</h3>
          <h4>Lyrics</h4>
          <p>{selectedTrack.attributes.lyrics ?? "no lyrics"}</p>
        </div>
      )}
    </div>
  )
}
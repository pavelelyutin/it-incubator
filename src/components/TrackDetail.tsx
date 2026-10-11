import {useEffect, useState} from "react";

type GetTrackDetailOutputData = {
  id: string
  attributes: {
    title: string
    lyrics: string | null
  }
}

type Props = {
  trackId: string | null
}

export function TrackDetail({ trackId }: Props) {
  const [selectedTrack, setSelectedTrack] = useState<GetTrackDetailOutputData | null>(null)

  useEffect(() => {
    if (!trackId) {
      setSelectedTrack(null)
      return;
    }

    fetch(`https://musicfun.it-incubator.app/api/1.0/playlists/tracks/${trackId}`, {
      headers: {
        "api-key": 'c251ca4c-bece-44f5-adb8-762906fb5aa8'
      }
    })
      .then((res) => res.json())
      .then((json) => setSelectedTrack(json.data))
  }, [trackId])

  return (
    <div>
      <h3>Details</h3>
      {!selectedTrack && !trackId && "Track is not selected"}
      {!selectedTrack && trackId && "Loading..."}
      {selectedTrack && trackId && trackId !== selectedTrack.id && "Loading..."}
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
import {useState, useEffect} from "react";


export function App() {
  const [selectedTrackId, setSelectedTrackId] = useState(null)
  const [selectedTrack, setSelectedTrack] = useState(null)
  const [tracks, setTracks] = useState(null)

  const [text, setText] = useState('')

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

  if (tracks === null) {
    return (
      <div>
        <h1>Musicfun player</h1>
        <span>Loading...</span>
      </div>
    )
  }

  if (tracks.length === 0) {
    return (
      <div>
        <h1>Musicfun player</h1>
        <span>No tracks</span>
      </div>
    )
  }

  return (
    <>
      <h1>Musicfun player</h1>

      <button onClick={() => {
        setSelectedTrackId(null)
        setSelectedTrack(null)
      }}>reset selection
      </button>

      <div style={{display: "flex", gap: "30px"}}>
        <ul>
          {tracks.map((track) => (
            <li
              key={track.id}
              style={{border: track.id === selectedTrackId ? "1px solid orange" : "none"}}
            >
              <div onClick={() => {
                setSelectedTrackId(track.id)
              }}>
                {track.attributes.title}
              </div>
              <audio controls src={track.attributes.attachments[0].url}></audio>
            </li>
          ))}
        </ul>

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
      </div>
    </>
  )
}

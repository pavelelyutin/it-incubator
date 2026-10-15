import {useTrackDetail} from "../bll/UseTrackDetail.tsx";

type Props = {
  trackId: string | null
}

export function TrackDetail({ trackId }:Props) {
  const { trackDetails } = useTrackDetail(trackId)

  return (
    <div>
      <h3>Details</h3>
      {!trackDetails && !trackId && "Track is not selected"}
      {!trackDetails && trackId && "Loading..."}
      {trackDetails && trackId && trackId !== trackDetails.id && "Loading..."}
      {trackDetails && (
        <div>
          <h3>{trackDetails.attributes.title}</h3>
          <h4>Lyrics</h4>
          <p>{trackDetails.attributes.lyrics ?? "no lyrics"}</p>
        </div>
      )}
    </div>
  )
}
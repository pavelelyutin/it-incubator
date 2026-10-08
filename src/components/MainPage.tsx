import {TrackList} from "./TrackList.tsx";
import {TrackDetail} from "./TrackDetail.tsx";

export function MainPage() {
  return (
    <>
      <div style={{display: "flex", gap: "20px"}}>
        <TrackList/>
        <TrackDetail/>
      </div>
    </>
  )
}
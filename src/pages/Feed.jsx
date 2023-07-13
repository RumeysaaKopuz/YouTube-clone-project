import { useContext } from "react";
import SideNav from "../components/SideNav";
import { YoutubeContext } from "../context/youtubeContext";

const Feed = () => {
  const { searchResult } = useContext(YoutubeContext);
  return (
    <div className="d-flex">
      <SideNav />
      <div>
        {!searchResult ? (
          <p>Loading...</p>
        ) : (
          searchResult.map((video) => <VideoCard video={video}/>)
        )}
      </div>
    </div>
  );
};

export default Feed;

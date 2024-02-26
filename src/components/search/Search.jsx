import React, { useEffect } from "react";
import "./search.css";
import { useDispatch, useSelector } from "react-redux";
import { getPopularVideos } from "../../redux/videopopular/videoPopularAction";

const Search = () => {
  const dispatch = useDispatch();
  const videos = useSelector((state) => state.videos);

  useEffect(() => {
    dispatch(getPopularVideos());
  }, []);

  return (
    <main>
      <section className="video_content grid">
        {videos.videos.map((video) => {
          console.log("video id:", video);
          return (
            <>
              <div key={video.id.videoId} className="video_items">
                <a href={`/watch/${video.id.videoId}`}>
                  <img src={video.snippet.thumbnails.high.url} alt=""></img>
                </a>
                <div className="details flex">
                  <div className="img">
                    <img src={video.snippet.thumbnails.high.url} alt=""></img>
                  </div>
                  <div className="heading">
                    <p>{video.snippet.title}</p>
                    <span>
                      {video.snippet.channelTitle}{" "}
                      <i className="fa fa-circle-check"></i>{" "}
                    </span>
                    <span>{video.snippet.publishedAt}</span>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </main>
  );
};

export default Search;

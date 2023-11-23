import React, { useState, useEffect } from "react";

function Youtube() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(
      "https://www.googleapis.com/youtube/v3/search?key=AIzaSyCLhuEmL6kALjg1c4PZs7HKNlPK0QFrat8&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=9"
    )
      .then((res) => res.json())
      .then((data) => {
        setVideos(data.items);
      });
  }, []);

  const videoWrappers = videos?.map((video, i) => {
    let vidId = video.id.videoId;
    let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
    const timeString = video.snippet.publishedAt;
    const date = new Date(timeString);
    const foramttedDate = date.toLocaleString();
    return (
      <div key={vidId} className="col-sm-12 col-md-4">
        <div className="singleVideoWrapper">
          <div className="videoThumbnail">
            <a href={vidLink} target="_blank">
              <img src={video.snippet.thumbnails.high.url} />
            </a>
          </div>

          <div className="videoInfoWrapper">
            <div className="videoTitle text-truncate">
              <a href={vidLink} target="_blank">
                {video.snippet.title}
              </a>
            </div>

            <div className="videoDesc text-truncate">
              {video.snippet.description}
            </div>
            <div className="videoDesc text-truncate">{foramttedDate}</div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="allVideosWrapper">
      <div className="container">
        <br />
        <br />
        <div className="title-wraper bold video-title-wrapper text-center">
          Latest Videos
        </div>

        <div className="row h-100 align-items-center justify-content-center text-center">
          {videoWrappers}
        </div>
      </div>
    </div>
  );
}

export default Youtube;

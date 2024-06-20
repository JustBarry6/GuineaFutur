import React from 'react';
import '../assets/styles/components/Videos.css';

function Videos() {
  const videos = [
    { title: 'Blockchain Basics', link: 'https://www.youtube.com/embed/link-to-video1' },
    { title: 'Governance Models', link: 'https://www.youtube.com/embed/link-to-video2' },
    { title: 'Sustainable Practices', link: 'https://www.youtube.com/embed/link-to-video3' },
  ];

  return (
    <div className="videos">
      {videos.map((video, index) => (
        <div key={index} className="card">
          <iframe
            width="100%"
            height="315"
            src={video.link}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <p>{video.title}</p>
        </div>
      ))}
    </div>
  );
}

export default Videos;

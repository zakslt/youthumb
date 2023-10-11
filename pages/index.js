import { useState } from "react";
import copy from "copy-to-clipboard";

const Index = () => {
  const [videoURL, setVideoURL] = useState("");
  const [thumbnailOptions, setThumbnailOptions] = useState([]);

  const getYouTubeThumbnail = (url) => {
    let regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
    let match = url.match(regExp);

    if (match && match[1].length === 11) {
      const videoURL = match[1];
      const thumbnailBaseUrl = "http://img.youtube.com/vi/";

      const options = [
        { resolution: "HD (1280x720)", code: "maxresdefault" },
        { resolution: "SD (640x480)", code: "sddefault" },
        { resolution: "Normal (480x360)", code: "hqdefault" },
        { resolution: "Medium (320x180)", code: "mqdefault" },
        { resolution: "Low (120x90)", code: "default" },
      ];

      const thumbnailOptions = options.map((option) => ({
        resolution: option.resolution,
        url: `${thumbnailBaseUrl}${videoURL}/${option.code}.jpg`,
      }));

      setThumbnailOptions(thumbnailOptions);
      setVideoURL("");
    } else {
      setThumbnailOptions([]);
    }
  };

  return (
    <style>
    p {
      font-size: 16px;
      line-height: 1.5;
      margin: 10px 0;
    padding:15px;
    }
  </style>
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">
          Youtube Thumbnail Downloader
        </h1>
        <p className="text-gray-600">
          Download 4k/HD quality thumbnails from YouTube videos and shorts. Fast-Reliable-High Quality
        </p>
      </header>
      <div className="text-center">
        <input
          type="text"
          className="w-full md:w-1/2 px-4 py-2 border rounded"
          placeholder="Enter YouTube URL"
          value={videoURL}
          onChange={(e) => setVideoURL(e.target.value)}
        />
        <button
          className="btn-blue mt-2"
          onClick={() => getYouTubeThumbnail(videoURL)}
        >
          Download Thumbnails
        </button>
      </div>
   <div>
          <p>🌟 Unlock the Power of Eye-Catching Thumbnails! 🌟</p>
          <p>
            Struggling to create captivating YouTube thumbnails that grab your audience's attention? Look no further! Welcome to the ultimate Thumbnail Downloader website that will transform your channel's visual appeal.
          </p>
          <p>🔥 Why Choose Our Thumbnail Downloader? 🔥</p>
          <p>🚀 Free & Easy to Use: Say goodbye to complicated software or expensive tools. Our Thumbnail Downloader is completely free and user-friendly, making it accessible to creators of all levels.</p>
          <p>💎 High-Quality Downloads: Download your favorite YouTube video thumbnails in high resolution, ensuring your channel looks stunning and professional.</p>
          <p>🌈 Endless Possibilities: Discover a world of creative possibilities with our vast collection of thumbnail options. Never run out of design ideas again.</p>
          <p>🕐 Save Time: We understand the importance of efficiency in content creation. Our Thumbnail Downloader allows you to save time, so you can focus on what you do best – making incredible videos!</p>
          <p>📈 Boost Engagement: An eye-catching thumbnail is the key to higher click-through rates and increased views. Elevate your channel's engagement and visibility with our service.</p>
          <p>🚫 No More Content Worries: If you've faced issues with low-value content on your website and AdSense rejection, our Thumbnail Downloader can be a game-changer. Enhance your content presentation with stunning thumbnails to attract a wider audience.</p>
          <p>🌐 Ready to Get Started? It's as easy as 1-2-3!</p>
          <ol>
            <li>Paste the YouTube video URL.</li>
            <li>Browse and select from a variety of thumbnail options.</li>
            <li>Click download and start enhancing your YouTube channel today!</li>
          </ol>
          <p>Join countless creators who have already discovered the benefits of visually appealing thumbnails. Don't let your channel's potential go unnoticed. Get started now and watch your YouTube journey soar to new heights!</p>
        </div>
      {thumbnailOptions.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Thumbnail Options</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {thumbnailOptions.map((option, index) => (
              <div key={index} className="thumbnail-option">
                <img src={option.url} alt={`Thumbnail ${index + 1}`} />
                <button
                  className="btn-blue mt-2"
                  onClick={() => copy(option.url)}
                >
                  Copy Image URL
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;

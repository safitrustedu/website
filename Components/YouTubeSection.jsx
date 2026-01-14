import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, ExternalLink, X } from 'lucide-react';

const YouTubeSection = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videos = [
    {
      id: 'qkWLyeSF5Oc',
      title: 'The Garage School - Our Story',
      thumbnail: `https://img.youtube.com/vi/qkWLyeSF5Oc/maxresdefault.jpg`,
      url: 'https://www.youtube.com/watch?v=qkWLyeSF5Oc'
    },
    {
      id: 'vUtVHcHW-ps',
      title: 'Student Life at TGS',
      thumbnail: `https://img.youtube.com/vi/vUtVHcHW-ps/maxresdefault.jpg`,
      url: 'https://www.youtube.com/watch?v=vUtVHcHW-ps'
    },
    {
      id: 'zaULPj7A-ik',
      title: 'Community Impact',
      thumbnail: `https://img.youtube.com/vi/zaULPj7A-ik/maxresdefault.jpg`,
      url: 'https://www.youtube.com/watch?v=zaULPj7A-ik'
    }
  ];

  const openVideo = (video) => {
    setSelectedVideo(video);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            See Our Impact in Action
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Watch stories from The Garage School and discover how education transforms lives
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative bg-gray-800 rounded-2xl overflow-hidden shadow-elegant hover:shadow-elegant-lg transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                  </div>
                </div>

                {/* External Link Icon */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <ExternalLink className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-teal-400 transition-colors duration-300">
                  {video.title}
                </h3>
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => openVideo(video)}
                    className="inline-flex items-center text-teal-400 hover:text-teal-300 font-medium transition-colors duration-300"
                  >
                    Watch Here
                    <Play className="ml-2 w-4 h-4" />
                  </button>
                  <a
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-400 hover:text-gray-300 text-sm transition-colors duration-300"
                  >
                    YouTube
                    <ExternalLink className="ml-1 w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Click overlay for embedded player */}
              <button
                onClick={() => openVideo(video)}
                className="absolute inset-0 z-10"
                aria-label={`Watch ${video.title}`}
              />
            </motion.div>
          ))}
        </div>

        {/* Channel Link */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://www.youtube.com/@thegarageschool8399"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-xl transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            <Play className="mr-3 w-5 h-5" fill="currentColor" />
            Visit Our YouTube Channel
            <ExternalLink className="ml-2 w-5 h-5" />
          </a>
        </motion.div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative w-full max-w-4xl mx-4 bg-gray-900 rounded-2xl overflow-hidden shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={closeVideo}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors duration-300"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Video Player */}
            <div className="aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo.id}?autoplay=1&rel=0`}
                title={selectedVideo.title}
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Video Info */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">{selectedVideo.title}</h3>
              <div className="flex items-center justify-between">
                <p className="text-gray-400">The Garage School</p>
                <a
                  href={selectedVideo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-red-400 hover:text-red-300 font-medium transition-colors duration-300"
                >
                  Watch on YouTube
                  <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Click outside to close */}
          <div
            className="absolute inset-0 -z-10"
            onClick={closeVideo}
          />
        </div>
      )}
    </section>
  );
};

export default YouTubeSection;
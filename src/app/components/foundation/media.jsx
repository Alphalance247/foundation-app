// components/MediaSection.js
"use client";
// components/MediaSection.js
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FiPlayCircle } from "react-icons/fi";

const MediaSection = () => {
  const [activeTab, setActiveTab] = useState("photos");

  const photos = [
    {
      id: 1,
      src: "/assets/foundation/bakin.jpg",
      caption: "Youth Empowerment",
    },
    {
      id: 2,
      src: "/assets/foundation/dye.jpg",
      caption: "Community Service",
    },
    // {
    //   id: 3,
    //   src: "/assets/foundation/educate.jpg",
    //   caption: "Skills Training",
    // },
    {
      id: 4,
      src: "/assets/foundation/menstrual.jpg",
      caption: "Food Distribution",
    },
    {
      id: 5,
      src: "/assets/foundation/1.jpg",
      caption: "Food Distribution",
    },
    {
      id: 6,
      src: "/assets/foundation/2.jpg",
      caption: "Food Distribution",
    },
    {
      id: 7,
      src: "/assets/foundation/3.jpg",
      caption: "Food Distribution",
    },
    {
      id: 8,
      src: "/assets/foundation/4.jpg",
      caption: "Food Distribution",
    },
    {
      id: 9,
      src: "/assets/foundation/5.jpg",
      caption: "Food Distribution",
    },
    {
      id: 10,
      src: "/assets/foundation/6.jpg",
      caption: "Food Distribution",
    },
    {
      id: 11,
      src: "/assets/foundation/7.jpg",
      caption: "Food Distribution",
    },
    {
      id: 12,
      src: "/assets/foundation/8.jpg",
      caption: "Food Distribution",
    },
  ];

  const videos = [
    {
      id: 1,
      src: "/assets/video/video3.mp4",
      title: "Foundation Overview",
    },
    {
      id: 2,
      src: "/assets/video/video2.mp4",
      title: "Success Stories",
    },
    {
      id: 3,
      src: "/assets/video/video4.mp4",
      title: "Success Stories",
    },
    {
      id: 4,
      src: "/assets/video/video5.mp4",
      title: "Success Stories",
    },
    {
      id: 5,
      src: "/assets/video/video6.mp4",
      title: "Success Stories",
    },
    {
      id: 6,
      src: "/assets/video/video7.mp4",
      title: "Success Stories",
    },
  ];

  return (
    <section
      className="py-16 bg-gradient-to-b from-white to-gray-100"
      id="media"
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-800 mb-4">
            Media Highlights
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            A glimpse into the stories, memories, and achievements we’re proud
            of.
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="flex justify-center mb-8">
          <button
            className={`px-6 py-2 rounded-full font-semibold text-lg transition-all ${
              activeTab === "photos"
                ? "bg-[#F4A261] text-white shadow-lg"
                : "bg-gray-200 text-gray-600 hover:bg-gray-300"
            }`}
            onClick={() => setActiveTab("photos")}
          >
            Photos
          </button>
          <button
            className={`ml-4 px-6 py-2 rounded-full font-semibold text-lg transition-all ${
              activeTab === "videos"
                ? "bg-[#2A9D8F] text-white shadow-lg"
                : "bg-gray-200 text-gray-600 hover:bg-gray-300"
            }`}
            onClick={() => setActiveTab("videos")}
          >
            Videos
          </button>
        </div>

        {/* Content Section */}
        <AnimatePresence exitBeforeEnter>
          {activeTab === "photos" && (
            <motion.div
              key="photos"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {photos.map((photo, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-lg  hover:scale-105 transition-transform duration-300"
                >
                  <Image
                    src={photo.src}
                    alt={`Gallery Image ${index + 1}`}
                    width={250}
                    height={150}
                    className=" w-full h-fit"
                  />
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === "videos" && (
            <motion.div
              key="videos"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {videos.map((video, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-lg shadow-lg"
                >
                  <video width="100%" controls className="h-[300px]">
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default MediaSection;

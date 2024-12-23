import React, { useState } from "react";
import { X } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const images = [
    {
      src: "https://storage.googleapis.com/a1aa/image/4cbdcb0d-ae93-4ff1-9b15-594b413ec221.jpeg",
      title: "AI Innovation Expo 2024: Discover the Future of AI-Powered Solutions",
      description: "Join us for the AI Innovation Expo 2024 where AI-Solutions unveils the latest in cutting-edge AI technology. Experience live demonstrations of our state-of-the-art AI-powered tools designed to revolutionize businesses across industries. This event offers you a unique opportunity to witness firsthand how AI can enhance productivity, innovation, and operational efficiency. Network with industry leaders, experts, and like-minded professionals while exploring the future of artificial intelligence. Don’t miss out on the chance to be part of the next wave of digital transformation!",
    },
    {
      src: "https://storage.googleapis.com/a1aa/image/1de8d750-9bf8-49fc-883e-3fc405a52f62.jpeg",
      title: "AI-Solutions Hackathon: Innovate, Code, Create!",
      description: "Get ready to unleash your creativity at the AI-Solutions Hackathon, a one-of-a-kind collaborative event that invites developers and AI enthusiasts to dive into our platforms and create groundbreaking extensions or applications! Whether you're a coding expert or an AI enthusiast, this event is your chance to work alongside like-minded innovators, solve real-world challenges, and push the boundaries of what's possible with AI. Don’t miss the chance to showcase your skills, collaborate with the best, and turn your ideas into reality. Join us and be part of the next big AI breakthrough!",
    },
    {
      src: "https://storage.googleapis.com/a1aa/image/779d8a86-c403-4493-99db-18002f8d3fcd.jpeg",
      title: "Tech Leaders Meetup: Shaping the Future of AI in the Digital Workplace",
      description: "Join industry leaders and experts at the Tech Leaders Meetup for an exclusive panel discussion on how AI is transforming the digital employee experience. Discover key insights on AI’s role in enhancing productivity, streamlining workflows, and fostering innovation in the workplace. This is your chance to engage with thought leaders, network with professionals, and explore the future of AI-driven workplace solutions. Don’t miss the opportunity to be part of the conversation that’s shaping the future of business technology!",
    },
    {
      src: "https://storage.googleapis.com/a1aa/image/2f1fbbd3-60e7-450c-9b1f-b578de4f7c8e.jpeg",
      title: "AI-Solutions Product Launch Event: Unveiling the Future of Business Technology",
      description: "Join us for the highly anticipated AI-Solutions Product Launch Event, where we will unveil our latest software tool designed to revolutionize business processes! Experience an inspiring keynote address and witness a live showcase of the tool's groundbreaking features and benefits. Discover how this innovative solution can elevate your business efficiency and drive smarter decisions. Be part of the excitement and see how AI-Solutions is shaping the future of the digital workplace. Don't miss your chance to be the first to explore the next level of business transformation!",
    },
    {
      src: "https://storage.googleapis.com/a1aa/image/a6054313-2a90-48ee-9bd9-084cdd07adf8.jpeg",
      title: "AI-Powered Business Solutions Fair: Revolutionizing Your Business with AI",
      description: "Step into the future of business innovation at the AI-Powered Business Solutions Fair! Experience firsthand how AI-Solutions' cutting-edge tools are transforming industries with interactive demos, real-world success stories, and engaging booths. Discover the power of AI in driving efficiency, streamlining operations, and delivering smarter solutions for your business. Whether you're looking to optimize workflows or explore the next frontier of digital transformation, this event is your gateway to the future. Don’t miss out on the opportunity to see AI in action and network with industry experts!",
    },
    {
      src: "https://storage.googleapis.com/a1aa/image/b6890bab-d5e9-4080-8a20-122c726e897d.jpeg",
      title: "Future of Work Summit: Redefining the Workplace with AI",
      description: "Step into the future at the Future of Work Summit, where we explore how AI is transforming workplace dynamics, boosting productivity, and shaping the next generation of work environments. This conference brings together thought leaders, industry experts, and innovators to discuss the cutting-edge technologies that are revolutionizing the workplace. Gain insights into how AI is enhancing employee experiences, optimizing workflows, and driving efficiency across industries. Don’t miss your chance to be part of this forward-thinking event and stay ahead of the curve in the evolving world of work!",
    },
  ];

  return (
    <div>
      <section className="container mbr-fullscreen cid-uuGhZ50C2O">
        <div className=" py-12  mx-auto ">
          <div className="block">
            <div className="row justify-content-center">
              <div className="col-12 content-head">
                <div className="mbr-section-head mb-5">
                  <h4 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
                    <strong>Discover Our Events</strong>
                  </h4>
                </div>
              </div>
            </div>
            <div className="columns-1 md:columns-2 xl:columns-3 gap-7">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="break-inside-avoid mb-8 cursor-pointer"
                  onClick={() => handleImageClick(image)}
                >
                  <img
                    className="h-auto max-w-full rounded-lg"
                    src={image.src}
                    alt={image.title}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[999] grid place-items-center bg-black bg-opacity-60 backdrop-blur-lg"
          onClick={handleCloseModal}
        >
          <div
            className="relative m-6 lg:w-6/12 rounded-lg"
            // eslint-disable-next-line jsx-a11y/aria-role
            role="modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative p-2 mt-10">
              <div className="flex items-center justify-end">
                <button
                  className="rounded-full p-2 text-center text-sm text-white hover:bg-[#4FD6C9] hover:text-white hover:ease-linear"
                  onClick={handleCloseModal}
                >
                  <X />
                </button>
              </div>
              <img
                alt={selectedImage.title}
                className="h-[20rem] lg:w-[70%] mx-auto object-cover object-center"
                src={selectedImage.src}
              />
              <div className="mt-4 text-center">
                <h3 className="text-xl font-semibold text-white">
                  {selectedImage.title}
                </h3>
                <p className="text-sm text-gray-300">
                  {selectedImage.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
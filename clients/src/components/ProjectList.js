import React from "react";

const ProjectList = () => {
  const projects = [
    {
      id: 1,
      title: "ChronoMind AI: Revolutionizing Time Management with Smart Automation",
      date: "2024-11-20",
      // description:
      //   "Discover how our AI solutions are transforming workplaces into digital wonderlands!",
      feedback: "Our employees love the new AI-driven experience!",
      image: "https://storage.googleapis.com/a1aa/image/8e291ca4-7ed6-4d2e-b76b-6e14a41809cd.jpeg",
    },
    {
      id: 2,
      title: "SentientFlow AI: Meet Your New Virtual Assistant for Seamless Automation",
      date: "2024-11-19",
      // description: "Say goodbye to mundane tasks! Our virtual assistants are here to save the day!",
      feedback: "Best virtual assistant I've ever used!",
      image: "https://storage.googleapis.com/a1aa/image/c4134a18-0d26-48b6-9eba-04c3980fb101.jpeg",
    },
    {
      id: 3,
      title: "VaultGuard AI: Securing Your Data with Intelligent Protection",
      date: "2024-11-18",
      // description: "Get your ideas off the ground without breaking the bank!",
      feedback: "Helped me kickstart my project with ease.",
      image: "https://storage.googleapis.com/a1aa/image/b8fa2bfb-3ee2-4634-bbab-0895ed304dcd.jpeg",
    },
    {
      id: 4,
      title: "NeuroSphere AI: Transforming Decision-Making with Smarter Insights",
      date: "2024-11-17",
      // description:
      //   "Hear from our clients about their jaw-dropping transformations with our AI magic!",
      feedback: "Our business doubled revenue thanks to these AI solutions!",
      image: "https://storage.googleapis.com/a1aa/image/ab1c2900-cba0-42b7-8d7f-488abbafd12c.jpeg",
    },
    {
      id: 5,
      title: "MedEon AI: AI-Driven Healthcare Solutions for a Healthier Tomorrow",
      date: "2024-11-12",
      // description:
      //   "Discover how our AI solutions are transforming workplaces into digital wonderlands!",
      feedback: "Our employees love the new AI-driven experience!",
      image: "https://storage.googleapis.com/a1aa/image/e7619196-bdd4-4c00-9a12-0ba781a76f6a.jpeg",
    },
    {
      id: 6,
      title: "QuantumSynth AI: Accelerating Innovation with Quantum-Powered AI",
      date: "2024-11-16",
      // description: "Say goodbye to mundane tasks! Our virtual assistants are here to save the day!",
      feedback: "Best virtual assistant I've ever used!",
      image: "https://storage.googleapis.com/a1aa/image/0268f24b-5303-4daf-aba2-f3d8554a0d53.jpeg",
    },
    {
      id: 7,
      title: "OmniGuard AI: Unmatched Protection, Always One Step Ahead",
      date: "2024-11-15",
      feedback: "Helped me kickstart my project with ease.",
      image: "https://storage.googleapis.com/a1aa/image/c016501c-4996-4097-9d98-f46cc3b5aad7.jpeg",
    },
    {
      id: 8,
      title: "DocuVerse AI: Effortless Document Management, Powered by AI",
      date: "2024-11-10",
      feedback: "Our business doubled revenue thanks to these AI solutions!",
      image: "https://storage.googleapis.com/a1aa/image/ed904b33-07ec-442d-898c-3f5f78f6a330.jpeg",
    },
  ];

  return (
    <section className="container mbr-fullscreen cid-uuGhZ51Si4  bg-[#FFF4E7]">
      <div className=" py-12  mx-auto ">
        <div className="block">
          <div className="row justify-content-center">
            <div className="col-12 content-head">
              <div className="mbr-section-head mb-5">
                <h4 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
                  <strong>Impactful Solutions By Industry</strong>
                </h4>
              </div>
            </div>
          </div>
          <div className="row">
            {projects.map((project) => (
              <div
                key={project.id}
                className="item features-image col-12 col-md-6 col-lg-3"
              >
                <div className="item-wrapper">
                  <div className="item-img mb-3">
                    <img src={project.image} alt={project.title} title="" />
                  </div>
                  <div className="item-content align-left">
                    <h5 className="item-title mbr-fonts-style mt-0 mb-2 display-5 text-3xl">
                      <strong>{project.title}</strong>
                    </h5>
                    <p className="mbr-text mbr-fonts-style mb-3 display-7">
                      {project.date}
                    </p>
                    <p className="mbr-text mbr-fonts-style mb-3 display-7">
                      {project.description}
                    </p>
                    <div className="mbr-section-btn item-footer">
                      {/* <a
                        href={`/projects/${project.id}`}
                        className="btn item-btn btn-primary display-7"
                      >
                        Explore
                      </a> */}
                      <a
                        href={`/projectdetails/${project.id}`} // Use dynamic path
                        className="btn item-btn btn-primary display-7"
                      >
                        Explore
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectList;

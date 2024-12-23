import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Review from "./Review"; // Importing the Review component
const ProjectsDetails = ({ rating }) => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("description");
  // Simulating project details (could be fetched from an API)

  const projectDetails = {
    1: {
      title: "ChronoMind AI: Revolutionizing Time Management with Smart Automation",
      description:
        "ChronoMind AI is your personal time management assistant, utilizing advanced machine learning to optimize scheduling, automate reminders, and predict your productivity patterns. Whether it's managing meetings, planning tasks, or offering time-saving suggestions, ChronoMind AI ensures you never miss a beat in your busy day, helping you maximize efficiency and focus on what matters most.",

      feedback: "Our employees love the new AI-driven experience!",
      image: "https://storage.googleapis.com/a1aa/image/8e291ca4-7ed6-4d2e-b76b-6e14a41809cd.jpeg",
      features: ["Automates task prioritization and calendar management using AI-driven insights.", "Provides real-time recommendations to improve productivity and eliminate time wastage.", "Delivers context-aware notifications tailored to individual habits and goals."],
      reviews: [
        {
          reviewerName: "Kristin Watson",
          reviewDate: "March 14, 2022",
          reviewText: "ChronoMind AI has made managing my time effortless and more efficient.",
          initialRating: 4,
        },
        {
          reviewerName: "Jenny Wilson",
          reviewDate: "January 28, 2023",
          reviewText: "A game-changer for organizing tasks and boosting productivity.",
          initialRating: 5,
        },
        {
          reviewerName: "Michael Brown",
          reviewDate: "May 10, 2024",
          reviewText: "Smart automation with ChronoMind AI keeps me on track and focused.",
          initialRating: 4,
        },
      ],
      support: {
        contactEmail: "support@aiworkplace.com",
        contactNumber: "+1 800 123 4567",
        faqs: [
          "How does ChronoMind AI optimize time management?",
          "Can ChronoMind AI integrate with my calendar and scheduling tools?",
          "Is ChronoMind AI customizable to fit specific productivity needs?",
        ],
      },
    },
    2: {
      title: "SentientFlow AI: Meet Your New Virtual Assistant for Seamless Automation",
      description:
        "Our new updated AI-Powered Virtual Assistant is a game-changer in enhancing the digital employee experience. By integrating with your existing tools, it simplifies task management and enhances productivity. Its AI-driven capabilities anticipate your needs, automating repetitive tasks and saving valuable time. SentientFlow AI learns from your preferences, offering personalized solutions for a more efficient experience. With real-time support and smart integrations, it transforms how you work, making automation effortless.",


      feedback: "Best virtual assistant I've ever used!",
      image: "https://storage.googleapis.com/a1aa/image/c4134a18-0d26-48b6-9eba-04c3980fb101.jpeg",
      features: [" Streamlines repetitive tasks with intelligent workflows.", "Connects effortlessly with apps and tools for unified management.", "Provides instant support and insights anytime, anywhere."],
      reviews: [
        {
          reviewerName: "Bessie Cooper",
          reviewDate: "February 11, 2022",
          reviewText: "SentientFlow AI has made automation seamless, boosting my efficiency instantly.",
          initialRating: 5,
        },
        {
          reviewerName: "Robert Fox",
          reviewDate: "June 15, 2023",
          reviewText: "This virtual assistant handles tasks effortlessly, allowing me to focus on what matters.",
          initialRating: 4,
        },
        {
          reviewerName: "Angela Peterson",
          reviewDate: "August 9, 2023",
          reviewText: "SentientFlow AI simplifies my workflow and enhances productivity like never before.",
          initialRating: 5,
        },
      ],
      support: {
        contactEmail: "support@virtualassistant.com",
        contactNumber: "+1 888 987 6543",
        faqs: [
          "How does SentientFlow AI automate tasks for businesses?",
          "Can SentientFlow AI integrate with existing workflow systems?",
          "Is SentientFlow AI customizable for different business needs?",
        ],
      },
    },
    3: {
      title: "VaultGuard AI: Securing Your Data with Intelligent Protection",
      description: "aultGuard AI offers robust, AI-powered protection for your sensitive data, ensuring it stays secure from evolving cyber threats. With advanced encryption techniques and real-time threat detection, it safeguards your information across multiple platforms. The intelligent access control system ensures that only authorized users can access critical data. VaultGuard AI continuously learns from new security patterns, adapting to emerging risks. It provides peace of mind with comprehensive, automated data protection for businesses and individuals alike.",

      feedback: "Helped me kickstart my project with ease.",
      image: "https://storage.googleapis.com/a1aa/image/b8fa2bfb-3ee2-4634-bbab-0895ed304dcd.jpeg",
      features: ["Safeguards data with cutting-edge cryptographic algorithms.", "Identifies and neutralizes security risks in real time.", "Ensures secure data access with AI-powered authentication."],
      reviews: [
        {
          reviewerName: "Samantha Lee",
          reviewDate: "July 18, 2023",
          reviewText: "VaultGuard AI has significantly boosted our confidence in data security with its advanced protection.",
          initialRating: 5,
        },
        {
          reviewerName: "Jomie Don",
          reviewDate: "October 5, 2023",
          reviewText: "The real-time threat detection from VaultGuard AI has saved us from potential breaches.",
          initialRating: 4,
        },
        {
          reviewerName: "Jenny Doe",
          reviewDate: "October 5, 2023",
          reviewText: "VaultGuard AI is reliable, easy to use, and provides peace of mind for our data security.",
          initialRating: 4,
        },
      ],
      support: {
        contactEmail: "support@prototypingsolutions.com",
        contactNumber: "+1 900 654 3210",
        faqs: [
          "How does VaultGuard AI protect sensitive data?",
          "What security features does VaultGuard AI offer for real-time threat detection?",
          "Can VaultGuard AI integrate with existing data security systems?",
        ],
      },
    },
    4: {
      title: "NeuroSphere AI: Transforming Decision-Making with Smarter Insights",
      description:
        "NeuroSphere AI empowers organizations to make better decisions through advanced data analysis and predictive insights. By utilizing AI-driven models, it uncovers trends and provides real-time recommendations for informed decision-making. Its customizable dashboards make complex data easy to understand, allowing for quick and accurate actions. NeuroSphere AI adapts to various industries, from finance to healthcare, optimizing operations and strategy. With smarter insights, it transforms decision-making, driving innovation and business growth.",

      feedback: "Our business doubled revenue thanks to these AI solutions!",
      image: "https://storage.googleapis.com/a1aa/image/ab1c2900-cba0-42b7-8d7f-488abbafd12c.jpeg",
      features: ["Anticipates trends with advanced data modeling.", "Delivers actionable recommendations instantly.", "Visualizes data for intuitive and informed decision-making."],
      reviews: [
        {
          reviewerName: "Emily White",
          reviewDate: "November 12, 2023",
          reviewText: "NeuroSphere AI has completely transformed our decision-making with its insightful data analysis.",
          initialRating: 5,
        },
        {
          reviewerName: "Chris Martin",
          reviewDate: "December 8, 2022",
          reviewText: "The smart insights from NeuroSphere AI help us make quicker, more informed business choices.",
          initialRating: 4,
        },
        {
          reviewerName: "Michael Brown",
          reviewDate: "May 10, 2023",
          reviewText: "Thanks to NeuroSphere AI, our team now has the tools to make smarter, data-driven decisions every day.",
          initialRating: 4,
        },
      ],
      support: {
        contactEmail: "support@aistories.com",
        contactNumber: "+1 700 321 0987",
        faqs: [
          "How does NeuroSphere AI enhance decision-making?",
          "What type of data does NeuroSphere AI analyze for insights?",
          "Is NeuroSphere AI customizable for different industries?",
        ],
      },
    },
    5: {
      title: "MedEon AI: AI-Driven Healthcare Solutions for a Healthier Tomorrow",
      description:
        "MedEon AI leverages the power of artificial intelligence to revolutionize healthcare with personalized and predictive solutions. By analyzing patient data, it tailors treatment plans to individual needs, enhancing the accuracy of care. Its predictive diagnostic tools help identify potential health risks before they become critical, enabling early intervention. MedEon AI streamlines administrative tasks, improving overall efficiency in healthcare facilities. The platform is designed to support healthcare professionals with data-driven insights, optimizing patient outcomes. With MedEon AI, the future of healthcare is smarter, more efficient, and focused on a healthier tomorrow.",

      feedback: "Our employees love the new AI-driven experience!",
      image: "https://storage.googleapis.com/a1aa/image/e7619196-bdd4-4c00-9a12-0ba781a76f6a.jpeg",
      features: ["Tailors treatment plans using patient-specific data analysis.", "Identifies potential health risks with AI-powered predictions.", "Optimizes administrative and clinical processes for efficiency."],
      reviews: [
        {
          reviewerName: "Romlee win",
          reviewDate: "March 14, 2024",
          reviewText: "MedEon AI has improved patient care with personalized, data-driven insights.",
          initialRating: 4,
        },
        {
          reviewerName: "Katie Blanka",
          reviewDate: "January 28, 2024",
          reviewText: "With MedEon AI, we can predict health risks earlier and improve outcomes.",
          initialRating: 5,
        },
        {
          reviewerName: "kareen Brown",
          reviewDate: "May 10, 2024",
          reviewText: "MedEon AI has streamlined our workflow and made healthcare more efficient.",
          initialRating: 4,
        },
      ],
      support: {
        contactEmail: "support@aiworkplace.com",
        contactNumber: "+1 800 123 4567",
        faqs: [
          "How does MedEon AI improve patient care?",
          "Can MedEon AI predict health risks and outcomes?",
          "Is MedEon AI compatible with existing healthcare systems?",
        ],
      },
    },
    6: {
      title: "QuantumSynth AI: Accelerating Innovation with Quantum-Powered AI",
      description:
        "QuantumSynth AI combines the power of quantum computing with advanced AI to accelerate innovation and solve complex problems at unprecedented speeds. By enhancing simulations and providing scalable solutions, it empowers industries to push the boundaries of research, development, and technological advancement. Its ability to process vast datasets and optimize algorithms leads to faster breakthroughs in fields like healthcare, finance, and energy. With QuantumSynth AI, organizations can unlock new levels of efficiency and performance, driving transformative change across industries.",


      feedback: "Best virtual assistant I've ever used!",
      image: "https://storage.googleapis.com/a1aa/image/0268f24b-5303-4daf-aba2-f3d8554a0d53.jpeg",
      features: ["Solves complex problems with unparalleled speed", "Enhances simulations for cutting-edge research and development.", "Adapts to diverse industries for transformative innovation."],
      reviews: [
        {
          reviewerName: "Cooper Roy",
          reviewDate: "February 11, 2023",
          reviewText: "QuantumSynth AI has supercharged our innovation process.",
          initialRating: 5,
        },
        {
          reviewerName: "Samantha wells",
          reviewDate: "June 15, 2023",
          reviewText: "QuantumSynth AI accelerates product development with powerful insights.",
          initialRating: 4,
        },
        {
          reviewerName: "Rory Nadeson",
          reviewDate: "August 9, 2022",
          reviewText: "A game-changer, driving faster and more efficient innovation.",
          initialRating: 5,
        },
      ],
      support: {
        contactEmail: "support@virtualassistant.com",
        contactNumber: "+1 888 987 6543",
        faqs: [
          "How does QuantumSynth AI use quantum technology to drive innovation?",
          "What industries can benefit from QuantumSynth AI’s capabilities?",
          "Is QuantumSynth AI scalable for large enterprises?",
        ],
      },
    },
    7: {
      title: "OmniGuard AI: Unmatched Protection, Always One Step Ahead",
      description: "OmniGuard AI offers advanced, AI-driven cybersecurity protection that stays ahead of evolving threats. By proactively detecting and neutralizing risks in real time, it ensures comprehensive coverage for networks, data, and devices, delivering dynamic and adaptive defense to keep your systems secure at all times.",

      feedback: "Helped me kickstart my project with ease.",
      image: "https://storage.googleapis.com/a1aa/image/c016501c-4996-4097-9d98-f46cc3b5aad7.jpeg",
      features: ["FAnticipates and neutralizes cyber risks in real time.", "Safeguards networks, data, and devices seamlessly.", "s dynamically to evolving security challenges."],
      reviews: [
        {
          reviewerName: "Alan lundy",
          reviewDate: "July 18, 2023",
          reviewText: "OmniGuard AI provides unparalleled protection, keeping us one step ahead of threats.",
          initialRating: 5,
        },
        {
          reviewerName: "Jennifer Aniston",
          reviewDate: "October 5, 2023",
          reviewText: "With OmniGuard AI, we feel confident that our security is always ahead of the curve.",
          initialRating: 4,
        },
        {
          reviewerName: "Sonny side",
          reviewDate: "december 21, 2023",
          reviewText: "OmniGuard AI has been a game-changer, offering unmatched security and peace of mind.",
          initialRating: 4,
        },
      ],
      support: {
        contactEmail: "support@prototypingsolutions.com",
        contactNumber: "+1 900 654 3210",
        faqs: [
          "What makes OmniGuard AI different from other security solutions ?",
          "How does OmniGuard AI ensure real-time threat detection?",
          "Can OmniGuard AI integrate with my existing security infrastructure?",
        ],
      },
    },
    8: {
      title: "DocuVerse AI: Effortless Document Management, Powered by AI",
      description:
        "DocuVerse AI is an intelligent document management solution that leverages AI to simplify file organization, automate workflows, and enhance collaboration. With features like smart search, automated filing, and secure sharing, it streamlines document handling for businesses, ensuring efficiency, accessibility, and robust data protection.",

      feedback: "Our business doubled revenue thanks to these AI solutions!",
      image: "https://storage.googleapis.com/a1aa/image/ed904b33-07ec-442d-898c-3f5f78f6a330.jpeg",
      features: ["Quickly locates documents with AI-powered indexing.", "Organizes files intelligently based on content and context.", "Enables secure sharing and real-time editing."],
      reviews: [
        {
          reviewerName: "Freya Houdini",
          reviewDate: "November 12, 2023",
          reviewText: "DocuVerse AI has made document management effortless and incredibly efficient.",
          initialRating: 5,
        },
        {
          reviewerName: "Rony Anderson",
          reviewDate: "December 8, 2023",
          reviewText: "DocuVerse AI has made document management effortless and incredibly efficient.",
          initialRating: 4,
        },
        {
          reviewerName: "Chris Jenner",
          reviewDate: "june 8, 2023",
          reviewText: "DocuVerse AI has streamlined our document workflows, saving us time and reducing errors.",
          initialRating: 4,
        },
      ],
      support: {
        contactEmail: "support@aistories.com",
        contactNumber: "+1 700 321 0987",
        faqs: [
          "What is DocuVerse AI ?",
          "Is DocuVerse AI secure?",
          "Can DocuVerse AI integrate with other tools?",
        ],
      },
    },
  };

  const project = projectDetails[id];

  if (!project) {
    return <p>Project not found.</p>;
  }

  return (
    <section className="container mbr-fullscreen bg-[#fff4e7]">
      <div className=" py-12 mx-auto ">
        {/* Breadcrumb Navigation */}
        <nav className="text-sm text-gray-500 py-14">
          <a href="/" className="hover:underline">
            <span>Home</span>
          </a>
          <a href="/product" className="hover:underline">
            / <span>Products</span>
          </a>
          / <span>Product Details</span>
        </nav>

        <div className="lg:flex block">
          {/* Product Images */}
          <div className="lg:w-3/4 ">
            <div className="mb-4">
              <img
                src={project.image}
                alt={project.title} // You can use the project title as the alt text for better accessibility
                className="border p-1"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="w-2/3 pl-8">
            <h1 className="lg:text-4xl font-semibold mb-4">{project.title}</h1>

            <div className="mb-4">
              <h2 className="font-semibold mb-2">Features</h2>
              <ul className="list-disc list-inside text-gray-700">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            {/* Tab Navigation */}
            <div className="mt-8">
              <div className="border-b border-gray-300 mb-4">
                {["description", "reviews", "support"].map((tab) => (
                  <button
                    key={tab}
                    className={`text-gray-700 font-semibold pb-2 mr-4 ${activeTab === tab ? "border-b-2 border-blue-600" : ""
                      }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              {activeTab === "description" && (
                <div>
                  <p className="text-gray-700">{project.description}</p>
                </div>
              )}

              {activeTab === "reviews" && (
                <div>
                  <h2 className="font-semibold text-lg mb-4">
                    Customer Reviews
                  </h2>
                  {project.reviews && project.reviews.length > 0 ? (
                    project.reviews.map((review, index) => (
                      <Review
                        key={index}
                        reviewerName={review.reviewerName}
                        reviewDate={review.reviewDate}
                        reviewText={review.reviewText}
                        initialRating={review.initialRating}
                      />
                    ))
                  ) : (
                    <p className="text-gray-700">
                      No reviews available for this project.
                    </p>
                  )}
                </div>
              )}

              {activeTab === "support" && project && (
                <div>
                  <h2 className="text-xl font-semibold mb-4">Support</h2>

                  <p className="text-gray-700 mb-4">
                    Need help? You can contact our support team for assistance
                    with the product.
                  </p>

                  <div className="mb-6">
                    <h3 className="font-semibold text-lg">Contact Us</h3>
                    <p>
                      Email:{" "}
                      <a
                        href={`mailto:${project.support.contactEmail}`}
                        className="text-blue-600"
                      >
                        {project.support.contactEmail}
                      </a>
                    </p>
                    <p>
                      Phone:{" "}
                      <a
                        href={`tel:${project.support.contactNumber}`}
                        className="text-blue-600"
                      >
                        {project.support.contactNumber}
                      </a>
                    </p>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-semibold text-lg">
                      Frequently Asked Questions
                    </h3>
                    <ul className="list-disc list-inside text-gray-700">
                      {project.support.faqs.map((faq, index) => (
                        <li key={index} className="mb-2">
                          {faq}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default ProjectsDetails;

import React from "react";
import { useParams } from "react-router-dom";

const LatestProductDetails = () => {
  const { id } = useParams();

  const productDetails = {
    1: {
      title: "InnoBot",
      description:
        "We are thrilled to unveil InnoBot, our latest AI-powered solution designed to revolutionize automation and innovation in your business. InnoBot seamlessly integrates with your existing systems, automating repetitive tasks to free up time for more impactful work. With real-time insights and intelligent data analysis, it helps drive informed decision-making. This product is fully customizable, adapting to your unique business needs and scaling as your company grows. InnoBot empowers your team to work more efficiently, boost productivity, and unlock new levels of innovation, ensuring your business stays ahead in today’s competitive landscape.",
      image:
        "https://storage.googleapis.com/a1aa/image/135b659e-ffcc-4fc2-8ed8-9fc10e170cf5.jpeg",
    },
    2: {
      title: "PrototyperAI",
      description:
        "We are excited to introduce PrototyperAI, our latest innovation designed to revolutionize the prototyping process. PrototyperAI combines the power of AI and automation to streamline the creation of prototypes, allowing businesses to rapidly develop, test, and refine ideas with unmatched efficiency. Key features include intelligent design suggestions, real-time feedback, and seamless integration with existing development tools. With PrototyperAI, you can accelerate your product development cycle, reduce costs, and bring your ideas to life faster and more effectively. This cutting-edge solution is the perfect companion for teams looking to innovate and stay ahead in today’s fast-paced market.",
      image:
        "https://storage.googleapis.com/a1aa/image/b8d73db3-82b9-45a9-b378-ed857801b370.jpeg",
    },
    3: {
      title: "Engage360",
      description:
        "We are excited to introduce Engage360, our cutting-edge solution designed to enhance customer engagement and drive business growth. Engage360 provides a comprehensive, AI-driven platform that enables seamless communication across multiple channels, offering personalized experiences for every customer interaction. With features like real-time analytics, automated workflows, and smart insights, Engage360 helps businesses understand customer behavior, optimize engagement strategies, and improve retention. This all-in-one platform is built to scale with your business, ensuring continuous improvement in customer relationships and overall satisfaction. Empower your team and elevate your customer experience with Engage360.",
      image:
        "https://storage.googleapis.com/a1aa/image/7248402b-a4cc-4a51-96d2-37100024f16f.jpeg",
    },
    4: {
      title: "InsightFlow",
      description:
        "We are proud to introduce InsightFlow, our latest product designed to transform how businesses harness the power of data. InsightFlow combines advanced AI and analytics to provide real-time insights that drive smarter decision-making. With features like intuitive data visualization, customizable dashboards, and predictive analytics, InsightFlow makes complex data easy to understand and act upon. It seamlessly integrates with your existing systems, enabling teams to access valuable insights quickly and efficiently. Whether you're optimizing operations or identifying new opportunities, InsightFlow empowers your business to stay ahead with data-driven strategies.",
      image:
        "https://storage.googleapis.com/a1aa/image/4338a643-69ff-472c-8b5b-f5d00858f703.jpeg",
    },
  };
  const product = productDetails[id];

  if (!product) {
    return <p>product not found.</p>;
  }
  return (
    <section className="container mbr-fullscreen bg-[#fff4e7]">
      <div className=" py-12 mx-auto  ">
        {/* Breadcrumb Navigation */}
        <nav className="text-sm text-gray-500 py-14">
          <a href="/" className="hover:underline">
            <span>Home</span>
          </a>
          / <span>Product Details</span>
        </nav>

        <div className="lg:flex block">
          {/* Product Images */}
          <div className="lg:w-3/4">
            <div className="mb-4">
              <img
                src={product.image}
                alt={product.title} // You can use the project title as the alt text for better accessibility
                className="border p-1"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="w-full justify-center text-justify lg:pl-8">
            <h1 className="lg:text-4xl font-semibold mb-4">{product.title}</h1>
            <div className="lg:text-2xl mb-4">{product.description}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestProductDetails;
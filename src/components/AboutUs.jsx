import React from "react";

const AboutUs = () => {
  return (
    <div>
      <div className="sm:flex items-center max-w-screen-xl">
        <div className="sm:w-1/2 p-10">
          <div className="image object-center text-center">
            <img src="https://i.imgur.com/WbQnbas.png" />
          </div>
        </div>
        <div className="sm:w-1/2 p-5">
          <div className="text">
            <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">
              About us
            </span>
            <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">
              About <span className="text-indigo-600">Our Company</span>
            </h2>
            <p className="text-gray-700">
              Welcome to EduHub, your ultimate online education platform
              designed to revolutionize learning for students of all ages.
              Whether you're a school, university, or an independent learner,
              our platform offers a diverse range of courses and resources
              tailored to meet your educational needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

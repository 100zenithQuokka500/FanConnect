import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl text-center font-bold mb-4 p-4">About FanConnect</h1>
      <p className="mb-4 max-width-100">
        Welcome to FanConnect! We are a crowdfunding platform dedicated to helping creators get funded by their fans and followers. Our mission is to empower creators to bring their projects to life with the support of their community.
      </p>
      <h2 className="text-2xl text-center font-semibold mb-2 p-4">Our Story</h2>
      <p className="mb-4">
        FanConnect was founded with the belief that creators should have the freedom to pursue their passions without financial barriers. We provide a platform where fans can directly support their favorite creators, ensuring that great ideas can flourish.
      </p>
      <h2 className="text-2xl text-center font-semibold mb-2 p-4">Our Mission</h2>
      <p className="mb-4">
        Our mission is to create a supportive and engaging environment for creators and their fans. We strive to make the crowdfunding process as seamless and rewarding as possible, fostering a community where creativity and innovation thrive.
      </p>
      <h2 className="text-2xl text-center font-semibold mb-2 p-4">Join Us</h2>
      <p className="mb-4">
        Whether you're a creator looking for funding or a fan eager to support amazing projects, FanConnect is the place for you. Join us today and be a part of something special!
      </p>
    </div>
  );
};

export default About;

export const metadata={
    title:"About-FanConnect"
}



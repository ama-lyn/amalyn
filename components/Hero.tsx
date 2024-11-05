import React from "react";

const Hero = () => {
  return (
    <div className="py-20 w-3/4">
      <p>Hey, my name is</p>
      <div className="flex flex-col gap-5 text-7xl text-white font-bold py-12">
        <p>Gwendolyn Amanda.</p>
        <p> Full Stack Developer & Web Designer</p>
      </div>

      <p className="text-zinc-500 text-xl">
        I have a few years of experience working on freelance projects and
        personal websites. I build interactive websites and web apps using both
        front-end and back-end technologies. I’m always looking for new ways to
        solve problems through code and design.
      </p>
    </div>
  );
};

export default Hero;

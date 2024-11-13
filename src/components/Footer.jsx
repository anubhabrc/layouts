import React from "react";
import dp from "../assets/dp.jpeg";

const Footer = () => {
  return (
    <div className="w-full">
      <div className="w-11/12 m-auto flex flex-col gap-14 bg-gray-100 p-10 md:p-20 rounded-xl">
        <div className="flex flex-col md:flex-row md:justify-between gap-14">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <img src={dp} alt="User" className="h-8 w-8 rounded-full" />
              <p className="text-3xl font-bold">Layouts ✨</p>
            </div>
            <p>Visualize your colour choices.</p>
          </div>
          <div className="flex flex-col gap-14 md:gap-16 md:flex-row">
            <div className="flex flex-col gap-4">
              <p className="text-lg font-medium text-gray-400">EXPLORE</p>
              <div className="flex flex-col gap-4">
                <p>Docs</p>
                <p>Figma Plugin</p>
                <p>VS Code Theme Editor</p>
                <p>Dashboard Template</p>
                <p>Blog Post Template</p>
                <p>Color Game</p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-lg font-medium text-gray-400">Let's Connect</p>
              <div className="flex flex-col gap-4">
                <p>Contact Me</p>
                <p>YouTube</p>
                <p>CodePen</p>
                <p>GitHub</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="h-px bg-gray-300 my-8" />
          <div className="flex flex-col gap-1">
            <p>
              Made with Love by{" "}
              <a
                href="https://x.com/anubhabrc"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4"
              >
                @anubhabrc
              </a>
            </p>
            <p>No cookies 🍪 Just colors 🎨 and fonts 🔡</p>
            <p className="text-sm">
              Copyright © 2024 All Rights Reserved.{" "}
              <span className="underline underline-offset-4">CC BY-NC-ND</span>{" "}
              License.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

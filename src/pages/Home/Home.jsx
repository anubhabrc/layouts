import React from "react";
import ScrollIndicator from "../../components/Scrollindicator";
import Accordion from "../../components/Accordian";
import Footer from "../../components/Footer";
import { LiaFireAltSolid } from "react-icons/lia";
import { FaCheck } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";
import { GiSevenPointedStar } from "react-icons/gi";
import { FaCircle } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";

const Home = () => {
  const accordionData = [
    {
      title: "How many colours should I choose?",
      description:
        "Normally, 3 colors are absolutely fine (meaning background, text, and one accent color). However, if you want, you can have more. Usually, we don’t add more than 6 colors across a platform. It would just make things too... complicated. Plus, it makes it hard to keep the colors consistent throughout the design.",
    },
    {
      title: "How does the contrast checker work?",
      description:
        "Normally, 3 colors are absolutely fine (meaning background, text, and one accent color). However, if you want, you can have more. Usually, we don’t add more than 6 colors across a platform. It would just make things too... complicated. Plus, it makes it hard to keep the colors consistent throughout the design.",
    },
    {
      title: "What does the hero image represent?",
      description:
        "Normally, 3 colors are absolutely fine (meaning background, text, and one accent color). However, if you want, you can have more. Usually, we don’t add more than 6 colors across a platform. It would just make things too... complicated. Plus, it makes it hard to keep the colors consistent throughout the design.",
    },
    {
      title: "How can I set up the fonts?",
      description:
        "Normally, 3 colors are absolutely fine (meaning background, text, and one accent color). However, if you want, you can have more. Usually, we don’t add more than 6 colors across a platform. It would just make things too... complicated. Plus, it makes it hard to keep the colors consistent throughout the design.",
    },
    {
      title: "Can I use the generated colours commercially?",
      description:
        "Normally, 3 colors are absolutely fine (meaning background, text, and one accent color). However, if you want, you can have more. Usually, we don’t add more than 6 colors across a platform. It would just make things too... complicated. Plus, it makes it hard to keep the colors consistent throughout the design.",
    },
    {
      title: "How can I learn more about this tool?",
      description:
        "Normally, 3 colors are absolutely fine (meaning background, text, and one accent color). However, if you want, you can have more. Usually, we don’t add more than 6 colors across a platform. It would just make things too... complicated. Plus, it makes it hard to keep the colors consistent throughout the design.",
    },
  ];

  return (
    <div className="w-full">
      <div className="w-11/12 md:w-4/5 m-auto flex flex-col gap-56">
        <div className="flex flex-col md:flex-row-reverse gap-3 md:gap-7 mt-5 md:mt-16">
          <div className="md:w-[50%] p-4 md:px-12">
            <div className="grid grid-cols-4 grid-rows-4 gap-3 aspect-square">
              {/* Large blue rectangle top */}
              <div className="col-start-2 col-span-2 row-span-2 bg-blue-700 rounded-lg" />
              {/* Light blue rectangles top row */}
              <div className="col-start-1 row-start-2 bg-blue-50 rounded-lg" />
              <div className="col-start-4 row-start-1 bg-gray-400 rounded-lg" />
              <div className="col-start-4 row-start-2 bg-blue-50 rounded-lg" />
              {/* Middle row */}
              <div className="col-start-2 row-start-3 bg-gray-900 rounded-lg" />
              <div className="col-start-3 row-start-3 bg-blue-50 rounded-lg" />
              <div className="col-start-4 row-start-3 bg-blue-50 rounded-lg" />
              {/* Bottom row */}
              <div className="col-start-2 row-start-4 bg-gray-900 rounded-lg" />
              <div className="col-start-3 col-span-2 row-start-4 bg-blue-700 rounded-lg" />
            </div>
          </div>
          <div className="md:w-[50%] pt-3 flex flex-col gap-5 md:gap-10">
            <p className="text-4xl md:text-7xl  font-bold">
              Try Out <span className="text-blue-600 font-serif">Colours</span>{" "}
              & <span className="text-purple-400 font-serif">Fonts</span> on an
              Actual Site.
            </p>
            <p className="text-sm md:text-base leading-loose">
              Choosing colours or typography for your website? Use the Toolbar
              below to realize your choices in realtime.
            </p>
            <div className="flex flex-col md:flex-row gap-3 w-full">
              <button className="bg-blue-700 text-white font-medium py-2 md:py-4 md:px-6 rounded-lg">
                Get Started.
              </button>
              <button className="bg-indigo-50 text-black font-medium py-2 md:py-4 md:px-6 rounded-lg">
                How does it work?
              </button>
            </div>
            <div className="flex gap-2 items-center">
              <ScrollIndicator />
              <p className="text-sm">Scroll to see more sections</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-16 items-center">
          <p className="text-6xl font-semibold">Why Layouts?</p>
          <div className="flex flex-col md:flex-row gap-8 items-center justify-between md:gap-5">
            <div className="bg-indigo-50 flex flex-col gap-8 items-center justify-center rounded-xl h-80 md:h-96 md:w-1/3 px-9">
              <div className="p-5 bg-indigo-400 rounded-full">
                <IoTimeOutline style={{ fontSize: "50px" }} />
              </div>
              <p className="text-2xl font-semibold">Saves Time</p>
              <p className="text-sm leading-7 md:text-base ">
                No need to spend hours trying out different variations of
                colors. Decide right away!
              </p>
            </div>
            <div className="bg-indigo-50 flex flex-col gap-8 items-center justify-center h-80 md:h-96 rounded-xl md:w-1/3 px-9">
              <div className="p-5 bg-indigo-400 rounded-full">
                <LiaFireAltSolid style={{ fontSize: "50px" }} />
              </div>
              <p className="text-2xl font-semibold">More Realistic</p>
              <p className="text-sm md:text-base leading-7">
                Single color palettes make it hard to pick. This tool
                distributes the colors on a real website.
              </p>
            </div>
            <div className="bg-indigo-50 flex flex-col gap-8 items-center justify-center h-80 md:h-96 rounded-xl md:w-1/3 px-9">
              <div className="p-5 bg-indigo-400 rounded-full">
                <FaCheck style={{ fontSize: "40px" }} />
              </div>
              <p className="text-2xl font-semibold">Super Simple</p>
              <p className="text-sm md:text-base leading-7">
                Push a few buttons, and there you have it! Your very own
                branding colors, right in front of your eyes.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-3 md:flex-row">
            <div className="flex flex-col gap-5  bg-indigo-700 items-center justify-center h-72 md:h-80 rounded-xl md:w-4/5">
              <p className="text-white text-5xl md:text-5xl font-bold">
                500k+ Users
              </p>
              <p className="text-white">and counting...</p>
            </div>
            <div className="flex flex-col gap-5 bg-indigo-300 items-center justify-center h-72 md:h-80 rounded-xl md:w-1/5">
              <p className=" text-4xl font-bold">100% Free!</p>
              <p className="">Forever.</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 md:flex-row">
            <div className="flex flex-col gap-5 bg-black items-center justify-center h-72 rounded-xl md:h-80 md:w-3/5">
              <p className="text-white text-3xl font-bold">19k+ Plugin Users</p>
              <p className="text-white underline underline-offset-4 cursor-pointer">
                check it out on figma.
              </p>
            </div>
            <div className="flex flex-col gap-5 bg-purple-700 items-center justify-center h-72 rounded-xl md:h-80 md:w-2/5">
              <p className="text-white text-2xl font-bold">
                200+ Product Hunt Reviews
              </p>
              <p className="text-white underline underline-offset-4 cursor-pointer">
                Leave a review.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-indigo-50 flex flex-col md:flex-row p-8 md:p-16 gap-8 rounded-xl ">
          <div className="flex flex-col gap-8 md:w-1/2">
            <p className="text-3xl md:text-5xl font-bold">How Does it Work?</p>
            <p className="text-lg md:text-xl">
              Get your personalized color palette in 4 steps.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-8 md:gap-16 md:w-1/2">
            <div className="flex flex-col md:flex-row gap-8 ">
              <div className="flex gap-3 md:w-1/2">
                <p className="text-blue-700 text-4xl font-bold">1</p>
                <p className="pt-2 text-sm md:text-lg leading-loose">
                  Start with two neutral colors for the text and the background.
                </p>
              </div>
              <div className="flex gap-3 md:w-1/2">
                <p className="text-blue-700 text-4xl font-bold">2</p>
                <p className="pt-2 text-sm md:text-lg leading-loose">
                  Choose your primary and secondary colors. Primary is for main
                  CTAs and sections, and Secondary is for less important buttons
                  and info cards.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex gap-3 md:w-1/2">
                <p className="text-blue-700 text-4xl font-bold">3</p>
                <p className="pt-2 text-sm md:text-lg leading-loose">
                  Accent color is an additional color. It appears in images,
                  highlights, hyperlinks, boxes, cards, etc.
                </p>
              </div>
              <div className="flex gap-3 md:w-1/2">
                <p className="text-blue-700 text-4xl font-bold">4</p>
                <p className="pt-2 text-sm md:text-lg leading-loose">
                  Happy with the results? Press on “Export” and choose among
                  different options to export in various formats, like .zip,
                  .png, CSS, SCSS, QR Code, and more.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10 items-center justify-center">
          <p className="text-4xl md:text-6xl font-bold">Plans & Pricing</p>
          <p className="text-lg md:text-2xl text-center">
            The tool is 100% free! This is just a generic section.
          </p>
          <div className="w-full flex flex-col md:flex-row gap-8">
            <div className="bg-indigo-50 w-full flex flex-col items-center md:justify-between md:pb-10 pt-10 md:pt-20 gap-5 rounded-2xl h-[350px] md:h-[650px]">
              <div className="flex flex-col items-center gap-5 md:gap-11">
                <p className="text-2xl md:text-3xl font-bold">Basic</p>
                <p>Free</p>
                <div className="flex flex-col justify-start gap-5">
                  <div className="flex gap-5 items-center">
                    <FaCheck className="text-blue-700 text-3xl" />
                    <p className="text-base">Choose any color</p>
                  </div>
                  <div className="flex gap-5 items-center">
                    <FaCheck className="text-blue-700 text-3xl" />
                    <p className="text-base">Export all you want</p>
                  </div>
                </div>
              </div>
              <button className="mt-5 px-6 py-3 bg-indigo-200 rounded-lg">
                Get Started
              </button>
            </div>
            <div className="bg-purple-100 w-full flex flex-col items-center md:justify-between md:pb-10 gap-5 pt-4 md:pt-6 rounded-2xl h-[550px] md:h-[650px]">
              <div className="flex items-center gap-3">
                <GiSevenPointedStar className="text-blue-700 text-lg" />
                <p className="text-blue-700 text-lg">Most Popular</p>
              </div>
              <p className="text-2xl md:text-3xl font-bold">Pro</p>
              <p>$0.00 / month</p>
              <div className="flex flex-col justify-start gap-5">
                <div className="flex gap-5 items-center">
                  <FaCheck className="text-blue-700 text-3xl" />
                  <p className="text-base">Choose any color</p>
                </div>
                <div className="flex gap-5 items-center">
                  <FaCheck className="text-blue-700 text-3xl" />
                  <p className="text-base">Export all you want</p>
                </div>
                <div className="flex gap-5 items-center">
                  <FaCheck className="text-blue-700 text-3xl" />
                  <p className="text-base">
                    Get a big thank you for checking
                    <br />
                    this site out
                  </p>
                </div>
                <div className="flex gap-5 items-center">
                  <FaCheck className="text-blue-700 text-3xl" />
                  <p className="text-base">Get access to dashboard</p>
                </div>
                <div className="flex gap-5 items-center">
                  <FaCheck className="text-blue-700 text-3xl" />
                  <p className="text-base">
                    Super duper exclusive members-
                    <br />
                    only content.
                  </p>
                </div>
              </div>
              <button className="mt-5 px-6 py-3 bg-blue-700 text-white font-medium rounded-lg">
                Go To Dashboard
              </button>
            </div>
            <div className="bg-indigo-50 w-full flex flex-col items-center pt:5 md:justify-between md:pb-10 pt-10 md:pt-20 gap-5 rounded-2xl h-[550px] md:h-[650px]">
              <p className="text-2xl md:text-3xl font-bold">Enterprise</p>
              <p>$0.00 / month</p>
              <div className="flex flex-col justify-start gap-5">
                <div className="flex gap-5 items-center">
                  <FaCheck className="text-blue-700 text-3xl" />
                  <p className="text-base">Choose any color</p>
                </div>
                <div className="flex gap-5 items-center">
                  <FaCheck className="text-blue-700 text-3xl" />
                  <p className="text-base">Export all you want</p>
                </div>
                <div className="flex gap-5 items-center">
                  <FaCheck className="text-blue-700 text-3xl" />
                  <p className="text-base">
                    Get a big thank you for checking
                    <br />
                    this site out
                  </p>
                </div>
                <div className="flex gap-5 items-center">
                  <FaCheck className="text-blue-700 text-3xl" />
                  <p className="text-base">Get access to dashboard</p>
                </div>
                <div className="flex gap-5 items-center">
                  <FaCheck className="text-blue-700 text-3xl" />
                  <p className="text-base">
                    Super duper exclusive members-
                    <br />
                    only content.
                  </p>
                </div>
              </div>
              <button className="mt-5 px-6 py-3 bg-indigo-200 rounded-lg">
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 items-center justify-center">
          <p className="text-4xl font-bold">Testimonials</p>
          <p className="text-lg text-center">
            What (imaginary) people are saying about this site.
          </p>
          <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
            <div className="bg-indigo-50 w-full rounded-xl flex flex-col gap-5 h-80 p-10">
              <div className="flex gap-4 items-center">
                <FaCircle className="text-8xl text-blue-600" />
                <div className="flex flex-col gap-1">
                  <p>Cool User</p>
                  <p className="text-gray-400">Product Designer</p>
                </div>
              </div>
              <div className="flex gap-1">
                <FaStar className="text-blue-700 text-3xl" />
                <FaStar className="text-blue-700 text-3xl" />
                <FaStar className="text-blue-700 text-3xl" />
                <FaStar className="text-blue-700 text-3xl" />
                <FaStar className="text-blue-700 text-3xl" />
              </div>
              <div>
                <p className="text-sm md:text-base leading-loose">
                  "Wow! I love this site. Realtime Colors is all websites at the
                  same time."
                </p>
              </div>
            </div>
            <div className="bg-indigo-50 w-full rounded-xl flex flex-col gap-5 h-80 p-10">
              <div className="flex gap-4 items-center">
                <FaCircle className="text-8xl text-purple-300" />
                <div className="flex flex-col gap-1">
                  <p>Creative Person</p>
                  <p className="text-gray-400">Product Owner</p>
                </div>
              </div>
              <div className="flex gap-1">
                <FaStar className="text-blue-700 text-3xl" />
                <FaStar className="text-blue-700 text-3xl" />
                <FaStar className="text-blue-700 text-3xl" />
                <FaStar className="text-blue-700 text-3xl" />
                <FaStar className="text-blue-700 text-3xl" />
              </div>
              <div>
                <p className="text-sm md:text-base leading-loose">
                  "Amazing. I found my favorite colors in literally... 2
                  minutes? Woah! Totally real review."
                </p>
              </div>
            </div>
            <div className="bg-indigo-50 w-full rounded-xl flex flex-col gap-5 h-80 p-10">
              <div className="flex gap-4 items-center">
                <FaCircle className="text-8xl text-purple-300" />
                <div className="flex flex-col gap-1">
                  <p>Real Reviewer</p>
                  <p className="text-gray-400">Developer</p>
                </div>
              </div>
              <div className="flex gap-1">
                <FaStar className="text-blue-700 text-3xl" />
                <FaStar className="text-blue-700 text-3xl" />
                <FaStar className="text-blue-700 text-3xl" />
                <FaStar className="text-blue-700 text-3xl" />
                <FaStar className="text-blue-700 text-3xl" />
              </div>
              <div>
                <p className="text-sm md:text-base leading-loose">
                  "Astonished. This product is so cool. You should try it and
                  upgrade to Enterprise plan. No kidding."
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-6 md:gap-0">
          <div className="flex flex-col gap-6 md:gap-8 items-center md:items-start md:w-2/5">
            <p className="text-4xl md:text-6xl font-bold">FAQ</p>
            <p className="text-lg md:text-xl text-center">
              Answers to some questions you might have.
            </p>
          </div>
          <div className="flex flex-col md:w-3/5">
            {/* <div> */}
            {accordionData.map((item, index) => (
              <Accordion
                key={index}
                title={item.title}
                description={item.description}
              />
            ))}
            {/* </div> */}
          </div>
        </div>
        <div className="flex flex-col gap-6 md:gap-8 items-center justify-center w-full">
          <p className="text-4xl md:text-6xl font-bold">Featured Articles</p>
          <p className="text-lg md:text-xl text-center">
            Just some interesting guides and posts.
          </p>
          <div className="flex flex-col md:flex-row gap-6 w-full">
            <div className="bg-indigo-50 h-20 rounded-xl flex items-center justify-center gap-2 md:w-1/3">
              <p className="cursor-pointer hover:underline underline-offset-4">
                Examples of colours from popular sites
              </p>
              <GoLinkExternal className="text-xs md:text-sm" />
            </div>
            <div className="bg-indigo-50 h-20 rounded-xl flex items-center justify-center gap-2 md:w-1/3">
              <p className="cursor-pointer hover:underline underline-offset-4">
                How to select colours
              </p>
              <GoLinkExternal className="text-xs md:text-sm" />
            </div>
            <div className="bg-indigo-50 h-20 rounded-xl flex items-center justify-center gap-2 md:w-1/3">
              <p className="cursor-pointer hover:underline underline-offset-4">
                Learn more about the releases
              </p>
              <GoLinkExternal className="text-xs md:text-sm" />
            </div>
          </div>
        </div>
        <Footer />
        <div></div>
      </div>
    </div>
  );
};

export default Home;

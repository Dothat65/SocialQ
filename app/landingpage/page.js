// import Flashcard from "../components/Flashcard";
// import Navbar from "../components/Navbar/page";


// const LandingPage = () => {
//   return (
//     <div>
//       <Navbar />
//       <Flashcard />
//     </div>
//   );
// }

// export default LandingPage;





// import React from 'react';
// import Landingpage from './index';

// const LandingPage = () => {
//   return (
//     <Landingpage />
//   );
// };

// export default LandingPage;


// //index.js
// import Button from "../components/Button";
// import Features from "../components/features";
// import FrameComponent from "../components/frame-component";
// import FrameComponent1 from "../components/frame-component1";
// import FooterBlock from "../components/footer-block";

// const Landingpage = () => {
//   return (
//     <div className="w-full relative bg-white flex flex-col items-end justify-start pt-[60px] px-0 pb-[53px] box-border gap-[27px] leading-[normal] tracking-[normal]">
//       <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-9 box-border max-w-full">
//         <header className="flex-1 flex flex-col items-start justify-start max-w-full mq450:gap-[17px] mq825:gap-[35px]">
//           <div className="self-stretch overflow-hidden flex flex-row items-center justify-center py-0 px-5 mq450:gap-[103px]">
//             <div className="w-[228px] bg-white overflow-hidden shrink-0 flex flex-row items-start justify-start py-2.5 px-0 box-border">
//               <img
//                 className="h-[81px] flex-1 relative max-w-full overflow-hidden object-cover"
//                 loading="lazy"
//                 alt=""
//                 src="/logo.png"
//               />
//             </div>
//           </div>
//         </header>
//       </section>
//       <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[137px] box-border max-w-full text-left text-41xl text-black font-h2 mq825:pb-[89px] mq825:box-border">
//         <div className="flex-1 overflow-hidden flex flex-row items-start justify-between py-0 px-[100px] box-border max-w-full gap-5 mq825:pl-[25px] mq825:pr-[25px] mq825:box-border mq1400:flex-wrap mq1400:pl-[50px] mq1400:pr-[50px] mq1400:box-border">
//           <div className="w-[531px] flex flex-col items-start justify-start gap-[35px] min-w-[531px] max-w-full mq825:gap-[17px] mq825:min-w-full mq1400:flex-1">
//             <h1 className="m-0 self-stretch relative text-inherit font-medium font-[inherit] mq450:text-[36px] mq825:text-[48px]">{`Generate and edit your very own flashcards `}</h1>
//             <div className="w-[498px] relative text-xl leading-[28px] text-midnightblue inline-block max-w-full mq450:text-base mq450:leading-[22px]">
//               SocialQ is an AI-driven app that helps users enhance social skills
//               through personalized flashcards featuring jokes, conversation
//               starters, and questions, allowing for interactive practice and
//               customization.
//             </div>
//             <Button button="Get Started" propWidth="183px" />
//           </div>
//           <img
//             className="w-[641px] relative max-h-full object-cover max-w-full mq1400:flex-1"
//             loading="lazy"
//             alt=""
//             src="/cardimage.png"
//           />
//         </div>
//       </section>
//       <Features />
//       <FrameComponent />
//       <FrameComponent1 />
//       <FooterBlock />
//     </div>
//   );
// };

// export default Landingpage;


import React from 'react';
import Navbar from "../components/Navbar";

const LandingPage = () => {
  return (
    <div>
      <Navbar />

      <section className="w-full bg-white flex flex-col md:flex-row items-center justify-between px-8 py-16">
        {/* Left Section - Text and Button */}
        <div className="flex-1 flex flex-col items-start justify-center text-left space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight">
            Generate and edit your very own flashcards
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-md">
            SocialQ is an AI-driven app that helps users enhance social skills
            through personalized flashcards featuring jokes, conversation
            starters, and questions, allowing for interactive practice and
            customization.
          </p>
          <button className="bg-blue-800 text-white px-6 py-3 rounded-md text-lg font-semibold mt-4 hover:bg-blue-900 transition">
            Get Started
          </button>
        </div>

        {/* Right Section - Image */}
        <div className="flex-1 flex justify-center mt-8 md:mt-0">
          <img
            src="/path/to/your-image.png"
            alt="Flashcards illustration"
            className="max-w-full h-auto"
          />
        </div>
      </section>
    </div>
  );
};

export default LandingPage;


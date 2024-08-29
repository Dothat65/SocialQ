// // features.js
// import Heading from "./heading";
// import PropTypes from "prop-types";

// const Features = ({ className = "" }) => {
//   return (
//     <section
//       className={`w-[1369px] flex flex-col items-start justify-start pt-0 pb-[343px] pl-5 pr-0 box-border gap-[66px] max-w-full text-left text-11xl text-black font-h2 lg:pb-[223px] lg:box-border mq450:gap-4 mq825:gap-[33px] mq825:pb-[145px] mq825:box-border ${className}`}
//     >
//       <div className="w-[1440px] flex flex-row items-start justify-center py-0 pl-5 pr-[1077px] box-border max-w-[107%] shrink-0 mq450:pr-5 mq450:box-border mq825:gap-5 mq825:pr-[269px] mq825:box-border mq1400:pr-[538px] mq1400:box-border">
//         <Heading
//           propBackgroundColor="rgba(128, 133, 228, 0.43)"
//           label="Features"
//           propFontSize="40px"
//           propDisplay="unset"
//           propMinWidth="unset"
//           propMargin="0"
//           label1
//           label2
//         />
//       </div>
//       <div className="w-[1265px] flex flex-row items-start justify-start py-0 px-0.5 box-border max-w-full">
//         <div className="flex-1 flex flex-col items-end justify-start gap-[47px] max-w-full mq825:gap-[23px]">
//           <div className="self-stretch flex flex-row items-end justify-start gap-10 max-w-full lg:flex-wrap mq825:gap-5">
//             <div className="h-[310px] w-[600px] relative shadow-[0px_5px_0px_#191a23] rounded-26xl bg-grey border-dark border-[1px] border-solid box-border overflow-hidden shrink-0 min-w-[600px] max-w-full lg:flex-1 mq825:min-w-full">
//               <div className="absolute top-[117px] left-[22px] flex flex-col items-start justify-center">
//                 <div className="flex flex-col items-start justify-start">
//                   <div className="rounded-6xs bg-lightsteelblue flex flex-col items-start justify-start py-0 px-[7px] text-dark">
//                     <h2 className="m-0 relative text-inherit font-medium font-[inherit] mq450:text-lg mq825:text-5xl">
//                       <p className="m-0">{`Generate `}</p>
//                       <p className="m-0">{`using simple prompts `}</p>
//                     </h2>
//                   </div>
//                   <div className="w-[119px] rounded-6xs bg-lightsteelblue hidden flex-col items-start justify-start py-0 px-[7px] box-border whitespace-nowrap">
//                     <div className="h-[38px] relative font-medium inline-block">
//                       using simple prompts
//                     </div>
//                   </div>
//                   <div className="w-[119px] rounded-6xs bg-green hidden flex-col items-start justify-start py-0 px-[7px] box-border">
//                     <div className="h-[38px] relative font-medium inline-block mq450:text-lg mq825:text-5xl">
//                       (SEO)
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="absolute top-[70px] left-[340px] w-[210px] h-[170px] z-[1] flex items-center justify-center">
//                 <img
//                   className="w-full h-full z-[1] object-contain absolute left-[11px] top-[0px] [transform:scale(1.1)]"
//                   alt=""
//                   src="/illustration-1@2x.png"
//                 />
//               </div>
//             </div>
//             <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[3px] box-border min-w-[399px] max-w-full mq450:min-w-full">
//               <div className="self-stretch shadow-[0px_5px_0px_#191a23] rounded-26xl bg-lightsteelblue border-dark border-[1px] border-solid overflow-hidden flex flex-row items-center justify-between py-[76px] px-[49px] gap-[11px] mq825:flex-wrap mq825:pl-6 mq825:pr-6 mq825:box-border">
//                 <div className="flex flex-col items-start justify-start">
//                   <div className="rounded-6xs bg-white flex flex-col items-start justify-start py-0 px-[7px]">
//                     <h2 className="m-0 relative text-inherit font-medium font-[inherit] mq450:text-lg mq825:text-5xl">
//                       <p className="m-0">Seamlessly flip</p>
//                       <p className="m-0">through flashcards</p>
//                     </h2>
//                   </div>
//                   <div className="w-[119px] rounded-6xs bg-white hidden flex-col items-start justify-start py-0 px-[7px] box-border whitespace-nowrap">
//                     <div className="h-[38px] relative font-medium inline-block">
//                       through flashcards
//                     </div>
//                   </div>
//                   <div className="w-[119px] rounded-6xs bg-white hidden flex-col items-start justify-start py-0 px-[7px] box-border text-21xl">
//                     <div className="self-stretch h-[51px] relative font-medium inline-block mq450:text-5xl mq825:text-13xl">
//                       Label
//                     </div>
//                   </div>
//                 </div>
//                 <img
//                   className="h-[147.6px] w-[210px] relative object-cover mq825:flex-1"
//                   loading="lazy"
//                   alt=""
//                   src="/tokyoselectingavalueinthebrowserwindow-1@2x.png"
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="self-stretch flex flex-row items-start justify-end py-0 pl-0 pr-[3px] box-border max-w-full">
//             <div className="flex-1 flex flex-row items-start justify-start flex-wrap content-start gap-[54px] max-w-full mq825:gap-[27px]">
//               <div className="flex-1 shadow-[0px_5px_0px_#191a23] rounded-26xl bg-lightsteelblue border-dark border-[1px] border-solid box-border overflow-hidden flex flex-row items-center justify-between pt-[59px] px-[49px] pb-[60px] min-w-[394px] max-w-full gap-2 mq450:min-w-full mq825:flex-wrap mq825:pl-6 mq825:pr-6 mq825:box-border">
//                 <div className="w-72 flex flex-col items-start justify-start">
//                   <div className="self-stretch rounded-6xs bg-white flex flex-col items-start justify-start py-0 px-[7px] lg:self-stretch lg:w-auto">
//                     <h2 className="m-0 relative text-inherit font-medium font-[inherit] mq450:text-lg mq825:text-5xl">
//                       <p className="m-0">Track and organize</p>
//                       <p className="m-0 whitespace-pre-wrap">{`your flashcards  `}</p>
//                     </h2>
//                   </div>
//                   <div className="w-[119px] rounded-6xs bg-white hidden flex-col items-start justify-start py-0 px-[7px] box-border">
//                     <div className="h-[38px] relative font-medium inline-block mq450:text-lg mq825:text-5xl" />
//                   </div>
//                   <div className="w-[119px] rounded-6xs bg-white hidden flex-col items-start justify-start py-0 px-[7px] box-border text-21xl">
//                     <div className="self-stretch h-[51px] relative font-medium inline-block mq450:text-5xl mq825:text-13xl">
//                       Label
//                     </div>
//                   </div>
//                 </div>
//                 <div className="h-[195.9px] w-[210px] relative flex items-center justify-center">
//                   <img
//                     className="h-full w-full object-contain absolute left-[10px] top-[0px] [transform:scale(1.095)] mq825:flex-1"
//                     alt=""
//                     src="/illustration-2@2x.png"
//                   />
//                 </div>
//               </div>
//               <div className="flex-1 shadow-[0px_5px_0px_#191a23] rounded-26xl bg-midnightblue border-dark border-[1px] border-solid box-border overflow-hidden flex flex-row items-center justify-between py-[52px] px-[50px] min-w-[389px] max-w-full gap-5 mq450:min-w-full mq825:flex-wrap mq825:pl-[25px] mq825:pr-[25px] mq825:box-border">
//                 <div className="flex flex-col items-start justify-start">
//                   <div className="flex flex-col items-start justify-start lg:self-stretch lg:w-auto">
//                     <div className="rounded-6xs bg-white flex flex-col items-start justify-start py-0 px-[7px]">
//                       <h2 className="m-0 relative text-inherit font-medium font-[inherit] mq450:text-lg mq825:text-5xl">
//                         <p className="m-0">{`Get started `}</p>
//                         <p className="m-0">for Free</p>
//                       </h2>
//                     </div>
//                     <div className="rounded-6xs bg-white hidden flex-col items-start justify-start py-0 px-[7px] whitespace-nowrap">
//                       <div className="h-[38px] relative font-medium inline-block whitespace-nowrap">
//                         for Free
//                       </div>
//                     </div>
//                     <div className="w-[119px] rounded-6xs bg-white hidden flex-col items-start justify-start py-0 px-[7px] box-border text-21xl">
//                       <div className="self-stretch h-[51px] relative font-medium inline-block mq450:text-5xl mq825:text-13xl">
//                         Label
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <img
//                   className="h-[210px] w-[210px] relative object-cover mq825:flex-1"
//                   alt=""
//                   src="/illustration-3@2x.png"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// Features.propTypes = {
//   className: PropTypes.string,
// };

// export default Features;



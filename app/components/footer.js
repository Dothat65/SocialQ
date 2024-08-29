// //footer-block.js
// import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
// import Heading from "./heading";
// import Button from "./Button";
// import PropTypes from "prop-types";

// const FooterBlock = ({ className = "" }) => {
//   return (
//     <section
//       className={`mr-[-1px] self-stretch h-[514px] flex flex-col items-start justify-start py-0 pl-[100px] pr-[101px] box-border max-w-full text-left text-21xl text-black font-h2 mq450:pl-5 mq450:pr-5 mq450:box-border mq825:pl-[50px] mq825:pr-[50px] mq825:box-border mq1400:h-auto ${className}`}
//     >
//       <div className="self-stretch rounded-t-26xl rounded-b-none bg-dark flex flex-col items-start justify-start pt-[55px] px-[60px] pb-[50px] box-border gap-[50px] max-w-full mq825:gap-[25px] mq825:pt-9 mq825:pb-8 mq825:box-border mq1400:pl-[30px] mq1400:pr-[30px] mq1400:box-border">
//         <div className="w-[1038px] flex flex-col items-start justify-start gap-[66px] max-w-full lg:gap-[33px] mq825:gap-4">
//           <img
//             className="w-[238px] h-[84px] relative object-cover"
//             loading="lazy"
//             alt=""
//             src="/image-4@2x.png"
//           />
//           <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-5 mq1400:flex-wrap">
//             <div className="flex flex-col items-start justify-start gap-[27px] min-w-[250px] mq1400:flex-1">
//               <Heading label="Contact us:" label1 label2 />
//               <div className="flex flex-col items-start justify-start gap-5 text-lg text-white">
//                 <div className="relative">Email: info@socialq.com</div>
//                 <div className="relative">Phone: 929-000-0000</div>
//                 <div className="relative whitespace-pre-wrap">
//                   Address: New York, NY 12345
//                 </div>
//               </div>
//             </div>
//             <div className="w-[634px] rounded-sm bg-gray-200 overflow-hidden shrink-0 flex flex-row items-start justify-start py-[58px] px-10 box-border gap-5 min-w-[634px] max-w-full lg:min-w-full mq825:flex-wrap mq1400:flex-1">
//               <TextField
//                 className="[border:none] bg-[transparent] h-[67px] flex-1 font-h2 text-lg text-white min-w-[185px]"
//                 placeholder="Email"
//                 variant="outlined"
//                 sx={{
//                   "& fieldset": { borderColor: "#fff" },
//                   "& .MuiInputBase-root": {
//                     height: "67px",
//                     borderRadius: "14px",
//                     fontSize: "18px",
//                   },
//                   "& .MuiInputBase-input": { color: "#fff" },
//                 }}
//               />
//               <Button button="Subscribe to news" />
//             </div>
//           </div>
//         </div>
//         <div className="self-stretch flex flex-col items-start justify-start gap-[50px] text-lg text-white mq825:gap-[25px]">
//           <div className="self-stretch h-px relative border-white border-t-[1px] border-solid box-border" />
//           <div className="flex flex-row items-start justify-start mq450:gap-5">
//             <div className="relative leading-[28px]">
//               © 2024 SocialQ. All Rights Reserved.
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// FooterBlock.propTypes = {
//   className: PropTypes.string,
// };

// export default FooterBlock;
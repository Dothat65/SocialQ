// // Heading.jsx
// import { useMemo } from "react";
// import PropTypes from "prop-types";

// const Heading = ({
//   className = "",
//   propBackgroundColor,
//   label,
//   propFontSize,
//   propDisplay,
//   propMinWidth,
//   propMargin,
//   label1,
//   label2,
// }) => {
//   const labelStyle = useMemo(() => {
//     return {
//       backgroundColor: propBackgroundColor,
//     };
//   }, [propBackgroundColor]);

//   const label1Style = useMemo(() => {
//     return {
//       fontSize: propFontSize,
//       display: propDisplay,
//       minWidth: propMinWidth,
//       margin: propMargin,
//     };
//   }, [propFontSize, propDisplay, propMinWidth, propMargin]);

//   return (
//     <div
//       className={`flex flex-col items-start justify-start text-left text-21xl text-black font-h2 ${className}`}
//     >
//       <div
//         className="rounded-6xs bg-lightsteelblue flex flex-col items-start justify-start py-0 px-[7px] whitespace-nowrap text-xl mq1400:self-stretch mq1400:w-auto"
//         style={labelStyle}
//       >
//         <div
//           className="relative font-medium inline-block min-w-[112px]"
//           style={label1Style}
//         >
//           {label}
//         </div>
//       </div>
//       <div className="w-[119px] rounded-6xs bg-green hidden flex-col items-start justify-start py-0 px-[7px] box-border">
//         {!label1 && (
//           <div className="self-stretch relative font-medium mq450:text-5xl mq825:text-13xl">
//             Label
//           </div>
//         )}
//       </div>
//       <div className="w-[119px] rounded-6xs bg-green hidden flex-col items-start justify-start py-0 px-[7px] box-border">
//         {!label2 && (
//           <div className="self-stretch relative font-medium mq450:text-5xl mq825:text-13xl">
//             Label
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// Heading.propTypes = {
//   className: PropTypes.string,
//   label: PropTypes.string,
//   label1: PropTypes.bool,
//   label2: PropTypes.bool,

//   /** Style props */
//   propBackgroundColor: PropTypes.any,
//   propFontSize: PropTypes.any,
//   propDisplay: PropTypes.any,
//   propMinWidth: PropTypes.any,
//   propMargin: PropTypes.any,
// };

// export default Heading;
// // Button.jsx
// import { useMemo } from "react";
// import { Button as MuiButton } from "@mui/material";
// import PropTypes from "prop-types";

// const CustomButton = ({ className = "", button, propWidth }) => {
//   const buttonStyle = useMemo(() => {
//     return {
//       width: propWidth,
//     };
//   }, [propWidth]);

//   return (
//     <MuiButton
//       className={`h-[68px] w-[249px] ${className}`}
//       disableElevation
//       variant="contained"
//       sx={{
//         textTransform: "none",
//         color: "#000",
//         fontSize: "20",
//         background: "#c8cbf3",
//         borderRadius: "14px",
//         "&:hover": { background: "#c8cbf3" },
//         width: 249,
//         height: 68,
//       }}
//       style={buttonStyle}
//     >
//       {button}
//     </MuiButton>
//   );
// };

// CustomButton.propTypes = {
//   className: PropTypes.string,
//   button: PropTypes.string,

//   /** Style props */
//   propWidth: PropTypes.any,
// };

// export default CustomButton;
import "./styles.css";

/* props por desestruturacao */
export const Button = ({ text, onClick, disabled = false }) => (
  <button className="button" onClick={onClick} disabled={disabled}>
    {text}
  </button>
);

// export const Button = (props) => {
//     return (
//       <button className="button" onclick={props.onclick} disabled={props.disabled}>
//         {props.text}
//       </button>
//     );
//   };

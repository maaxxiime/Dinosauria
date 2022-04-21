import styled from "styled-components";
import colors from "../components/variables";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Button(props) {
  const Btn = props.bgGradient
    ? styled.a`
        cursor: ${props.disabled ? "normal" : "pointer"};
        color: ${props.disabled ? colors.txt_white : props.textcolor};
        background: linear-gradient(
          ${props.disabled ? "grey, grey" : props.bgGradient}
        );
        border: none;
        border-radius: 2rem;
        padding: 0.3rem 1.1rem;
        transition: all 200ms ease-in-out;
        width: fit-content;
        & .svg-inline--fa {
          color: ${colors.blue1};
        }
        &:hover {
          color: ${props.disabled
            ? colors.txt_white
            : props.texthover
            ? props.texthover
            : props.textcolor};
          background-color: ${props.disabled
            ? "grey"
            : props.bghover
            ? props.bghover
            : props.bg};
          border-color: ${props.disabled
            ? "grey"
            : props.bdhover
            ? props.bdhover
            : props.bd};
        }
        &:active {
          color: ${props.disabled
            ? colors.txt_white
            : props.textactive
            ? props.textactive
            : props.textcolor};
          background-color: ${props.disabled
            ? "grey"
            : props.bgactive
            ? props.bgactive
            : props.bg};
          border-color: ${props.disabled
            ? ""
            : props.bdactive
            ? props.bdactive
            : props.bd};
        }
      `
    : styled.a`
        cursor: ${props.disabled ? "normal" : "pointer"};
        color: ${props.disabled ? colors.txt_white : props.textcolor};
        background: ${props.disabled ? "grey" : props.bg};
        border: 2px solid ${props.disabled ? "none" : props.bd};
        border-radius: 2rem;
        padding: 0.2rem 1rem;
        transition: all 200ms ease-in-out;
        width: fit-content;
        & .svg-inline--fa {
          color: ${colors.blue1};
        }
        &:hover {
          color: ${props.disabled
            ? colors.txt_white
            : props.texthover
            ? props.texthover
            : props.textcolor};
          background-color: ${props.disabled
            ? "grey"
            : props.bghover
            ? props.bghover
            : props.bg};
          border-color: ${props.disabled
            ? "grey"
            : props.bdhover
            ? props.bdhover
            : props.bd};
        }
        &:active {
          color: ${props.disabled
            ? colors.txt_white
            : props.textactive
            ? props.textactive
            : props.textcolor};
          background-color: ${props.disabled
            ? "grey"
            : props.bgactive
            ? props.bgactive
            : props.bg};
          border-color: ${props.disabled
            ? ""
            : props.bdactive
            ? props.bdactive
            : props.bd};
        }
      `;

  return props.link ? (
    <Btn
      href={props.disabled ? null : props.link}
      alt={props.text}
      className="myBtn"
      id={props.id}
    >
      {props.text && props.text}
      {/* {props.icon && <FontAwesomeIcon icon={props.icon} />} */}
    </Btn>
  ) : props.onclick ? (
    <Btn
      onClick={props.disabled ? null : props.onclick}
      className="myBtn"
      id={props.id}
    >
      {props.text && props.text}
      {/* {props.icon && <FontAwesomeIcon icon={props.icon} />} */}
    </Btn>
  ) : null;
}

export default Button;

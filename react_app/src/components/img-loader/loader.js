import styled from "styled-components";
import React from "react";
import { useState, useEffect, useRef } from "react";

const LoaderDiv = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  &.blur {
    filter: blur(7px);
    position: relative;
    & .real-image {
      opacity: 0;
    }
  }

  & img {
    border-radius: 8rem;
  }

  & .placeholder-image,
  & .real-image {
    width: 100%;
    opacity: 1;
    object-fit: cover;
  }

  & .real-image {
    position: absolute;
    top: 0;
    left: 0;
  }
  & .placeholder-image {
    position: relative;
  }

  &.unblur {
    position: relative;
    animation: unblur 1s ease-in-out forwards;
    @keyframes unblur {
      from {
        filter: blur(7px);
      }
      to {
        filter: blur(0);
      }
    }
  }
`;

const LoadImage = (props) => {
  const [Blur, setBlur] = useState(true);

  return (
    <LoaderDiv className={Blur ? "blur" : "unblur"}>
      <img className="placeholder-image" src={props.smallImgSrc} />
      <img
        onLoad={() => setBlur(false)}
        className="real-image"
        src={props.largeImgSrc}
      />
    </LoaderDiv>
  );
};

export default LoadImage;

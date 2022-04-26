import styled from "styled-components";
import colors from "../variables";
import React from "react";
import { useState, useEffect, useRef } from "react";

const LoaderDiv = styled.div`

  .image-container {
    position: relative;
    overflow: hidden;
  }

  .placeholder-image,
  .real-image {
    width: 100%;
  }

  .blur .real-image {
    opacity: 0;
  }

  .real-image {
    position: absolute;
    top: 0;
    left: 0;
  }

  .blur {
    filter: blur(5px);
  }

  .unblur {
    animation: unblur 1s linear;
  }

  @keyframes unblur {
    from {
      filter: blur(5px);
    }
    to {
      filter: blur(0);
    }
  }
`;

const LoadImage = (props) => {
    const [blur, setBlur] = React.useState(true);
    const loadingImage = React.useRef();
    
    React.useEffect(() => {
      if (loadingImage.current.complete) {
        setBlur(false);
      }
      
      loadingImage.current.addEventListener('load', () => {
        setBlur(false);
      });
    }, []);
    
    return (
      <LoaderDiv className={`image-container ${blur ? "blur" : "unblur"}`}>
        <img className="placeholder-image" src={props.smallImgSrc} />
        <img className="real-image" ref={loadingImage} src={props.largeImgSrc} />
      </LoaderDiv> 
    )
  }

export default LoadImage;

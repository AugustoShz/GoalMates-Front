import styled from "styled-components";

export const Wrapper = styled.div`
  .animate-close-right {
    position: absolute;
    right: -20%;
    top: 50px;
    background-color: #7b68ee;
    width: 20%;
    height: calc(100% - 50px);
  }
  .animate-open-right {
    position: absolute;
    right: 0;
    top: 50px;
    animation: animateOpenRight 1s;
    background-color: #7b68ee;
    width: 20%;
    height: calc(100% - 50px);
  }

  @keyframes animateOpenRight {
    from {
      right: -20%;
      opacity: 0;
    }
    to {
      right: 0;
      opacity: 1;
    }
  }



  .animate-close-left {
    position: absolute;
    left: -20%;
    top: 50px;
    background-color: #7b68ee;
    width: 20%;
    height: calc(100% - 50px);
  }
  .animate-open-left {
    position: absolute;
    left: 0;
    top: 50px;
    animation: animateOpenLeft 1s;
    background-color: #7b68ee;
    width: 20%;
    height: calc(100% - 50px);
  }
  @keyframes animateOpenLeft {
    from {
      left: -20%;
      opacity: 0;
    }
    to {
      left: 0;
      opacity: 1;
    }
  }
`;

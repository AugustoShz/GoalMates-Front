import styled from "styled-components";

export const Wrapper = styled.div`
  height:100%;

  .animate-right {
    position: relative;
    animation: animateright 0.4s;
  }

  @keyframes animateright {
    from {
      right: 0;
      opacity: 1;
      width: 20%;
      height: 100%;
      background-color: #7b68ee;
    }
    to {
      right: 300;
      opacity: 0;
    }
  }

  .animate-left {
    position: relative;
    animation: animateleft 1s;
    width: 20%;
    height: 100%;
    background-color: #7b68ee;
  }
  @keyframes animateleft {
    from {
      left: -300px;
      opacity: 0;
    }
    to {
      left: 0;
      opacity: 1;
    }
  }
`;

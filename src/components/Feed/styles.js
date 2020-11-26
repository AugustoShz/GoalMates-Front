import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 20% 60% 20%;

  .posts {
    max-height: calc(100vh - 50px);
    overflow-y: auto;
    padding: 15px;

    &::-webkit-scrollbar {
      background-color: #aaa;
      width: 5px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: black;
    }
  }
`;

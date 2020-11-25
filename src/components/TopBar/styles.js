import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  background-color: #5645bd;
  display:grid;
  grid-template-columns: 20% 60% 20%;
  align-items:  center;

  .top-bar-left{
    padding-left: 5px;
    display:flex;
    img{
      height: 40px;
      justify-self: flex-end;
    }
  }

  .top-bar-search{
    background-color: white;
  }

  .top-bar-right{
    padding-right: 5px;
    display:flex;
    justify-content: flex-end;
  }
`
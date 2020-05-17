import styled from "styled-components";
import { TransitionGroup } from "react-transition-group";

export const BodyContainer  = styled.div`
  display: flex;
  flex: 8;
`;

export const BodyTransition = styled(TransitionGroup)`

  .page-area {
    position: absolute;
    display: flex;
    width: 100%;
    height: 85%;
  }

  .page-enter {
    transform: translateX(-100%);
  }

  .page-enter.page-enter-active {
    transform: translateX(0%);
    transition: all 500ms ease-in-out;
  }

  .page-exit {
    transform: translateX(0%);
  }

  .page-exit.page-exit-active {
    transform: translateX(100%);
    transition: all 500ms ease-in-out;
  }
`;

export const BodyArea = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 84%;
`;
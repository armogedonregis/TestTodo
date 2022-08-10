import styled from "styled-components";
import tw from "twin.macro";

// Обертка

export const Wrapper = styled.div`
border-radius: 30px;
::-webkit-scrollbar {
    width: 0px;
  }
  ${tw`
  w-[390px]
  overflow-x-hidden
  overflow-y-scroll
  px-5
  h-[844px]
  mx-auto
  bg-bgBlack-area
`}
`;

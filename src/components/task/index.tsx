import tw from "twin.macro";
import styled from "styled-components";
import { CustomizedSwitches } from "../swtich";
import { useTasks } from "../todoContext";
import React from "react";

// Контейнер под один таск

const Container = styled.div`
${tw`
    flex items-stretch justify-between
    mt-[16px]
`}
`;

// Цвет sticky перед таском

const TextContainer = styled.div<{
  stickColor?: number;
}>`
${({stickColor}) => 
stickColor === 1 ? tw`before:bg-stick-red` : 
stickColor === 2 ? tw`before:bg-stick-blue` : 
stickColor === 3 ? tw`before:bg-stick-yellow` : tw``
}
${tw`
  flex
  before:rounded-[3px]
  before:border-2
  before:w-[5px]
  before:h-[40px]
  before:mr-[13px]
`}
`;

// Контейнер под текст таска

const TextContent = styled.div`
`;

// Заголовок таска

const Title = styled.h3<{ line?: boolean; }>`
${tw`
  m-0
  font-abhaya
  font-semibold
  text-2xl
`}
${({line}) => 
line ? tw`line-through` : tw``
}
`;

// Описание таска

const Descr = styled.p`
${tw`
  text-primaryFocus
  text-base
  font-abhaya
  font-semibold
  mt-0
`}
`;

export const Task: React.FC<{
    task?: string;
    text?: string;
    stickColor?: number;
    done?: boolean;
    num?: number;
}> = ({task, text, stickColor, done, num}) => {

  // Вызов контекста таска

  const {HandlerDo} = useTasks();

  return (
    <Container>
      <TextContainer stickColor={stickColor}>
        <TextContent>
          <Title line={done}>{task}</Title>
          <Descr>{text}</Descr>
        </TextContent>
      </TextContainer>
      <CustomizedSwitches 
        onChange={() => HandlerDo(num)}
        checked={done}
      />
    </Container>
  );
};

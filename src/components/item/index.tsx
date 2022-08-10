import tw from "twin.macro";
import styled from "styled-components";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { Task } from "../task";
import { memo, useState } from "react";

// Контейнер под тодо с открытием

const Container = styled.div<{
  active?: boolean;
  cont?: boolean;
}>`
${({cont}) => 
cont ? tw`pl-[15px] pr-[29px]` : tw``
}

${({active}) => 
active ? tw`
  rounded-3xl
  shadow-xl
  pl-[15px]
  mb-8
  flex flex-col
  justify-center
  min-w-[350px] min-h-[79px]
  bg-bgBlack-item
` : tw``
}
`;

// Тодо текст

const ItemContainer = styled.div<{
  active?: boolean;
}>`
${({active}) => 
active ? tw`pl-[16px]` : tw`justify-between`
}
${tw`
  flex items-center
`}
`;

// Иконка после открытия тодо

const CheckBox = styled(CheckBoxIcon)`
${tw`
  text-[31px]
  mr-[10px]
`}
`;

// Правая икона(ShevronDown)

const CircleDown = styled(ExpandCircleDownIcon)`
${tw`
  text-[25px]
  cursor-pointer
`}
`;

// Заголовок тодо

const ItemTitle = styled.h2<{
  active?: boolean;
}>`
${({active}) => 
active ? tw`after:content-[':']` :
  tw`
  before:rounded-[3px]
  before:bg-stick
  before:border-2
  before:w-[5px]
  before:h-[40px]
  before:px-[2.5px]
  before:py-[5px]
  before:mr-[13px]`
}
${tw`
  text-2xl
  font-abhaya
  font-semibold
  cursor-pointer
`}
`;

export const Item: React.FC<{
  itemTitle: any;
  tasks: any;
}> = ({itemTitle, tasks}) => {

  // Открытие тодо

  const [open, setOpen] = useState(false);

  const Handler = () => setOpen(!open);

  return (
    <>
    <Container cont={!open} active={!open}>
      <ItemContainer active={open}>
        {open && <CheckBox />}
        <ItemTitle active={open} onClick={Handler}>{itemTitle}</ItemTitle>
        {!open && <CircleDown onClick={Handler} />}
      </ItemContainer>
    </Container>
    <Container active={open}>
        {open && tasks.map((item: JSX.IntrinsicAttributes & { 
                            task?: string | undefined; 
                            text?: string | undefined; 
                            stickColor?: number | undefined; 
                            done?: boolean | undefined; 
                            num?: number | undefined; }, index: number) => {
          return (
              <Task 
                key={+new Date() + Math.random()}
                stickColor={index + 1} 
                {...item} 
                />
              )
            })
          }
      </Container>
      </>
  );
};

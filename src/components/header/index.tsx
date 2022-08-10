import { memo } from "react";
import tw from "twin.macro";
import SettingsIcon from "@mui/icons-material/Settings";
import styled from "styled-components";
import { CustomizedSwitches } from "../swtich";
import { useNews } from "../newsContext";

// Header Container

const Container = styled.nav`
${tw`
  flex items-center justify-between
  px-[17px]
  pt-[13px]
  mb-[17px]
`}
`;

// Logo

const Title = styled.h1`
${tw`
  text-4xl
  font-actor
  font-normal
  m-0
`}
`;

// Icon Settings

const Settings = styled(SettingsIcon)`
${tw`
  text-[2.4rem]
  cursor-pointer
`}
`;

export const Header: React.FC = memo(() => {
  
  // Открытие свитчера по иконке

  const {active, checked, HandlerOpen, HandlerSwitch} = useNews();

  return (
    <Container>
      <Title>To Do</Title>
        {active && 
        <CustomizedSwitches
          onChange={HandlerSwitch}
          checked={checked}
        />
        }
      <Settings onClick={HandlerOpen} />
    </Container>
  );
});

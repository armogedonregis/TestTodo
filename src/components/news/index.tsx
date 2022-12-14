import tw from "twin.macro";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import Marquee from "react-fast-marquee";
import { NewsService } from "../../services/news.service";
import { useNews } from "../newsContext";

// Бегущая строка

// --duration: 1000s !important;  для 100 постов

const Container = styled(Marquee)`
& .marquee {
    --duration: 100s !important;
}
${tw`
    mb-[32px]
`}
`;

// Одна новость

const Item = styled.div`
${tw`
  font-semibold
  font-abhaya
  text-base
  px-[50px]
`}
`;

export const News: React.FC = () => {

  const {isLoading,
    data: response,
    error} = useQuery(['title'], () => NewsService.getAll(), );
    
    const { checked } = useNews();

  return (
    <>
    {error && <div>{(error as any).message}</div>}
    {checked ? 
      <Container 
        gradient={false}
        >
        {isLoading ? <div>Loading...</div> : 
          response?.data.results.map((title: any) => {
            return (
              <Item key={Math.random()}>
                {title.title}
              </Item>
              )
          })}
      </Container> 
      : ''}
    </>
  );
};

import styled from "styled-components";
import tw from "twin.macro";

type LayoutProps = {
  children: React.ReactNode;
};

const PageContainer = styled.div`
${tw`
  flex
  flex-col
  justify-center
  w-screen
  text-primary
  tracking-wide
  font-abhaya
  h-screen
  items-center
  overflow-x-hidden
  bg-bgBlack
`}
`;

export default function Layout({
  children,
}: LayoutProps) {
  return (
    <>
      <main>
        <PageContainer>{children}</PageContainer>
      </main>
      <footer>
      </footer>
    </>
  );
};

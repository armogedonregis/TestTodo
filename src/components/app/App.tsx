import { Header } from "../header";
import Layout from "../layout";
import { List } from "../list";
import { News } from "../news";
import { NewsProvider } from "../newsContext";
import { Wrapper } from "../wrapper";

export default function App() {
  return (
    <Layout>
      <Wrapper>
      <NewsProvider>
        <Header />
        <List />
        <News />
      </NewsProvider>
      </Wrapper>
    </Layout>
  );
};

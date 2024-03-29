import { getAllArticles } from "@/blogAPI";
import ArticleList from "./components/ArticleList";
import SideMenu from "./components/SideMenu";

export default async function Home() {
  const articles = await getAllArticles();

  return (
    <div className="md:flex">
      <section className="w-full md:w-2/3 flex flex-col items-center px-3">
        <ArticleList articles={articles} />
      </section>

      <SideMenu />
    </div>
  );
}

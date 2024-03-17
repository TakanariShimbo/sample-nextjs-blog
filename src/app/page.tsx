import ArticleList from "./components/ArticleList";
import SideMenu from "./components/SideMenu";

export default function Home() {
  return (
    <div className="md:flex">
      <section className="w-full md:w-2/3 flex flex-col items-center px-3">
        <ArticleList/>
      </section>

      <SideMenu/>
    </div>
  );
};

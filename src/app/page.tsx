import Header from "@/layout/Header/Header";
import CreateRoomSection from "@/sections/CreateRoomSection/CreateRoomSection";
import Footer from "@/layout/Footer/Footer";
import css from "./page.module.css";

export default function Home() {
  return (
    <div className={css.wrapper}>
      <Header />
      <main className={css.main}>
        <CreateRoomSection />
      </main>
      <Footer />
    </div>
  );
}

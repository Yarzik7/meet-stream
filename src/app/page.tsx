import Header from "@/layout/Header/Header";
import CreateRoomSection from "@/sections/CreateRoomSection/CreateRoomSection";
import Footer from "@/layout/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <CreateRoomSection />
      </main>
      <Footer />
    </div>
  );
}

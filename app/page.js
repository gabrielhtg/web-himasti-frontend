import HomeNavbar from "./components/home/HomeNavbar";
import FirstPage from "./components/home/FirstPage";
import Content from "./components/home/AboutHimasti";

export default function Home() {
  return (
    <div className=" top-0">
      <HomeNavbar />
      <FirstPage />
      <Content />
    </div>
  );
}

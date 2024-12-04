import TopBar from "./top-bar";
import MiddleHeader from "./middle-header";
import Navigation from "./navigation";

export default function Header() {
  return (
    <header className="w-full">
      <TopBar />
      <div className="relative mb-4 mx-4 sm:mx-12 lg:mx-28">
        <MiddleHeader />
      </div>
      <div className=" top-0 relative z-50 bg-custom-primary">
        <div className="relative mx-4 sm:mx-12 lg:mx-28">
          <Navigation />
        </div>
      </div>
    </header>
  );
}

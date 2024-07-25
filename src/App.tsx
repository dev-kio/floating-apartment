import { Suspense } from "react";
import MyCanvas from "./components/MyCanvas";
import ThemeToggle from "./components/ThemeToggle";
import Footer from "./components/Footer";

const Loading = () => {
  return (
    <div className="animate-pulse flex h-screen justify-center items-center text-2xl">
      Loading...
    </div>
  );
};
function App() {
  return (
    <div className="font-syne dark:text-white flex justify-center caret-transparent">
      <ThemeToggle />
      <Suspense fallback={<Loading />}>
        <MyCanvas />
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;

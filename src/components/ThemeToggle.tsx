import { useState, useEffect } from "react";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const [root, setRoot] = useState<HTMLElement>();

  const getMediaQueryPreference = () => {
    const mediaQuery = "(prefers-color-scheme: dark)";
    const mql = window.matchMedia(mediaQuery);
    const hasPreference = typeof mql.matches === "boolean";
    if (hasPreference) {
      return mql.matches;
    }
  };

  useEffect(() => {
    setMounted(true);

    const root = window.document.documentElement;
    setRoot(root);

    const mediaQueryPreference = getMediaQueryPreference();

    if (localStorage.theme === "dark" || mediaQueryPreference) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root?.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  }, []);

  const toggleMode = () => {
    root?.classList.contains("dark")
      ? root?.classList.replace("dark", "light")
      : root?.classList.replace("light", "dark");
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="absolute z-10 my-2">
      <label className="gap-3 overflow-hidden select-none cursor-pointer flex items-center my-1">
        <input
          type="checkbox"
          className="absolute appearance-none peer"
          onChange={toggleMode}
        />
        <img
          src="/images/lightmode.png"
          alt="light"
          width={0}
          height={0}
          sizes="100vw"
          className="absolute w-[100px] h-auto duration-1000 opacity-100 peer-checked:opacity-0"
        />
        <img
          src="/images/darkmode.png"
          alt="dark"
          width={0}
          height={0}
          sizes="100vw"
          className="absolute w-[100px] h-auto duration-1000 opacity-0 peer-checked:opacity-100"
        />

        <img
          src="/images/moon.png"
          alt="moon"
          width={0}
          height={0}
          sizes="100vw"
          className="w-[35px] ml-2 duration-700 translate-y-[-150%] peer-checked:translate-y-0"
        />
        <img
          src="/images/sun.png"
          alt="sun"
          width={0}
          height={0}
          sizes="100vw"
          className="w-[35px] mr-2 duration-700 translate-y-0 peer-checked:translate-y-[150%]"
        />
      </label>
    </div>
  );
};

export default ThemeToggle;

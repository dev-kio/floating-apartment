import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";
import {
  SiHtml5,
  SiCss3,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiNestjs,
  SiPostgresql,
} from "react-icons/si";

type Props = {
  right?: boolean;
  opacity: number;
  children: React.ReactNode;
};

const Section = (props: Props) => {
  return (
    <section
      className={`h-screen flex flex-col justify-center p-10 ${
        props.right ? "items-end" : "items-start"
      }`}
      style={{
        opacity: props.opacity,
      }}
    >
      <div className="w-[50%] flex items-center justify-center">
        <div className="max-w-sm w-full">
          <div className="bg-white rounded-2xl px-8 py-12 shadow-md dark:bg-neutral-800">
            {props.children}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Cards = () => {
  const scroll = useScroll();
  const [opacityFirstSection, setOpacityFirstSection] = useState(1);
  const [opacitySecondSection, setOpacitySecondSection] = useState(1);
  const [opacityLastSection, setOpacityLastSection] = useState(1);

  useFrame(() => {
    setOpacityFirstSection(1 - scroll.range(0, 1 / 3));
    setOpacitySecondSection(scroll.curve(1 / 3, 1 / 3));
    setOpacityLastSection(scroll.range(2 / 3, 1 / 3));
  });

  return (
    <Scroll html>
      <div className="w-screen">
        <Section opacity={opacityFirstSection}>
          <h1 className="font-poller text-2xl">Hello, I'm Kio</h1>
          <p className="text-neutral-500">Here's a glimpse of my life and me</p>
          <p className="mt-3 text-lg">I know:</p>
          <ul className="leading-9">
            <li>
              👩‍💻 How to <i>code</i>
            </li>
            <li>
              👩‍🏫 How to <i>learn</i>
            </li>
            <li>
              📦 How to <i>deliver</i>
            </li>
          </ul>
          <p className="animate-bounce  mt-6">↓</p>
        </Section>
        <Section right opacity={opacitySecondSection}>
          <h1 className="font-poller text-2xl">My skillsets 🔥</h1>
          <p className="mt-3 text-lg">
            <b>Frontend 💅</b>
          </p>
          <ul className="leading-5">
            <li className="flex gap-2 items-center">
              <SiHtml5 />
              HTML
            </li>
            <li className="flex gap-2 items-center">
              <SiCss3 />
              CSS
            </li>
            <li className="flex gap-2 items-center">
              <SiTypescript />
              TypeScript
            </li>
            <li className="flex gap-2 items-center">
              <SiReact />
              ReactJS
            </li>
            <li className="flex gap-2 items-center">
              <SiTailwindcss />
              Tailwind
            </li>
          </ul>
          <p className="mt-3">
            <b>Backend 🔬</b>
          </p>
          <ul className="leading-5">
            <li className="flex gap-2 items-center">
              <SiNodedotjs />
              NodeJS
            </li>
            <li className="flex gap-2 items-center">
              <SiNestjs />
              NestJS
            </li>
            <li className="flex gap-2 items-center">
              <SiPostgresql />
              PostgreSQL
            </li>
          </ul>
          <p className="animate-bounce mt-6">↓</p>
        </Section>
        <Section opacity={opacityLastSection}>
          <h1 className="font-poller text-2xl">🤙 Call me maybe?</h1>
          <p className="text-neutral-500 text-lg">
            I'm very expensive but you'll get what you pay for
          </p>
          <p className="mt-6 p-3 bg-neutral-200 dark:bg-neutral-600 rounded-lg">
            📞 <a href="tel:(+81) 80-1234-1234">(+81) 80-1234-1234</a>
          </p>
        </Section>
      </div>
    </Scroll>
  );
};

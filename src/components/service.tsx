import Image from "next/image";
import ServiceList from "./template/service-list";

const items = [
  {
    id: 1,
    logo: "/3d/smartphone.svg",
    title: "24 Hours support service",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quaerat at, iste quae quis ea dolorem sunt harum, mollitia quibusdam, deleniti dolore ad qui atque! Quos ipsa asperiores similique qui incidunt alias reiciendis molestiae quia.",
  },
  {
    id: 2,
    logo: "/3d/coin.svg",
    title: "Transparent Fees",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quaerat at, iste quae quis ea dolorem sunt harum, mollitia quibusdam, deleniti dolore ad qui atque! Quos ipsa asperiores similique qui incidunt alias reiciendis molestiae quia.",
  },
  {
    id: 3,
    logo: "/3d/calendar.svg",
    title: "On Time",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quaerat at, iste quae quis ea dolorem sunt harum, mollitia quibusdam, deleniti dolore ad qui atque! Quos ipsa asperiores similique qui incidunt alias reiciendis molestiae quia.",
  },
  {
    id: 4,
    logo: "/3d/projector.svg",
    title: "Support Feature Addition",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quaerat at, iste quae quis ea dolorem sunt harum, mollitia quibusdam, deleniti dolore ad qui atque! Quos ipsa asperiores similique qui incidunt alias reiciendis molestiae quia.",
  },
  {
    id: 5,
    logo: "/3d/folder.svg",
    title: "Officialy Listed on Mulitple Platforms",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quaerat at, iste quae quis ea dolorem sunt harum, mollitia quibusdam, deleniti dolore ad qui atque! Quos ipsa asperiores similique qui incidunt alias reiciendis molestiae quia.",
  },
  {
    id: 6,
    logo: "/3d/rocket.svg",
    title: "Latest Technology",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quaerat at, iste quae quis ea dolorem sunt harum, mollitia quibusdam, deleniti dolore ad qui atque! Quos ipsa asperiores similique qui incidunt alias reiciendis molestiae quia.",
  },
];

export default function Service() {
  return (
    <section className="px-5">
      <div className="flex flex-col items-center justify-center mx-auto mb-20 md:px-0 max-w-7xl">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-center md:text-4xl">
            Great Apps , zero-hassle<span className="text-ladeva">.</span>
          </h1>
          <p className="max-w-4xl py-3 tracking-wide leading-6 text-sm text-center md:py-5">
            When you hire us, you will get the whole team with all of our
            creative power. Not just 1-man-show with couple of outsourced
            designers like many others.
          </p>
        </div>
        <ServiceList />
      </div>
    </section>
  );
}

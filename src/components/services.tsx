import Image from "next/image";

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

export default function Services() {
  return (
    <section className="flex flex-col items-center justify-center mx-auto mb-20 max-w-7xl">
      <h1 className="text-4xl font-semibold">
        Great Apps , zero-hassle<span className="text-ladeva">.</span>
      </h1>
      <span className="max-w-4xl py-5 text-center">
        When you hire us, you will get the whole team with all of our creative
        power. Not just 1-man-show with couple of outsourced designers like many
        others.
      </span>
      <div className="grid grid-cols-3 gap-5">
        {items.map((item) => (
          <div
            className="px-5 py-3 transition duration-150 ease-in-out border rounded-lg cursor-pointer hover:border-yellow-400 hover:shadow-lg hover:shadow-yellow-100/50"
            key={item.id}
          >
            <div className="flex items-center gap-2 pb-1">
              <Image src={item.logo} alt="3d-icon" width={70} height={70} />
              <h1 className="text-base font-medium">{item.title}</h1>
            </div>
            <p className="text-sm ">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

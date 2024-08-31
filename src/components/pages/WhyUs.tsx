import Image from "next/image";
import Product from "../product";
import Faq from "../faq";
import Closing from "../closing";

export default function WhyUs() {
  return (
    <main className="h-full">
      <div className="max-w-5xl mx-auto pt-48 pb-16">
        <h1 className="text-6xl font-bold text-center">
          What make us special
          <span className="text-ladeva">.</span>
        </h1>
        <p className="max-w-lg mx-auto py-5 text-center">
          There are tons of other similar services out there. Then what make us
          stand out over the rest?
        </p>
        <Image
          src="/3d/target.svg"
          alt="target-icon-3d"
          width={300}
          height={300}
          className="mx-auto"
        />
        <div className="mx-auto max-w-2xl">
          <h2 className="text-4xl font-bold">
            Reflect Your bussiness Uniqueness
            <span className="text-ladeva">.</span>
          </h2>
          <p className="py-5 text-balance">
            Ladeva is more than just a software development company. We are your
            partners in creating digital solutions tailored to meet the unique
            needs of your business. Our technical expertise, combined with a
            customer-centric approach, ensures that every software we build is
            not only functional but also delivers an exceptional user
            experience.
          </p>
          <p className="font-semibold">Our Strength :</p>
          <div className="pl-5 py-3">
            <ol className="list-decimal list-outside space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="[ol_&]:marker:font-bold">
                  <span className="font-bold mr-1">{feature.title}</span>
                  {feature.description}
                </li>
              ))}
            </ol>
          </div>
          <Image
            src="/3d/rolls-paper.svg"
            alt="rolls-paper-icon-3d"
            width={300}
            height={300}
            className="mx-auto"
          />
          <h2 className="text-4xl font-bold">
            Transparent Payment
            <span className="text-ladeva">.</span>
          </h2>
          <p className="py-3">
            At Ladeva, we like to keep things simple and straightforward. Before
            we kick off any project, you&apos;ll get a detailed budget proposal
            (RAB) that breaks down all the costs involved. This way, you know
            exactly what you&apos;re paying for, with no hidden fees sneaking up
            on you. We believe in being upfront, so you can plan your budget
            without any guesswork.
          </p>
          <p className="py-3">
            At Ladeva, we like to keep things simple and straightforward. Before
            we kick off any project, you&apos;ll get a detailed budget proposal
            (RAB) that breaks down all the costs involved. This way, you know
            exactly what you&apos;re paying for, with no hidden fees sneaking up
            on you. We believe in being upfront, so you can plan your budget
            without any guesswork.
          </p>
        </div>
      </div>
      <Product />
      <Faq />
      <Closing />
    </main>
  );
}

const features = [
  {
    title: "Full Customization",
    description:
      "We understand that every business is unique. That’s why we offer full customization for every software we develop, ensuring that the solution you receive truly reflects your brand identity and business goals.",
  },
  {
    title: "Continuous Innovation",
    description:
      "Technology is always evolving, and so are we. Ladeva stays at the forefront of innovation, adopting the latest technologies to deliver smart, efficient, and sustainable solutions.",
  },
  {
    title: "Expert Team",
    description:
      "Our team is composed of professionals with extensive experience in various fields, from frontend and backend development to project management and UX/UI design. This diverse expertise allows us to deliver comprehensive and holistic solutions.",
  },
  {
    title: "Collaborative Approach",
    description:
      "We believe that collaboration is the key to project success. Ladeva works closely with clients from start to finish, ensuring that each development phase aligns with your vision and expectations.",
  },
  {
    title: "Commitment to Quality",
    description:
      "Every detail in our software is developed to the highest quality standards. We conduct thorough testing to ensure that the final product is stable, secure, and high-performing.",
  },
  {
    title: "Ongoing Support",
    description:
      "Our relationship with clients doesn’t end when the software is delivered. Ladeva offers ongoing support to ensure your product continues to function optimally as your business and needs evolve.",
  },
];

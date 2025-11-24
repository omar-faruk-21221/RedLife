import Image from "next/image";
import steps from "../../public/steps.json";

export default function HowWork() {
  return (
    <div className="py-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center ">
      {steps.map(({ id, title, description, iconUrl, iconColor }) => (
        <div
          key={id}
          className="p-6 border-2 bg-primary rounded-2xl text-base-300 shadow-2xl hover:shadow-lg transition hover:bg-primary-content hover:text-primary hover:scale-105"
        >
          <Image
            src={iconUrl}
            width={40}
            height={40}
            alt={title}
            className="mb-3"
            style={{ filter: `drop-shadow(0 0 2px ${iconColor})` }}
          />

          <h3 className="text-xl font-semibold mb-3 ">
            {title}
          </h3>
          <p >{description}</p>
        </div>
      ))}
    </div>
  );
}

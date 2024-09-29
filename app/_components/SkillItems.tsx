import Image from "next/image";

interface Skill {
  title: string;
  uri: string;
}

interface SkillItemsProps {
  title: string;
  skills: Skill[];
}

const SkillItems = ({ title, skills }: SkillItemsProps) => {
  return (
    <div className="">
      <p className="mb-4 text-2xl font-bold">{title}</p>
      <div className="grid auto-cols-max grid-flow-col gap-10">
        {skills.map((skillItem) => (
          <div
            key={skillItem.title}
            className="group flex flex-col items-center transition-all duration-300 ease-in-out hover:scale-110 hover:rounded-xl hover:bg-blue-100 hover:p-4 hover:shadow-md"
          >
            <Image
              src={skillItem.uri}
              alt={skillItem.title}
              width={80}
              height={80}
              className="grayscale transition-all duration-300 ease-in-out group-hover:grayscale-0"
            />
            <p className="mt-2 text-center font-bold">{skillItem.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillItems;

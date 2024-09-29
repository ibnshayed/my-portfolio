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
      <p className="mb-2 text-xl font-bold">{title}</p>
      <div className="grid auto-cols-max grid-flow-col gap-10">
        {skills.map((skillItem) => (
          <div key={skillItem.title}>
            <Image
              src={skillItem.uri}
              alt={skillItem.title}
              width={80}
              height={80}
              className="grayscale hover:grayscale-0"
            />
            <p className="mt-2 text-center font-bold">{skillItem.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillItems;

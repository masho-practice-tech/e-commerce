interface SkillCardProps {
  skill: {
    title: string;
    Image: string;
  };
}
const SkillCard = ({skill}:SkillCardProps) => {
  return (
    <div data-aos='fade-up' className="shadow-md shadow-[#040c16]  bg-gray-800 text-white pt-4 rounded-md hover:scale-110 duration-300 ">
      <img className="w-20 mx-auto" src={skill.Image} alt={skill.title} />
      <p className="my-4">{skill.title}</p>
    </div>
  );
};

export default SkillCard;

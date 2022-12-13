import { SkillsProps } from "./SkillProps";

export const Skills = (props: SkillsProps) => {
  const { skills } = props
  return (
    <>
      <ul>
        {skills && skills.map((skill) => {
          return <li key={skill}>skill</li>;
        })}
      </ul>
    </>
  );
};

import {
  frontEnd,
  frontEndFrameworksAndLibraries,
  devOpsAndCloud,
  backEnd,
  other,
} from "@/data/skills";
import SkillsItem from "./SkillsItem";
import { getDictionary } from "@/dictionaries";

type Props = {
  lang: any;
};
export default async function Skills({ lang }: Props) {
  const content = await getDictionary(lang);
  const list = [
    {
      title: content.Skills.subtitles[0],
      data: frontEnd,
    },
    {
      title: content.Skills.subtitles[1],
      data: frontEndFrameworksAndLibraries,
    },
    {
      title: content.Skills.subtitles[2],
      data: backEnd,
    },
    {
      title: content.Skills.subtitles[3],
      data: devOpsAndCloud,
    },
    {
      title: content.Skills.subtitles[4],
      data: other,
    },
  ];

  return (
    <section id="skills">
      <h2>{content.Skills.title}</h2>
      {list.map(({ title, data }) => (
        <div key={title} className="skills-container">
          <p className="skills-sub-title">{title}</p>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              flexWrap: "wrap",
            }}
          >
            {Object.keys(data).map((skill) => (
              <SkillsItem
                lang={lang}
                key={skill}
                icon={data[skill].icon}
                iconDimensions={data[skill].iconDimensions}
                alias={data[skill].alias}
                baseLevel={data[skill].baseLevel}
                expirience={data[skill].expierience}
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

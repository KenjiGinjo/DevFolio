import { projectsData } from "@/data/projects";
import Link from "next/link";
import ProjectsThumb from "./ProjectsThumb";
import { getDictionary } from "@/dictionaries";

type ProjectsProps = {
  lang: any;
};

export default async function Projects({ lang }: ProjectsProps) {
  const content = await getDictionary(lang);
  return (
    <section id="projects">
      <h2>{content.Projects.title}</h2>
      {projectsData.map((item, index) => {
        return (
          <details key={index} className="project">
            <summary className="project-title">
              <h3>
                {lang === "en-US" ? item.titleEn : item.title}
                <span>
                  {item.startAt} {content.Projects.z} {item.endAt}
                </span>
              </h3>
            </summary>
            <div style={{ paddingLeft: "1rem" }}>
              <div>
                {item.thumb.map((thumb, index) => {
                  return (
                    <ProjectsThumb
                      key={index}
                      index={index}
                      title={item.title}
                      thumb={thumb}
                    />
                  );
                })}
              </div>
              <p
                className="project-description"
                style={{ marginTop: "0.3rem", cursor: "auto" }}
              >
                {lang === "en-US" ? item.descriptionEn : item.description}
              </p>
              <p>
                {item.detail.map((detail, index) => {
                  return (
                    <Link
                      key={index}
                      href={`${lang !== "en-US" ? `/${lang}` : ""}/project/${
                        detail.fileName
                      }`}
                      style={{ marginRight: "1.5rem", fontSize: "0.8rem" }}
                    >
                      [{detail.date}] {content.Projects.d}_{index + 1}
                    </Link>
                  );
                })}
              </p>
            </div>
          </details>
        );
      })}
    </section>
  );
}

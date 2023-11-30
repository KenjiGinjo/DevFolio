import { getDictionary } from "@/dictionaries";

type AboutMeProps = {
  lang: any;
};
export default async function AboutMe({ lang }: AboutMeProps) {
  const content = await getDictionary(lang);
  return (
    <div
      style={{
        padding: "1rem 0",
      }}
    >
      <div>{content.aboutMe.p_1}</div>
      <p>{content.aboutMe.p_2}</p>
      <p>{content.aboutMe.p_3}</p>
      <p>{content.aboutMe.p_4}</p>
    </div>
  );
}

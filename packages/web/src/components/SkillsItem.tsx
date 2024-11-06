"use client";
import Image from "next/image";
import { useState } from "react";
import { useModal } from "@/providers/modal";
import { timeDifference } from "@/utils/moment";
import {
  experienceText,
  skillModalProgressBarText,
} from "@/dictionaries/client";

type SkillsItemProps = {
  lang: any;
  icon: any;
  iconDimensions?: [number, number];
  alias: string;
  baseLevel: number;
  expirience: any;
};
export default function SkillsItem({
  icon,
  alias,
  baseLevel,
  expirience,
  iconDimensions,
  lang,
}: SkillsItemProps) {
  const level = baseLevel + expirience.length;
  const [showPop, setShowPop] = useState(false);
  const { openModal } = useModal();
  const progress = level > 100 ? 100 : level;
  const color =
    progress > 80
      ? "#99FF99"
      : progress > 60
      ? "#99CCFF"
      : progress > 40
      ? "#FFFFCC"
      : progress > 20
      ? "#FFD699"
      : "#FFCCCC";
  const pText = experienceText(lang);
  const proficient =
    progress > 80
      ? pText[0]
      : progress > 60
      ? pText[1]
      : progress > 40
      ? pText[2]
      : progress > 20
      ? pText[3]
      : pText[4];
  return (
    <div
      className="skill-container"
      onMouseEnter={() => setShowPop(true)}
      onMouseLeave={() => setShowPop(false)}
    >
      <div className="skill">
        {icon ? (
          <Image
            src={icon}
            width={iconDimensions ? iconDimensions[0] : 50}
            height={iconDimensions ? iconDimensions[1] : 50}
            alt={alias}
          />
        ) : (
          <span>{alias}</span>
        )}
      </div>

      <div className="skill-proficiency">
        <div
          className="skill-proficiency-bar"
          style={{
            width: `${progress}%`,
            backgroundColor: color,
          }}
        />
      </div>
      {showPop && (
        <div
          className="skill-pop"
          onClick={() => {
            openModal(
              <SkillsItemModal
                alias={alias}
                baseLevel={baseLevel}
                expierience={expirience}
                icon={icon}
                progress={progress}
                color={color}
                lang={lang}
              />
            );
          }}
        >
          <p className="skill-pop-title">{alias}</p>
          <p className="skill-pop-title">{proficient}</p>
        </div>
      )}
    </div>
  );
}
type SkillsItemModalProps = {
  baseLevel: number;
  expierience: any;
  alias: string;
  icon: any;
  progress: number;
  color: string;
  lang: any;
};
function SkillsItemModal({
  baseLevel,
  expierience,
  alias,
  icon,
  progress,
  color,
  lang,
}: SkillsItemModalProps) {
  const style = {
    title: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "0.8rem",
      fontWeight: "bold",
      marginBottom: "0.5rem",
    },
    progress: {
      fontSize: "0.5rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: "0.2rem",
      color: "#999",
    },
  };
  const smpt = skillModalProgressBarText(lang);
  return (
    <div
      style={{
        width: "20rem",
      }}
    >
      <div style={style.title}>
        {icon && (
          <Image
            src={icon}
            width={25}
            height={25}
            alt="Chrome"
            style={{
              marginRight: "0.5rem",
            }}
          />
        )}
        <div>{alias}</div>
      </div>

      <div className="skill-proficiency">
        <div
          className="skill-proficiency-bar"
          style={{
            width: `${progress}%`,
            backgroundColor: color,
          }}
        />
      </div>
      <div style={style.progress}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <div style={{ marginRight: "0.3rem" }}>
            {smpt[0]}: {baseLevel}
          </div>
          <div>
            {smpt[1]}: {expierience.length}
          </div>
        </div>
        <div>{baseLevel + expierience.length}/100</div>
      </div>
      <div
        style={{
          fontSize: "0.5rem",
          marginTop: "0.5rem",
          maxHeight: "20rem",
          overflow: "auto",
        }}
      >
        {expierience.map((item: any, index: number) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              marginBottom: "0.3rem",
            }}
          >
            <div
              style={{
                maxWidth: "16rem",
              }}
            >
              {lang === "en-US" ? item.tipEn : item.tip}
            </div>
            <div>{timeDifference(new Date(item.date), lang)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

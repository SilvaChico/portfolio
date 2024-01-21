type EducationCardProps = {
  universityName: string;
  degree: string;
  period: string;
};

export default function EducationCard({
  universityName,
  degree,
  period,
}: EducationCardProps) {
  return (
    <div className="grid grid-cols-[1fr,3fr] my-8">
      <div className="text-slate-400 text-sm">
        <p className="">{period}</p>
      </div>
      <div>
        <p>{universityName}</p>
        <p className="text-sm text-slate-400">{degree}</p>
      </div>
    </div>
  );
}

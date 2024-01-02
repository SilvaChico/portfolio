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
    <div className="flex my-8">
      <div className="w-36 text-slate-400 text-sm">
        <p>{period}</p>
      </div>
      <div className="ml-12">
        <p>{universityName}</p>
        <p className="text-sm text-slate-400">{degree}</p>
      </div>
    </div>
  );
}

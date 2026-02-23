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
    <div className="group glass-card rounded-xl p-5 mb-4 cursor-default">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
        <h3 className="font-semibold text-slate-100 group-hover:text-cyan-300 transition-colors">
          {universityName}
        </h3>
        <span className="text-xs text-slate-500 font-mono whitespace-nowrap sm:ml-4 mt-0.5 shrink-0">
          {period}
        </span>
      </div>
      <p className="text-sm text-slate-400 leading-relaxed">{degree}</p>
    </div>
  );
}

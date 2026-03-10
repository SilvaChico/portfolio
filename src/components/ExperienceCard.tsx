type ExperienceCardProps = {
  companyName: string;
  description: string;
  period: string;
  technologies?: string[];
};

export default function ExperienceCard({
  companyName,
  description,
  period,
  technologies,
}: ExperienceCardProps) {
  return (
    <div className="group glass-card rounded-xl p-5 mb-4 cursor-default">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
        <h3 className="font-semibold text-slate-100 group-hover:text-cyan-300 transition-colors">
          {companyName}
        </h3>
        <span className="text-xs text-slate-500 font-mono whitespace-nowrap sm:ml-4 mt-0.5 shrink-0">
          {period}
        </span>
      </div>
      <p className="text-sm text-slate-400 leading-relaxed mb-4">{description}</p>
      {technologies?.length ? (
        <div className="flex flex-wrap gap-2">
          {technologies.map((technology, index) => (
            <span
              key={index}
              className="inline-flex items-center rounded-full bg-violet-500/10 px-2.5 py-0.5 text-xs font-medium text-violet-300 border border-violet-500/20 hover:bg-violet-500/20 transition-colors"
            >
              {technology}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  );
}

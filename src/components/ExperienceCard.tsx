type ExperienceCardProps = {
  companyName: string;
  description: string;
  period: string;
  technologies: string[];
};

export default function ExperienceCard({
  companyName,
  description,
  period,
  technologies,
}: ExperienceCardProps) {
  return (
    <div className="grid grid-cols-[1fr,3fr] my-8">
      <div className="text-slate-400 text-sm">
        <p>{period}</p>
      </div>
      <div>
        <p>{companyName}</p>
        <p className="text-sm text-slate-400">{description}</p>
        <div className="flex flex-wrap gap-2 mt-3">
          {technologies.map((technology, index) => (
            <span
              key={index}
              className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

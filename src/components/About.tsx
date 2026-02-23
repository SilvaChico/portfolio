export default function About() {
  return (
    <div className="flex flex-col gap-5 text-slate-300 leading-relaxed text-[15px]">
      <p>
        As an experienced{" "}
        <span className="text-cyan-400 font-medium">Full Stack Engineer</span>{" "}
        with over 6 years of professional experience, I specialize in web
        development and have a proven track record of delivering high-quality
        software solutions. My journey in the tech industry has led me to work
        on diverse projects, ranging from developing a sentiment analysis web
        application using social network data to building an innovative
        investment dashboard for iCapital, where I currently contribute my
        expertise.
      </p>
      <p>
        One of my recent accomplishments includes collaborating with a fellow
        engineer to develop an MVP for an{" "}
        <span className="text-violet-400 font-medium">AI chat system</span>.
        This system stands out for its ability to integrate documents into its
        context, thereby enhancing its understanding and response to user
        queries.
      </p>
      <p>
        My technical skill set, coupled with my passion for{" "}
        <span className="text-cyan-400 font-medium">problem-solving</span> and
        team collaboration, makes me a valuable asset to any team seeking a
        dedicated and skilled Full Stack Engineer.
      </p>
      <div className="flex flex-wrap gap-2 mt-2">
        {[
          "React",
          "TypeScript",
          "Ruby on Rails",
          "Node.js",
          "PostgreSQL",
          "AWS",
          "Python",
          "Redux",
        ].map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 hover:bg-cyan-500/20 transition-colors cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <div className="flex flex-col gap-5 text-slate-300 leading-relaxed text-[15px]">
      <p>
        As an experienced{" "}
        <span className="text-cyan-400 font-medium">Software Engineer</span>{" "}
        with 10 years of professional experience, I specialize in web
        development and have a proven track record of delivering high-quality
        software solutions. My journey in the tech industry has led me to work
        across mobility, fintech, telecommunications, and research-driven
        products. I currently contribute at{" "}
        <span className="text-violet-400 font-medium">
          Volkswagen Group Digital Solutions
        </span>
        , where I build software for factories on a logistics platform that
        helps determine which parts are needed for each car and ensures the
        right components reach the right vehicle in production. Before that, I
        helped build an investment dashboard for iCapital and earlier products
        ranging from sentiment analysis using social network data to revenue
        assurance platforms.
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
        dedicated and skilled Software Engineer.
      </p>
      <div className="flex flex-wrap gap-2 mt-2">
        {[
          "Java",
          "AWS",
          "Angular",
          "Kotlin",
          "Python",
          "Spark",
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

import Contacts from "@/components/Contacts";
import MyCanvas from "@/components/MyCanvas";
import About from "@/components/About";
import ExperienceCard from "@/components/ExperienceCard";
import EducationCard from "@/components/EducationCard";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-violet-600/10 blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-cyan-500/8 blur-3xl" />
        </div>

        <div className="max-w-screen-xl mx-auto px-6 pt-24 pb-16 w-full flex flex-col lg:flex-row items-center gap-12">
          {/* Text content */}
          <div className="flex-1 flex flex-col gap-6 fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 w-fit">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-cyan-400 text-xs font-medium tracking-wider">
                VOLKSWAGEN GROUP DIGITAL SOLUTIONS
              </span>
            </div>
            <div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Francisco
                <br />
                <span className="gradient-text">Silva</span>
              </h1>
              <p className="mt-4 text-xl sm:text-2xl text-slate-400 font-light">
                Full Stack Engineer
              </p>
            </div>
            <p className="text-slate-500 text-base max-w-md leading-relaxed">
              8+ years building scalable web applications, currently at
              Volkswagen Group Digital Solutions. Passionate about clean code,
              great UX and the intersection of technology and business.
            </p>
            <div className="flex flex-wrap gap-4 mt-2">
              <a
                href="#experience"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-medium text-sm hover:opacity-90 transition-opacity glow-cyan"
              >
                View Experience
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-full border border-white/10 text-slate-300 font-medium text-sm hover:border-white/30 hover:text-white transition-all"
              >
                Get in touch
              </a>
            </div>
          </div>

          {/* 3D Canvas */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-cyan-500/10 blur-2xl" />
              <MyCanvas />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <a
          href="#about"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600 hover:text-slate-400 transition-colors"
        >
          <span className="text-xs tracking-widest">SCROLL</span>
          <svg
            className="w-4 h-4 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </a>
      </section>

      {/* About */}
      <section id="about" className="py-24">
        <div className="max-w-screen-xl mx-auto px-6">
          <SectionHeader number="01" title="About Me" />
          <div className="mt-10 max-w-2xl">
            <About />
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-24">
        <div className="max-w-screen-xl mx-auto px-6">
          <SectionHeader number="02" title="Experience" />
          <div className="mt-10 flex flex-col max-w-2xl">
            <ExperienceCard
              companyName="Volkswagen Group Digital Solutions"
              description="Working as a Full Stack Engineer on digital products and internal platforms, contributing across frontend and backend systems with a strong focus on maintainability, scalability, and user experience."
              period="2025 – PRESENT"
            />
            <ExperienceCard
              companyName="iCapital"
              description="Worked as a full stack engineer on the investment Dashboard building new features and improving existing ones. This dashboard is used by advisors to manage their clients' investments."
              period="2021 – 2025"
              technologies={[
                "React",
                "Redux",
                "Ruby on Rails",
                "PostgreSQL",
                "AWS",
                "Node.js",
              ]}
            />
            <ExperienceCard
              companyName="The Strategy Group"
              description="Built a Minimum Viable Product (MVP) of an AI chat system. This system is capable of integrating documents into its context, which means it can understand and respond to user queries based on the information contained in the uploaded documents."
              period="2023 (side project)"
              technologies={["Python", "LLM", "Llamaindex", "Streamlit"]}
            />
            <ExperienceCard
              companyName="SIBS"
              description="Backend engineer on the development of the central system of Portuguese ATMs and bank transactions."
              period="2021"
              technologies={["Java"]}
            />
            <ExperienceCard
              companyName="Mobileum"
              description="Developed bespoke revenue assurance web applications for telecommunications providers utilizing our company's internal Low-Code tool. These applications successfully identified and mitigated revenue loss for millions of prepaid customers from companies like MTN Nigeria and Entel Chile."
              period="2018 – 2020"
              technologies={["Java", "PostgreSQL", "Oracle SQL"]}
            />
            <ExperienceCard
              companyName="UNINOVA"
              description="Part-time researcher/developer on the development of a sentiment analysis (using IBM's Watson) web app using social network data."
              period="2016 – 2018"
              technologies={["Node.js", "React", "IBM Watson", "Bootstrap"]}
            />
            <ExperienceCard
              companyName="Siemens"
              description="1-month summer internship. Developer (SQL) in transportation and mobility section, developing the software used on Lisbon's and Porto's traffic light maintenance. Optimizing queries and making SLA calculations on traffic lights' downtime."
              period="2014"
              technologies={["Oracle SQL"]}
            />
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-24">
        <div className="max-w-screen-xl mx-auto px-6">
          <SectionHeader number="03" title="Education" />
          <div className="mt-10 flex flex-col max-w-2xl">
            <EducationCard
              universityName="Faculdade de Ciências e Tecnologia — Universidade Nova de Lisboa"
              degree="Post-graduation in Electrical and Computer Engineering. Completed all master's degree courses with a 15/20 average."
              period="2011 – 2017"
            />
            <EducationCard
              universityName="TU Delft (The Netherlands)"
              degree="One year exchange program in Electrical and Computer Engineering."
              period="2015 – 2016"
            />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24">
        <div className="max-w-screen-xl mx-auto px-6">
          <SectionHeader number="04" title="Get in Touch" />
          <p className="mt-4 text-slate-400 text-sm max-w-sm">
            Open to new opportunities and collaborations. Feel free to reach
            out!
          </p>
          <div className="mt-10 max-w-sm">
            <Contacts />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8">
        <div className="max-w-screen-xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-600 text-xs">
            © {new Date().getFullYear()} Francisco Silva. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs">
            Built with{" "}
            <span className="text-slate-500">Next.js &amp; Tailwind CSS</span>
          </p>
        </div>
      </footer>
    </>
  );
}

function SectionHeader({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <span className="text-xs font-mono text-cyan-500/60">{number}</span>
      <div className="h-px flex-1 max-w-[40px] bg-cyan-500/20" />
      <h2 className="text-2xl font-bold text-white">{title}</h2>
      <div className="h-px flex-1 bg-white/5" />
    </div>
  );
}

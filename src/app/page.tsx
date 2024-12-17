import Contacts from "@/components/Contacts";
import MyCanvas from "@/components/MyCanvas";
import About from "@/components/About";
import ExperienceCard from "@/components/ExperienceCard";
import EducationCard from "@/components/EducationCard";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-slate-900 to-bg-gray-900 overflow-hidden">
      <main className="mx-auto h-screen text-white flex max-w-screen-xl lg:flex-row flex-col justify-center items-start px-6 py-12 gap-2">
        <div className="flex flex-col lg:w-1/2 lg:justify-between justify-start lg:h-full text-white pt-12 ">
          <div className="flex flex-col gap-3">
            <h1 className="text-6xl font-bold text-slate-50">
              Francisco Silva
            </h1>
            <h2 className="text-2xl font-bold text-slate-50">
              Software Engineer
            </h2>
          </div>
          <div>
            <div className="hidden lg:flex lg:flex-row">
              <MyCanvas />
            </div>
          </div>
          <Contacts />
        </div>
        <div className="flex flex-col lg:w-1/2 items-start max-h-screen text-white py-12 rounded-lg shadow-lg transition-colors overflow-y-auto scrollbar-hide">
          <div className="mb-16">
            <h1 className="text-xl font-bold text-slate-50 mb-12">ABOUT</h1>
            <About />
          </div>
          <div className="mb-10 flex flex-col">
            <h1 className="text-xl font-bold text-slate-50 mb-12">
              EXPERIENCE
            </h1>
            <ExperienceCard
              companyName="iCapital"
              description="Worked as a full stack engineer on the investment Dashboard building new features and improving existing ones. This dashboard is used by advisors to manage their clients' investments."
              period="2021 - PRESENT"
              technologies={[
                "React",
                "Redux",
                "Ruby on Rails",
                "PostgreSQL",
                "AWS",
                "node.js",
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
              description="Backend engineer on the development of the central system of Portuguess ATMs and bank transactions."
              period="2021"
              technologies={["Java"]}
            />
            <ExperienceCard
              companyName="Mobileum"
              description="Developed bespoke revenue assurance web applications for telecommunications providers utilizing our company's internal Low-Code tool. These applications successfully identified and mitigated revenue loss for millions of prepaid customers from companies like MTN Nigeria and Entel Chile."
              period="2018 - 2020"
              technologies={["Java", "POSTGRESQL", "Oracle SQL"]}
            />
            <ExperienceCard
              companyName="UNINOVA"
              description="Part-time researcher/developer on the development of a sentiment analysis (using IBM's Watson) web app using social network data."
              period="2016 - 2018"
              technologies={[
                "Node.js",
                "React",
                "IBM Watson",
                "Bootstrap",
              ]}
            />
            <ExperienceCard
              companyName="Siemens (1 month summer internship)"
              description="Developer (SQL) in transportation and mobility section, developing the software used on Lisbon’s and Porto’s trafic light maintenance. Optimizing queries and make SLA’s calculations on traffic lights' downtime."
              period="2014"
              technologies={["ORACLE SQL"]}
            />
          </div>
          <div className="mb-10 flex flex-col">
            <h1 className="text-xl font-bold text-slate-50 mb-12">EDUCATION</h1>
            <EducationCard
              universityName="Faculdade de Ciências e Tecnologia da Universidade Nova de Lisboa"
              degree="Post-graduation in Electrical and Computer Engineering. Completed all master's degree courses with a 15/20 average."
              period="2011 - 2017"
            />
            <EducationCard
              universityName="TU Delft (The Netherlands)"
              degree="One year exchange program in Electrical and Computer Engineering"
              period="2015 - 2016"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

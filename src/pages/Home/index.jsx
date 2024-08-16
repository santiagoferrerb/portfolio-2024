import { useEffect, useState } from "react";
import Profile from "../../components/Profile";
import { BriefcaseBusiness, GraduationCap, Quote, School, Shuffle } from "lucide-react";
import { MagicCard } from "../../components/magicui/magic-card";

function Home() {
  const [quotes, setQuotes] = useState([]);
  const [index, setIndex] = useState(0);
  const [random, setRandom] = useState(0)

  useEffect(() => {
    fetch("https://api.quotable.io/quotes/random?limit=5")
      .then((res) => res.json())
      .then((data) => {
        setQuotes(data);
      });
  }, [random]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index) => (index + 1) % quotes.length);
    }, 10000); // Cambia cada 10 segundos

    return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta
  }, [quotes.length]);

  const handleRandom = () => {
    setRandom(prev => prev+1 )
  }

  return (
    <main className="relative w-full  text-white pr-4 overflow-y-auto ">
      <div className="flex flex-col gap-4">
        <div className="flex gap-4 flex-wrap">
          <div className="flex flex-col gap-4 min-w-[310px] flex-grow desktop:flex-grow-0 w-1/3  p-4 rounded-2xl flex-wrap bg-gradient-to-b from-lime-400 to-lime-600">
            <h1 className=" leading-none flex-wrap ">
              {" "}
              <span>Hi, I'm</span> Santiago
            </h1>
            <p>
              I’m a passionate web developer that combines creativity and
              technical precision to turn ideas into standout digital
              experiences.
            </p>
          </div>
          <div className="flex-1 flex flex-wrap desktop:justify-between content-center bg-gray-100 bg-opacity-10 border- rounded-2xl p-4 gap-6">
            <div className=" h-auto flex flex-col justify-self-start">
              <h1>Languages</h1>
              <p>Spanish: Native</p>
              <p>English: C1</p>
            </div>
            <div className=" h-auto flex flex-col items-end ">
              <h1>Contact</h1>
              <p>Medellín - Colombia</p>
              <p>+57 321 815 4552</p>
              <p>santiago1ferrer@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="flex gap-4 flex-wrap">
          <div className="flex-1 flex justify-start items-center bg-gray-100 bg-opacity-10 rounded-2xl p-4">
            <div className=" w-full h-full flex flex-col">
              <h1>Education</h1>
              <div className="flex justify-between items-center w-full flex-wrap rounded-2xl bg-gray-100 bg-opacity-10 border-[1px] border-white border-opacity-20 pr-8 py-4 gap-4">
                <Profile
                  name="Business Management Engineering"
                  job="UEIA"
                  exp="2016-2021"
                  text="text-body-large"
                  icon={<GraduationCap size={18} />}
                  img="./eia.png"
                />
                <Profile
                  name="Diploma of Digital Marketing and Analytics"
                  job="UEIA"
                  exp="2021-2022"
                  text="text-body-large"
                  icon={<GraduationCap size={18} />}
                  img="./eia.png"
                />
                <Profile
                  name="Full Stack Developer with JS (+15 Courses)"
                  job="Platzi"
                  exp="2023-2024"
                  text="text-body-large"
                  icon={<GraduationCap size={18} />}
                  img="./platzi.png"
                />
              </div>
            </div>
          </div>
          <div className="relative flex flex-col items-center justify-around gap-2 min-w-[310px] w-1/3  p-4 rounded-2xl bg-gradient-to-t from-emerald-400 to-cyan-400 flex-grow tablet:flex-grow-0">
            <Quote size={32} />
            <div className=" relative flex items-center h-[200px] px-8 text-ellipsis ">
              <p className=" leading-none text-h2 text-center italic">
                "{quotes[index]?.content}"
              </p>
            </div>
            <span onClick={handleRandom} className=" cursor-pointer transition-all hover:-translate-y-1 p-2 bg-white bg-opacity-40 border-white border-[1px] rounded-full absolute top-4 right-4">
              <Shuffle color="#0c0c0c" size={18} />
            </span>
            <p className="text-display text-black px-4 py-1 border-[1px] border-neutral-100 bg-neutral-100 bg-opacity-50 rounded-full">
              {quotes[index]?.author}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 bg-gray-100 bg-opacity-10  rounded-2xl p-4">
          <h1>Experience</h1>
          <div className="grid grid-cols-1 desktop:grid-cols-2 gap-4 jus desktop:justify-start w-full flex-wrap rounded-2xl bg-gray-100 bg-opacity-10 border-[1px] border-white border-opacity-20 pr-8 py-4 ">
            <Profile
              name="Freelance Web Developer"
              job="Freelance"
              exp="2022-Present"
              text="text-body-large"
              icon={<BriefcaseBusiness size={16} />}
              img="./freelance.jpg"
            />
            <Profile
              name="Co-Founder"
              job="Vuur Hard Seltzer"
              exp="2022-2024"
              text="text-body-large"
              icon={<BriefcaseBusiness size={16} />}
              img="./vuur.png"
            />
            <Profile
              name="Business Developer LATAM"
              job="Opalytica"
              exp="2021-2023"
              text="text-body-large"
              icon={<BriefcaseBusiness size={16} />}
              img="./opalytica_logo.jpeg"
            />

            <Profile
              name="Shopper Intelligence Analyst"
              job="Postobón"
              exp="2020-2021"
              text="text-body-large"
              icon={<BriefcaseBusiness size={16} />}
              img="./postobon.png"
            />
          </div>
        </div>
      </div>

    </main>
  );
}

export default Home;

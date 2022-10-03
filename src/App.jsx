import "./App.css";
import Card from "./components/Card";
const data = [
  {
    name: "  Daniel Clifford",
    position: "Verified Graduate",
    avatar: "/images/image-daniel.jpg",
    quote: true,
    header:
      "I received a job offer mid-course, and the subjects I learned were current, if not more so,   in the company I joined. I honestly feel I got every penny’s worth.",
    text: "  “ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”",
  },
  {
    name: "Jonathan Walters",
    position: "Verified Graduate",
    avatar: "/images/image-jonathan.jpg",
    quote: false,
    header: "  The team was very supportive and kept me motivated",
    text: "  “ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself. ”",
  },
  {
    name: "Jeanette Harmon",
    position: "Verified Graduate",
    avatar: "/images/image-jeanette.jpg",
    quote: false,
    header: " An overall wonderful and rewarding experience",
    text: "“ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. ”",
  },
  {
    name: "Patrick Abrams",
    position: "Verified Graduate",
    avatar: "/images/image-patrick.jpg",
    quote: false,
    header:
      "  Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.",
    text: "  “ The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people. ”",
  },
  {
    name: "Kira Whittle",
    position: "Verified Graduate",
    avatar: "/images/image-kira.jpg",
    quote: false,
    header: "  Such a life-changing experience. Highly recommended!",
    text: "“ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and stadid not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of my developent experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend! ”",
  },
];

function App() {
  return (
    <div className="min-h-screen px-6 md:px-10  py-10 font-Barlow flex justify-center items-center text-black bg-LightGrayishBlue dark:bg-gray-400 dark:text-white">
      <main dir="ltr" className=" gap-6 grid lg:grid-cols-4 ">
        <div className="bg-ModerateViolet lg:col-span-2 rounded-xl">
          <Card person={data[0]} />
        </div>
        <div className="bg-VeryDarkGrayishBlue rounded-xl">
          <Card person={data[1]} />
        </div>
        <div className="bg-White lg:row-span-2 order-5 lg:order-none rounded-xl">
          <Card person={data[4]} inverted />
        </div>
        <div className="bg-White rounded-xl">
          <Card person={data[2]} inverted />
        </div>
        <div className="bg-VeryDarkBlackishBlue lg:col-span-2 rounded-xl ">
          <Card person={data[3]} />
        </div>
      </main>
    </div>
  );
}

export default App;

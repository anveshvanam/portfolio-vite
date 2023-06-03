import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-[#cbddd1] scroll-smooth pb-20 text-black h-full">
      <div className="flex flex-col h-full">
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;

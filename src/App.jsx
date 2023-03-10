import { Routes, Route, Link } from "react-router-dom"
import Home  from "./components/Home"
import  SkillIndex  from "./components/skills/SkillIndex"
import  SkillEdit  from "./components/skills/SkillEdit"
 import   SkillCreate  from "./components/skills/SkillCreate"
 import { SkillProvider } from "./components/Context/SkillContext"

function App() {
  

  return (
    <div className="bg-slate-200">
      <div className="max-w-7xl mx-auto min-h-screen">
        <nav>
          <ul className="flex">
            <li className="m-2 p-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md">
              <Link to="/">Home</Link>
            </li>
            <li className="m-2 p-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md">
              <Link to="/skills">Skills</Link>
            </li>
          </ul>
        </nav>
        <SkillProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<SkillIndex />} />
            <Route path="/skills/create" element={<SkillCreate />} />
            <Route path="/skills/:id/edit" element={<SkillEdit />} />
          </Routes>
        </SkillProvider>
      </div>
    </div>
  );
  }

export default App

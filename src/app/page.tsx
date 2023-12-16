import MyCanvas from "@/components/MyCanvas";
import * as THREE from "three";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
        <MyCanvas />
      </div>

      <div className="mt-10">
        <h2 className="text-3xl font-bold">Skills</h2>
        <ul className="list-disc list-inside">
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Ruby on Rails</li>
        </ul>
      </div>

      <div className="mt-10">
        <h2 className="text-3xl font-bold">Projects</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="card">
            <h3 className="text-xl font-bold">Project 1</h3>
            <p>Description of Project 1</p>
          </div>
          <div className="card">
            <h3 className="text-xl font-bold">Project 2</h3>
            <p>Description of Project 2</p>
          </div>
          <div className="card">
            <h3 className="text-xl font-bold">Project 3</h3>
            <p>Description of Project 3</p>
          </div>
        </div>
      </div>
    </main>
  );
}

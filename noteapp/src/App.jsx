import React, { useState } from "react";
import { X } from 'lucide-react';

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];

    copyTask.push({title, details});

    setTask(copyTask);
    

    setTitle("");
    setDetails("");
  };


  const deleteNote = (idx) => {
    // console.log("deleted");

    const copyTask = [...task];

    copyTask.splice(idx, 1);

    setTask(copyTask);


  }


  return (
    <div className="h-screen lg:flex bg-black text-white ">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex items-start lg:w-1/2 flex-col gap-3 p-10"
      >
        <h1 className="text-3xl font-bold">Add Notes</h1>
        <input
          type="text"
          placeholder="Enter your Title"
          className="py-5 w-full font-medium px-5 border-2 outline-none rounded"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <textarea
          type="text"
          placeholder="Enter your Description"
          className="py-5 w-full h-30 px-5 font-medium flex items-start flex-row border-2 outline-none rounded"
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        />
        <button className="bg-white text-black font-medium px-5 w-full outline-none py-2 rounded">
          Add Note
        </button>
      </form>
      <div className="lg:w-1/2 lg:border-l p-10">
        <h1 className="text-3xl font-bold">Recent Notes</h1>
        <div className="flex flex-wrap justify-start gap-5 mt-5 h-[90%] overflow-auto">
          {task.map((elem, idx)=>{
            return <div key={idx} className="flex justify-between flex-col items-start relative h-52 w-40 p-5 text-black bg-cover bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')] rounded-2xl">
              <div>
                <h3 className="leading-tight text-xl font-bold">{elem.title}</h3>
              <p className="mt-3 leading-tight font-medium text-gray-500  ">{elem.details}</p>
              </div>
              <button onClick={()=>{
                deleteNote(idx)
              }} className="w-full bg-red-500 cursor-pointer active:scale-95 py-1 text-xs text-white rounded">Delete Note</button>
            </div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default App;

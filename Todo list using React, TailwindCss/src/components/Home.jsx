import { useState, useEffect } from 'react'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { v4 as uuidv4 } from 'uuid';

function Home() {
  const [Todo, setTodo] = useState("")
  const [addToArray, setaddToArray] = useState([]);
  const [showFinished, setshowFinished] = useState(true);
  const [IsLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let todoString = localStorage.getItem("addToArray");
    if (todoString) {
      let todos = JSON.parse(todoString);
      setaddToArray(todos);
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (IsLoaded) {
      localStorage.setItem("addToArray", JSON.stringify(addToArray));
    }
  }, [addToArray, IsLoaded]);

  const handleChange = (e) => setTodo(e.target.value);
  const toggleFinished = () => setshowFinished(!showFinished);

  const handleSave = () => {
    if (Todo.trim().length <= 2) {
      alert("Todo must be more than 3 characters.");
      return;
    }
    setaddToArray([...addToArray, { id: uuidv4(), Todo, isCompleted: false }]);
    setTodo("");
  };

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = addToArray.findIndex(item => item.id === id);
    let newTodos = [...addToArray];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setaddToArray(newTodos);
  };

  const handleEnterKey = (e) => {
    if (e.key === "Enter" && Todo.trim() !== "") handleSave();
  };

  const handleEdit = (id) => {
    let s = addToArray.find(item => item.id === id);
    setTodo(s.Todo);
    setaddToArray(addToArray.filter(item => item.id !== id));
  };

  const handleDelete = (id) => {
    setaddToArray(addToArray.filter(item => item.id !== id));
  };

  return (
    <div className="cardContainer flex justify-center md:my-3 ">
      <div className="card sm:w-[60%] w-full xl:w-[45%] mt-14 h-[85vh] bg-[#c5d9e0] md:rounded-xl flex flex-col ">
        <div className="title m-5 font-poiret-one font-bold text-xl text-center">myTodo - Your task manager</div>
        <div className="addTitle font-bold md:text-lg mx-5">Add a Todo</div>
        <div className="takeInput flex mx-5 my-2 gap-2 justify-center ">
          <input onChange={handleChange} onKeyDown={handleEnterKey} value={Todo} className='w-[90%] rounded-2xl px-3 outline-none py-1 cursor-pointer' type="text" placeholder='Enter here...' />
          <button onClick={handleSave} className="saveBtn py-1 px-4 rounded-2xl text-white bg-[#2c5364] cursor-pointer">Save</button>
        </div>
        <div className="showFinishedContainer flex mx-5 gap-2 md:m-3 m-1">
          <input className='cursor-pointer' type="checkbox" id='show' onChange={toggleFinished} checked={showFinished} />
          <div className="">Show Finished</div>
        </div>
        <div className='border border-black h-[1px] w-[85%] mx-auto my-3 opacity-20'></div>
        <div className="font-bold md:text-lg mx-5">Your Todos</div>
        <div className="todoContainer overflow-y-auto max-h-[55vh] md:mx-5 rounded-lg">
          {addToArray.filter(item => showFinished ? true : !item.isCompleted).map(item => (
            <div key={item.id} className="todoList flex mx-5 my-2 justify-between items-center">
              <div className="listContainer flex items-center">
                <div className="mx-3 flex justify-center items-center">
                  <input name={item.id} onChange={handleCheckbox} className='cursor-pointer' type="checkbox" checked={item.isCompleted} />
                </div>
                <div className={`list font-mono text-xs sm:text-base ${item.isCompleted ? "line-through" : ""}`}>{item.Todo}</div>
              </div>
              <div className="buttons flex justify-center items-center">
                <button onClick={() => handleEdit(item.id)} className='border border-black mx-1 bg-[#2c5364] text-white px-2 py-1 rounded-lg'><FaEdit /></button>
                <button onClick={() => handleDelete(item.id)} className='border border-black mx-1 bg-[#2c5364] text-white px-2 py-1 rounded-lg'><MdDelete /></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;

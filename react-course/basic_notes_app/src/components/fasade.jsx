import { useState } from "react"
import NoteCard from "./noteCard"

const Fasade = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('') 
  const [task, setTask] = useState([])

  const submitHandeler = (e) => {
    e.preventDefault()

    const copyTask = [...task]
    copyTask.push({title, details})
    setTask(copyTask)
    // console.log(copyTask);
        
    setTitle('')
    setDetails('')
  }
  
    return(
        <>
            <div className="h-dvh flex flex-col">
                <form
                    onSubmit={(e) => { submitHandeler(e) }}
                    className="flex flex-col gap-3 justify-between p-7 flex-1 md:flex-none">
                    <input
                        type="text"
                        className="border-2 rounded p-3 "
                        placeholder="Enter heading"
                        value={title}
                        onChange={
                            (e) => {
                                setTitle(e.target.value)
                                // console.log(e.target.value)
                            }
                        }
                    />
                    <textarea
                        type="text"
                        className="border-2 rounded p-3 h-60 resize-none flex-1 md:flex-none md:h-60"
                        placeholder="Write your notes here"
                        value={details}
                        onChange={
                            (e) => {
                                setDetails(e.target.value)
                                // console.log(e.target.value)
                            }
                        }
                    />
                    <button
                        type="submit"
                        className="border-2 p-3 rounded bg-gray-200  active:bg-gray-300">
                        Add Note
                    </button>
                </form>
            
                {/* notes showcase */}

                <div className="flex px-7 gap-3 overflow-x-auto">
                    {
                        task.map((note, idx)=>{
                            return(
                                <div key={idx}>
                                    <NoteCard
                                        title = {note.title}
                                        details = {note.details}                                    
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>  
        </>
    )
}

export default Fasade


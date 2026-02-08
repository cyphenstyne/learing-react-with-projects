const Fasade = () => {

    return(
        <>
          <div className="h-dvh">
            <form className="flex flex-col gap-3 justify-between p-7">
            <input
              type="text"
              className="border-2 rounded p-3 "
              placeholder="Enter heading"
            />
            <textarea
              type="text"
              className="border-2 rounded p-3 h-60 resize-none"
              placeholder="Write your notes here"
            />
              <button className="border-2 p-3 rounded bg-gray-300  active:bg-gray-500">Add Note</button>
            </form>
          </div>  
        </>
    )
}

export default Fasade
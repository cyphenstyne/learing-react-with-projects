const NoteCard = (param) => {
  
  return (
    <>
        <div className="h-50 w-50 rounded border shrink-0">
            <div className="h-1/4 bg-gray-300">
                <span>{param.title}</span>
            </div>
            <div className="h-3/4">
                <span>{param.details}</span>
            </div>
        </div>
    </>
  )
}

export default NoteCard
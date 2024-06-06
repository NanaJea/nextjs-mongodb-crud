
function TaskCard({ task }) {
    return (
      <div className='bg-gray-50 p-10 text-white rounded-md hover:cursor-pointer hover:bg-gray-700'>
           <h3>{task.title}</h3>
           <p>{task.description}</p>
      </div>
    )
}

export default TaskCard
import TaskCard from "./TaskCard"

const TaskList = () => {
    return (
        <div className="task-list-wrapper">

            <div className="task-list-wrapper__header-wrapper">

                <h1 className="task-list-wrapper__header-wrapper__title">Notes</h1>

                <button className="task-list-wrapper__header-wrapper__title__erase-all">Apagar todas as tarefas</button>

            </div>

            <TaskCard />

        </div>
    )
}

export default TaskList
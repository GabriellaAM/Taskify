const TaskCard = () => {
    return (
        <div className="task-wrapper">

            <div className="task-wrapper__header-wrapper">

                <h3 className="task-wrapper__header-wrapper__date">06/02/2025</h3>

                <h2 className="task-wrapper__title">Amar morzitos!</h2>

            </div>

            <div className="task-wrapper__end-wrapper">

                <div className="task-wrapper__end-wrapper__buttons-wrapper">

                    <button className="task-wrapper__end-wrapper__buttons-wrapper__edit-button">Editar</button>

                    <button className="task-wrapper__end-wrapper__buttons-wrapper__trash-button">Apagar</button>

                </div>

            </div>

        </div>
    )
}

export default TaskCard
const TaskCard = () => {
    return (
            <div className="task-wrapper">

                <h2 className="task-wrapper__title"></h2>

                <div className="task-wrapper__footer-wrapper">

                    <h3 className="task-wrapper__footer-wrapper__date"></h3>

                    <div className="task-wrapper__footer-wrapper__buttons-wrapper">

                        <button className="task-wrapper__footer-wrapper__buttons-wrapper__edit-button"></button>

                        <button className="task-wrapper__footer-wrapper__buttons-wrapper__trash-button"></button>

                    </div>

                </div>

            </div>
    )
}

export default TaskCard
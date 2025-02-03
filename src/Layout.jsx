import TaskList from "./TaskList"

const Layout = () => {
    return (
        <div className="layout-wrapper">

            <div className="layout-wrapper__logo-button-wrapper">

                <h1 className="layout-wrapper__logo-button-wrapper__logo-name"></h1>

                <div className="layout-wrapper__logo-button-wrapper__button-space">

                    <button className="layout-wrapper__logo-button-wrapper__button">Adicionar Tarefa</button>

                </div>

            </div>

            <TaskList />

        </div>
    )
}

export default Layout
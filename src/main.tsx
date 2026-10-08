import {createRoot} from 'react-dom/client'
import "./index.css"
import {Header} from "./components/Header"
import {PageTitle} from "./components/PageTitle";
import {TaskList} from "./components/TaskList"
import {TaskDetail} from "./components/TaskDetail"
import {Footer} from "./components/Footer"

createRoot(document.getElementById('root')!).render(
  <MainPage/>
)

function MainPage() {
  return (
    <>
      <Header />
      <PageTitle />
      <div className="tasks">
        <TaskList />
        <TaskDetail />
      </div>
      <Footer />
    </>
  )
}
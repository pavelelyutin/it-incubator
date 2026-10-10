import {createRoot} from 'react-dom/client'
import "./index.css"

import {MainPage} from "./components/mainPage.tsx";

createRoot(document.getElementById('root')!).render(
  <MainPage/>
)


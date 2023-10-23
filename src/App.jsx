import { Routes, Route } from "react-router-dom"
import "./App.css"
import * as Pages from "./pages"
import { Header } from "./components"
import { SortProvider } from "./context"

function App() {
  return (
    <>
      <SortProvider>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Pages.HomePage />} />
            <Route path="/shows" element={<Pages.ShowsPage />} />
            <Route path="/shows/:id" element={<Pages.ShowPage />} />
            <Route path="/search" element={<Pages.SearchPage />} />
            <Route path="*" element={<Pages.NotFoundPage />} />
          </Route>
        </Routes>
      </SortProvider>
    </>
  )
}

export default App
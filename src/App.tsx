import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './routes/Home'
import Welcome from './routes/Home/Welcome'
import Expenses from './routes/Home/Expenses'
import ExpensesForm from './routes/Home/ExpensesForm'

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Welcome />} />
            <Route path="expenses/" element={<Expenses />} />
            <Route path="expenses/:expenseId" element={<ExpensesForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

import './App.css'
import AppRoutes from './components/AppRoutes';
import { WordleProvider } from './context/WordleContext';
import { WordListProvider } from './context/WordListContext';

function App() {
  return (
    <>
      <WordListProvider>
        <WordleProvider>
          <AppRoutes/>
        </WordleProvider>
      </WordListProvider>
    </>
  )
}

export default App

import './App.css';
import LearnButton from './components/LearnButton';
import LearnGrid from './components/LearnGrid';
import LayoutDefault from './layout/LayoutDefault';
import { ToastContainer, toast } from "react-toastify";
import AllRoute from "./components/AllRoute/index"
 import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <AllRoute />

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;

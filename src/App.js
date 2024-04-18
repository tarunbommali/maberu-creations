import "./App.css";
import Content from "./components/Content";
import DynamicImg from "./components/DynamicImg";
import Footer from "./components/Footer";
import { contentData } from "./utils/data";

function App() {
  return (
    <div className="flex flex-col min-h-screen items-center w-full  justify-center p-2">
      <div className="flex flex-col items-center px-6 py-3 h-[85vh] bg-slate-300 rounded-lg shadow-lg w-[80vw] overflow-y-scroll">
        {contentData.map((item) => (
          <div key={item.id} className="flex  p-2 bg-white my-[20%] w-[80%]">
            <Content content={item.content} />
            <DynamicImg imgSrc={item.imgSrc} />
          </div>
        ))}
        
      </div>
      <Footer/>
    </div>
  );
}

export default App;

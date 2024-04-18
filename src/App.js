import { useState } from "react";
import Content from "./components/Content";
import DynamicImg from "./components/DynamicImg";
import Footer from "./components/Footer";
import { contentData } from "./utils/data";

function App() {
  const [activeContentIndex, setActiveContentIndex] = useState(0);

  // Function to handle hover on content item and update active content index
  const handleContentHover = (index) => {
    setActiveContentIndex(index-1);
  };

  return (
    <div className="flex flex-col min-h-screen items-center w-full justify-center p-2">
      <div className="flex flex-col items-center px-6 py-3 h-[85vh] bg-slate-300 rounded-lg shadow-lg w-[80vw]">
        <div className="flex p-2 bg-white my-[10%] w-[80%]">
          <div className="w-[85%] h-[400px] overflow-y-scroll">
            {/* Render content components */}
            {contentData.map((data) => (
              <div
                key={data.id}
                onMouseEnter={() => handleContentHover(data.id)} // Add mouse enter event handler
                style={{ cursor: "pointer" }} // Set cursor to pointer for clickable items
              >
                <Content
                  content={data.content}
                  contentTitle={data.contentTitle}
                />
              </div>
            ))}
          </div>

          {/* Render DynamicImg with the image URL and contentTitle of the active content */}
          <DynamicImg
            imgUrl={contentData[activeContentIndex].imgSrc}
            contentTitle={contentData[activeContentIndex].contentTitle}
          />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;

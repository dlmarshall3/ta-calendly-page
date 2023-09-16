import TeachingAssistant from "./components/ta";
import { cohortFourTAs } from "./data/cohort-4";

import "./App.css";

function App() {
  return (
    <div className="text-center">
      <h1 className="text-4xl mt-8">DS4A Cohort 4 TAs</h1>
      <div className="lg:columns-3 column-1 my-8 mx-24 p-8 bg-white opacity rounded-2xl shadow-2xl">
        {cohortFourTAs.map((ta, index) => {
          return (
            <div key={index} className="mb-4">
              <TeachingAssistant name={ta.name} url={ta.url} img={ta.img} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;

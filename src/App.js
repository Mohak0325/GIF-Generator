import './App.css';
import Random from './components/Random';
import Tag from './components/Tag';

function App() {
  return (
    <div className="w-screen h-full flex flex-col items-center  top-0 left-0">
       <h1 className="bg-white rounded-lg w-11/12 text-center mt-[40px] px-10 py-2 sm:text-sm md:text-lg lg:text-xl  2xl:text-4xl font-bold">
         RANDOM GIFS
       </h1>
       <Random/>
       <Tag/>
    </div>
  );
}

export default App;

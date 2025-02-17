import './App.css';
import Random from './components/Random';
import Tag from './components/Tag';

function App() {
  return (
    <div className="w-screen h-full flex flex-col bg-[#E0F4FF] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] items-center  top-0 left-0">
       <h1 className="bg-white rounded-lg w-11/12 text-center mt-[40px] px-10 py-2 text-4xl font-bold">
         RANDOM GIFS
       </h1>
       <Random/>
       <Tag/>
    </div>
  );
}

export default App;

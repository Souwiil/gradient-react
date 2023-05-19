import React from "react";
import Button from "./components/Buttons/Button"
import ColorNames from './components/ColorNames/ColorNames';
import Counter from './components/Counter/Counter';
import DirectionButtons from './components/DirectionButtons/DirectionButton';
import Gradient from './components/Gradient/Gradient';


function App() {
  return (
    <div className=" h-[100vh] bg-slate-700 pt-10">
      <h1 className='text-gray-50 text-4xl text-center font-bold font-mono'>Gradient-React</h1>
      <Counter />
      <Button />
      <ColorNames />
      <Gradient />
      <DirectionButtons />
      
    </div>
  );
}

export default App;

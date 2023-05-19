import { useSelector } from 'react-redux';


function Gradient() {
  const firstColor = useSelector((state) => state.firstColor);
  const lastColor = useSelector((state) => state.lastColor);
  const direction = useSelector((state) => state.direction);

  return (
    <div className="max-w-md mx-auto rounded-md overflow-hidden shadow-lg">
      <div className="Gradient h-[400px] text-9xl rounded-2xl" style={{ background: `linear-gradient(${direction},${firstColor},${lastColor})` }} />
      </div>
    
  );
}

export default Gradient;
import { useSelector } from 'react-redux';

function Counter() {
  const nbColors = useSelector((state) => state.nbColors);

  return (
    <div className="Counter fixed text-white -translate-x-2/4 bg-[#3273dc] text-[0.8rem] px-[0.6rem] py-[0.3rem] rounded-[0_0_0.5em_0.5em] left-2/4 top-0">{nbColors} couleurs générées</div>
  );
}

export default Counter;
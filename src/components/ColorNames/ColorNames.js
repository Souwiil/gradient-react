import { useSelector } from 'react-redux';

function ColorNames() {
  const firstColor = useSelector((state) => state.firstColor);
  const lastColor = useSelector((state) => state.lastColor);
  const directionIsLeft = useSelector((state) => state.directionIsLeft);

  return (
    <div className="ColorNames flex justify-center text-[#666] text-2xl p-5">
      
      {
      directionIsLeft
        ? (
          <>
            <span className="mr-5" style={{ color: firstColor }}>{firstColor}</span>
            - <span className="ml-5" style={{ color: lastColor }}>{lastColor}</span>
          </>
        )
        : (
          <>
            <span style={{ color: lastColor }}>{lastColor}</span>
            - <span style={{ color: firstColor }}>{firstColor}</span>
          </>
        )
      }
    </div>
  );
}

export default ColorNames;
import { useDispatch } from 'react-redux';

function DirectionButtons() {
  const dispatch = useDispatch();

  const degrees = [90, 135, 225, 270];

  return (
    <div className="buttons group buttons mt-10 cursor-pointer mx-auto my-50 b items-center flex justify-center">
      {degrees.map((degree) => (
        <div
          key={degree}
          className="button"
          onClick={() => {
            dispatch({ type: 'SET_DIRECTION', payload: { degrees: degree } });
          }}
        >{degree}°
        </div>
      ))}
    </div>
  );
}

export default DirectionButtons;
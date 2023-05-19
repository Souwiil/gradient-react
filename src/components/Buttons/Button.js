import { useDispatch } from 'react-redux';


function Buttons() {
  const dispatch = useDispatch();

  return (
    <div className="buttons mt-10 cursor-pointer mx-auto my-50 items-center flex justify-center ">
      <div
        className="button"
        onClick={() => {
          dispatch({ type: 'RANDOMIZE_FIRST_COLOR' });
        }}
      >Random First
      </div>
      <div
        className="button"
        onClick={() => {
          dispatch({ type: 'RANDOMIZE_ALL_COLORS' });
        }}
      >Random All
      </div>
      <div
        className="button"
        onClick={() => {
          dispatch({ type: 'RANDOMIZE_LAST_COLOR' });
        }}
      >Random Last
      </div>
    </div>
  );
}

export default Buttons;
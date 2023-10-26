import { FaPlus } from "react-icons/fa";
import { useRef } from "react";

function AddItems({ newItem, setNewItem, handleSubmit }) {
  const inputRef = useRef();
  return (
    <form className='addForm' onSubmit={handleSubmit}>
      <label htmlFor='addItem'>Add Item</label>
      <input
        type='text'
        id='addItem'
        ref={inputRef}
        required
        placeholder='Add Item'
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      ></input>
      <button
        type='submit'
        aria-label='Add Item'
        onClick={() => inputRef.current.focus()}
      >
        <FaPlus></FaPlus>
      </button>
    </form>
  );
}
export default AddItems;

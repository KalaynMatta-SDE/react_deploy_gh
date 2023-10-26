import LineItems from "./LineItems";

const ListItems = ({ items, handleCheck, handleDelete }) => {
  return (
    <ul>
      {items.map((item) => (
        <LineItems
          key={item.id}
          item={item}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        ></LineItems>
      ))}
    </ul>
  );
};

export default ListItems;

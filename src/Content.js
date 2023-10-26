import ListItems from "./ListItems";

const Content = ({ items, handleCheck, handleDelete }) => {
  return (
    <>
      {items.length ? (
        <ListItems
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        ></ListItems>
      ) : (
        <p style={{ marginTop: "2rem" }}>Your List is empty</p>
      )}
    </>
  );
};

export default Content;

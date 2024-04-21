//Rendering ListGroup dynamically
//get name and index of list item clicked
//change the names of the list items
import { Fragment } from "react";
import Message from "../Message";
//import { MouseEvent } from "react";
import { useState } from "react";
interface Props {
  items: string[];
  heading: string;
  // (item: string) => void
  onSelectItem: (item: string) => void;
}

// { items: [], heading: string }

function ListGroup({ items, heading, onSelectItem }: Props) {
  //let selectedIndex = -1;
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // arr[0] // variable selected index
  //arr[1] // updater function
  //const message = items.length === 0 ? <p>No item found</p> : null;
  //const getMessage = () => {
  // return items.length === 0 ? <p>No item found</p> : null;
  //  ; {getMessage()}
  // add a second parameter index
  //event handler
  //onClick={(event) => console.log(item, index)}
  // const handleClick = (event: MouseEvent) => console.log(event);
  //(event) => console.log(event)
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );

  // {items.length === 0 ? <p>No item found</p> : null}
  // {items.length === 0 ? <p>No item found</p> : null}
  // {items.length === 0 && <p>No item found</p>}
  //onClick={(event) => console.log(item, index)}>
  /*
<h1>List</h1>

      <ul className="list-group">
        {items.map((item) => (
          <li key={item} onClick={handleClick}
            {item});
          </li>
        )
      </ul>*/
}
export default ListGroup;

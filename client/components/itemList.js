import React from "react";
import { Checkbox } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

const ItemList = () => {
  const dispatch = useDispatch();

  const isClaimed = useSelector((state) => state.events.isClaimed);
  const items = useSelector((state) => state.events.itemArray);

  const itemsArray = (array) => {
    for (let i = 0; i < array.length; i++) 
    items.push(<ul id={i} className="item">{array[i]}</ul>);
  }

  // console.log(isClaimed);
  // console.log(itemArray);

  const handleClaim = () => {
    isClaimed
      ? dispatch({ type: "IS_CLAIMED", payload: false })
      : dispatch({ type: "IS_CLAIMED", payload: true });
  };
  const handleDelete = () => {
   
  }

  return (
    <div>
      <ul className="item">
        {itemsArray}
        <Checkbox onChange={handleClaim} />
        <button onClick={handleDelete}>x</button>
      </ul>
    </div>
  );
};

export default ItemList;

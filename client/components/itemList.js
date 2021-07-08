import React from "react";
import { Checkbox } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

const ItemList = () => {
  const dispatch = useDispatch();

  const isClaimed = useSelector((state) => state.events.isClaimed);
  const items = useSelector((state) => state.events.itemArray);

  const itemsArray = (array) => {
    for (let i = 0; i < array.length; i++)
      // will need to access the id as the key and object value
      items.push(
        <ul id={array[i]._id} className="item">
          {array[i]}
        </ul>
      );
  };

  const handleClaim = () => {
    isClaimed
      ? dispatch({ type: "IS_CLAIMED", payload: false })
      : dispatch({ type: "IS_CLAIMED", payload: true });
  };
  const handleDelete = (e) => {
    const removeId = e.target.id;
    document.getElementById(removeId).remove();
    fetch("/item/delete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        removeId,
      }).then((res) => res.json()),
    }).catch((err) => console.log(err));
  };

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

import React, { useEffect } from "react";
import { Checkbox } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@material-ui/core";

const ItemList = () => {
  const dispatch = useDispatch();

  const isClaimed = useSelector((state) => state.events.isClaimed);
  const userObj = useSelector((state) => state.events.isClaimed);
  const itemsArray = useSelector((state) => state.events.itemArray);
  const items = itemsArray.map(element => {<ul id={element._id} className="item">{element.itemName} </ul>
  })
  const eventId = useSelector((state) => state.events.eventIndexAndId[1]);

  // const query = `SELECT i.*, u.username
  // FROM items i
  // LEFT OUTER JOIN users u ON i.user_id = u._id
  // WHERE event_id = $1;`;

  useEffect(() =>{
    fetch(`item/${eventId}`)
    .then((res) => {
      console.log('what is res', res)
      return res.json();
    })
    .then((data) => {
      console.log('what is data', data)
      // dispatch({ type: })
    })
  })
  // think i will need a fetch request to get all attendess here

  // changed isClaimed to refer to user id rather than boolean
  const handleClaim = () => {
    isClaimed !== null
      ? dispatch({ type: "IS_CLAIMED", payload: null })
      : dispatch({ type: "IS_CLAIMED", payload: userObj._id });
  };

  const handleDelete = (e) => {
    e.preventDefault();
    const removeId = e.target.id;
    // don't think this is needed since it's done in state
    document.getElementById(removeId).remove();
    dispatch({ type: "DELETE_ITEM", payload: removeId });
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
      <h3>Item List</h3>
      <ul className="item">
        {items}
        {/* need to incorporate cost */}
        <Button variant="contained" color="secondary" onClick={handleDelete}>
          x
        </Button>
      </ul>
    </div>
  );
};

export default ItemList;

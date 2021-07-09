import React, { useEffect } from "react";
import { Checkbox } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@material-ui/core";
import AddItems from "./addItems";

const ItemList = () => {
  const dispatch = useDispatch();

  const isClaimed = useSelector((state) => state.events.isClaimed);
  // const userObj = useSelector((state) => state.events.isClaimed);
  const eventId = useSelector((state) => state.events.eventIndexAndId[1]);
  const userId = useSelector((state) => state.users.userId)

  useEffect(() =>{
    fetch(`/item/${eventId}`)
    .then((res) => {
      console.log('what is res items', res)
      return res.json();
    })
    .then((data) => {
      console.log('what is data items', data)
      dispatch({ type: "GET_ITEMS", payload: data })
    })
    .catch((err) => console.log("error in getting items", err))
  }, [])

  const itemsArray = useSelector((state) => state.events.itemArray);
  console.log(itemsArray);
  
  const handleDelete = (e) => {
    e.preventDefault();
    const removeItemId = e.target.parentElement.id;

    // don't think i need this is needed since this is dispatched to state
    dispatch({ type: "DELETE_ITEM", payload: removeItemId });
    fetch("/item/", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        item_id: removeItemId,
      })
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log('remove attendee error', err));
  };

  const claimItem = (e) => {
    e.preventDefault();
    console.log('claiming item');
    const itemID = e.target.parentElement.id;
    
    dispatch({ type: "IS_CLAIMED", payload: userId });

    const index = e.target.parentElement.id2;

    fetch("/item/", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        item_id: itemID,
        user_id: userId
      })
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('data from claim', data);
        // process results of fetch request here
        itemsArray[index] = { ...itemsArray, ...{ user_id: userId, username: data.user.username } }

        // DISPATCH TO STATE, WILL CAUSE RELOAD?
        dispatch({ type: "IS_CLAIMED", payload: itemsArray })
      })
      .catch((err) => console.log(err));
  }

  const items = [];
  for (let i = 0; i < itemsArray.length; i++) {
    items.push(<ul id={itemsArray[i]._id} key={`item${i}`} className="item">
      {itemsArray[i].item_name}{" "}
      {itemsArray[i].username 
        ? `Brought By: ${itemsArray[i].username}`
        : (<Button variant="contained" color="primary" id={itemsArray[i]._id} id2={i} onClick={claimItem}>
            Bring It!
        </Button>
        )}
    <Button variant="contained" color="secondary" id={itemsArray[i]._id} onClick={handleDelete}>
      x
    </Button>
  </ul>)
  }
  // think i will need a fetch request to get all attendess here

  // changed isClaimed to refer to user id rather than boolean
  // const handleClaim = () => {
  //   isClaimed !== null
  //     ? dispatch({ type: "IS_CLAIMED", payload: null })
  //     : dispatch({ type: "IS_CLAIMED", payload: userObj._id });
  // };

  return (
    <div>
      <h3>Item List</h3>
      <ul className="item">
        {items}
        <AddItems />
      </ul>
    </div>
  );
};

export default ItemList;

import React from "react";

function TableItem(props) {

    /*
    function onDelete() {
        fetch("https://us-central1-gesture-dev.cloudfunctions.net/internal?action=coupon", {
            method: "PATCH",
            body: JSON.stringify({
                "name": props.name,
                "amount": props.amount,
                "locked": "true"
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(res => res.json())
        .then(result => console.log(result))
        .catch(err => console.log(err))
    }
    */
    
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.date}</td>
            <td>{props.description}</td>
            <td className="coupon-actions">
                <button className="edit-button">EDIT</button>
                <button className="delete-button">Delete</button>    
            </td>
        </tr>
    )
}

export default TableItem;
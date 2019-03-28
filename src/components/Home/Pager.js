import React from "react";

function Pager(props) {
    return (
        <ul className="pager">
            <li className={props.position}>
                <a role="button" href='/'> {props.name} </a>
            </li>
        </ul>
    );
}

export default Pager;
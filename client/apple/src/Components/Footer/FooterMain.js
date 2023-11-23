import React from "react";

function FooterMain(props) {
  return (
    <>
      <ul>
        {props.link1 && (
          <li>
            <a href="#">{props.link1}</a>
          </li>
        )}
        {props.link2 && (
          <li>
            <a href="#">{props.link2}</a>
          </li>
        )}
        {props.link3 && (
          <li>
            <a href="#">{props.link3}</a>
          </li>
        )}
        {props.link4 && (
          <li>
            <a href="#">{props.link4}</a>
          </li>
        )}
        {props.link5 && (
          <li>
            <a href="#">{props.link5}</a>
          </li>
        )}
        {props.link6 && (
          <li>
            <a href="#">{props.link6}</a>
          </li>
        )}
        {props.link7 && (
          <li>
            <a href="#">{props.link7}</a>
          </li>
        )}
        {props.link8 && (
          <li>
            <a href="#">{props.link8}</a>
          </li>
        )}
        {props.link9 && (
          <li>
            <a href="#">{props.link9}</a>
          </li>
        )}
        {props.link10 && (
          <li>
            <a href="#">{props.link10}</a>
          </li>
        )}
        {props.link11 && (
          <li>
            <a href="#">{props.link11}</a>
          </li>
        )}
      </ul>
    </>
  );
}

export default FooterMain;

import React from "react";

function FourthToSixth(props) {
  return (
    <>
      <div className={props.sideWrapper}>
        <div className={props.sideContainer}>
          <div className={props.toplogo}>
            <div className={props.logoWrapper}>
              {<img src={props.image} />}
            </div>
          </div>
          {props.tvshowWrapper && (
            <div className={props.tvshowWrapper}>
              <img src={props.tvshowlogo} />
            </div>
          )}
          {props.watchMoreWrapper && (
            <div className={props.watchMoreWrapper}>
              <a href="#">{props.content}</a>
            </div>
          )}
          {props.title && (
            <div className={props.titleWrapper}>{props.title}</div>
          )}
          {props.discriptionWrapper && (
            <div className={props.discriptionWrapper}>
              {props.discription}
            </div>
          )}
          {props.priceWrpper && (
            <div className={props.priceWrpper}>
              {props.price}
              <sup></sup>
            </div>
          )}
          <div className={props.linksWrapper}>
            <ul>
              {props.firstMoreLink && (
                <li>
                  <a href="">{props.firstMoreLink}</a>
                </li>
              )}
              {props.secondMoreLink && (
                <li>
                  <a href="">{props.secondMoreLink}</a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default FourthToSixth;

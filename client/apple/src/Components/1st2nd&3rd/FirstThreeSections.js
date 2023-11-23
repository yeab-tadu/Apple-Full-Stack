import React from "react";

function FirstThreeSections(props) {
  return (
    <>
      <section className={props.hightlightWrapper}>
        <div className="container">
          {props.nweAlert && (
            <div className={props.nweAlert}>New</div>
          )}

          <div className={props.mainTitle}>{props.productName}</div>

          {props.discriptionWrapperColor && (
            <div className={props.discriptionWrapperColor}>
              {props.discription}
            </div>
          )}

          {props.priceWrapperColor && (
            <div className={props.priceWrapperColor}>
              {props.price}
            </div>
          )}

          <div className="links-wrapper">
            <ul>
              <li>
                <a href="">Learn more</a>
              </li>
              <li>
                <a href="">{props.buyororder}</a>
              </li>
            </ul>
          </div>

          {props.ipodcaptionrow && (
            <div className={props.ipodcaptionrow}>
              <div className="col-sm-12 col-md-6 text-md-right">
                iPad Pro available starting 3.25
              </div>
              <div className="col-sm-12 col-md-6 text-md-left">
                Magic Keyboard coming in May
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default FirstThreeSections;

import React from "react";
import Alert from "../Alert/Alert";
import FirstThreeSections from "../1st2nd&3rd/FirstThreeSections";
import FourthToSixth from "../4th5th&6th/FourthToSixth";
import appletv from "../../CommonResources/images/icons/apple-tv-logo.png";
import banker from "../../CommonResources/images/home/banker.png";
import watchTv from "../../CommonResources/images/icons/watch-series5-logo.png";
import arcade from "../../CommonResources/images/icons/arcade.png";
import Rating from "../Rating/Rating";
import Youtube from "../Youtube/Youtube";
function Main() {
  return (
    <>
      <Alert />
      <FirstThreeSections
        hightlightWrapper="first-hightlight-wrapper"
        mainTitle="title-wraper bold black"
        productName="iPad Pro"
        buyororder="Order"
        nweAlert="new-alert"
        ipodcaptionrow="ipod-caption row"
      />
      {/* <Rating/> */}
      <FirstThreeSections
        hightlightWrapper="second-hightlight-wrapper"
        nweAlert="new-alert"
        mainTitle="title-wraper bold black"
        productName="MacBook Air"
        buyororder="Buy"
        discription="Twice the speed. Twice the storage."
        price="From $999."
        discriptionWrapperColor="description-wrapper black"
        priceWrapperColor="price-wrapper grey"
      />
      <FirstThreeSections
        hightlightWrapper="third-hightlight-wrapper"
        productName="iPhone 11 Pro"
        mainTitle="title-wraper bold"
        discriptionWrapperColor="description-wrapper "
        priceWrapperColor="price-wrapper "
        buyororder="Buy"
        discription="Pro cameras. Pro display. Pro performance."
        price="From $24.95/mo. or $599 with trade‑in."
      />
      <section className="fourth-heghlight-wrapper">
        <div className="container-fluid">
          <div className="row">
            <FourthToSixth
              sideWrapper="left-side-wrapper col-sm-12 col-md-6"
              sideContainer="left-side-container"
              title="iPhone 11"
              titleWrapper="title-wraper"
              discriptionWrapper="description-wraper"
              discription="Just the right amount of everything."
              priceWrpper="price-wrapper"
              price="From $18.70/mo. or $499 with trade‑in."
              firstMoreLink="Learn more"
              secondMoreLink="Apply now"
              linksWrapper="links-wrapper "
            />
            <FourthToSixth
              sideWrapper="right-side-wrapper col-sm-12 col-md-6"
              sideContainer="right-side-container"
              title="Get the latest CDC response to COVID-19."
              titleWrapper="title-wraper white"
              firstMoreLink="Watch the PSA"
              linksWrapper="links-wrapper white"
            />
          </div>
        </div>
      </section>
      <section className="fifth-heghlight-wrapper">
        <div className="container-fluid">
          <div className="row">
            <FourthToSixth
              sideWrapper="left-side-wrapper col-sm-12 col-md-6"
              sideContainer="left-side-container"
              toplogo="top-logo-wrapper"
              logoWrapper="logo-wrapper"
              image={appletv}
              tvshowWrapper="tvshow-logo-wraper"
              tvshowlogo={banker}
              watchMoreWrapper="watch-more-wrapper"
              content="Watch now on the Apple TV App"
            />

            <FourthToSixth
              sideWrapper="right-side-wrapper col-sm-12 col-md-6"
              sideContainer="right-side-container"
              titleWrapper="title-wraper"
              discriptionWrapper="description-wraper"
              discription="With the Always-On Retina display.You’ve never seen a watch like this."
              firstMoreLink="Learn more"
              secondMoreLink="Buy"
              linksWrapper="links-wrapper "
              toplogo="top-logo-wrapper"
              logoWrapper="logo-wrapper"
              image={watchTv}
            />
          </div>
        </div>
      </section>
      <section className="sixth-heghlight-wrapper">
        <div className="container-fluid">
          <div className="row">
            <FourthToSixth
              sideWrapper="left-side-wrapper col-sm-12 col-md-6"
              sideContainer="left-side-container"
              titleWrapper="title-wraper"
              discriptionWrapper="description-wraper white"
              discription="Agent 8 is a small hero on a big mission."
              firstMoreLink="Play now"
              secondMoreLink="Learn about Apple Arcade"
              linksWrapper="links-wrapper "
              toplogo="top-logo-wrapper"
              logoWrapper="logo-wrapper"
              image={arcade}
            />

            <FourthToSixth
              sideWrapper="right-side-wrapper col-sm-12 col-md-6"
              sideContainer="right-side-container"
              title="Apple Card Monthly Installments"
              titleWrapper="title-wraper"
              discriptionWrapper="description-wraper"
              discription="Pay for your next iPhone over time, interest-free with Apple Card."
              firstMoreLink="Learn more"
              secondMoreLink="Apply now"
              linksWrapper="links-wrapper "
            />
          </div>
        </div>
      </section>
      <Youtube />
    </>
  );
}

export default Main;


import FooterMain from "./FooterMain";
import flag from "../../CommonResources/images/icons/16.png";
import React from "react";
import $ from "jquery"
import { useEffect } from "react";

function Footer() {

useEffect(()=>{ if ($(window).width() <= 768) {
    $(".footer-links-wrapper").addClass("someClass");
  } else {
    $(".footer-links-wrapper").removeClass("someClass");
  }
  $(window).on("resize", function (event) {
    if ($(window).width() <= 768) {
      $(".footer-links-wrapper").addClass("someClass");
    } else {
      $(".footer-links-wrapper").removeClass("someClass");
      $(".footer-links-wrapper ul").show();
    }
  });
  // Footer collapse functionality
  $(document).on("click", ".someClass h3", function () {
    $(this).next("ul").slideToggle();
    $(this).toggleClass("expanded");
  });},[])

 
  return (
    <>
      <footer className="footer-wrapper">
        <div className="container">
          <div className="upper-text-container">
            <p>
              1. Trade In: Trade‑in values vary. iPhone 11 and iPhone 11 Pro
              promotional pricing is after trade‑in of iPhone 8 Plus and iPhone
              X in good condition. Additional trade‑in values require purchase
              of a new iPhone, subject to availability and limits. Must be at
              least 18. Apple or its trade-in partners reserve the right to
              refuse or limit any Trade In transaction for any reason. In‑store
              trade‑in requires presentation of a valid, government-issued photo
              ID (local law may require saving this information). Sales tax may
              be assessed on full value of new iPhone. Additional terms from
              Apple or Apple’s trade-in partners may apply. Monthly pricing:
              Available to qualified customers and requires 0% APR, 24-month
              installment loan with Citizens One or Apple Card Monthly
              Installments and iPhone activation with AT&T, Sprint, T-Mobile, or
              Verizon. Taxes and shipping not included. Additional Apple Card
              Monthly Installments terms are in the
              <a
                href="https://www.goldmansachs.com/terms-and-conditions/Apple-Card-Customer-Agreement.pdf"
                target="_blank"
              >
                Customer Agreement
              </a>
              . Additional iPhone Payments terms are
              <a href="https://www.apple.com/legal/sales-support/iphoneinstallments_us/">
                here
              </a>
              .
            </p>
            <p>
              2. Subscription required.
              <br />
              <br />
              Magic Keyboard sold separately.
              <br />
              <br />
              Apple TV+ is $4.99/month after free trial. One subscription per
              Family Sharing group. Offer good for 3 months after eligible
              device activation. Plan automatically renews until cancelled.
              Restrictions and other{" "}
              <a href="https://www.apple.com/promo/">terms </a> apply.
            </p>
          </div>
          <div className="footer-links-wrapper row">
            <div className="links-wrapper-1 col-sm-12 col-md">
              <h3>Shop and Learn</h3>
              <FooterMain
                link1="Mac"
                link2="iPad"
                link3="iPhone"
                link4="Watch"
                link5="TV"
                link6="Music"
                link7="AirPods"
                link8="HomePod"
                link9="iPod touch"
                link10="Accessories"
                link11="Gift Cards"
              />
            </div>
            <div className="links-wrapper-2 col-sm-12 col-md">
              <h3>Services</h3>

              <FooterMain
                link1="Apple Music"
                link2="Apple News+"
                link3="Apple TV+"
                link4="Apple Arcade"
                link5="Apple Card"
                link6="iCloud"
              />

              <h3>Account</h3>
              <FooterMain
                link1="Manage Your Apple ID"
                link2="Apple Store Account"
                link3="iCloud.com"
              />
            </div>
            <div className="links-wrapper-3 col-sm-12 col-md">
              <h3>Apple Store</h3>
              <FooterMain
                link1="Find a Store"
                link2="Genius Bar"
                link3="Today at Apple"
                link4="Apple Camp"
                link5="Field Trip"
                link6="Apple Store App"
                link7="Refurbished and Clearance"
                link8="Financing"
                link9="Apple Trade In"
                link10="Order Status"
                link11="Shopping Help"
              />
            </div>
            <div className="links-wrapper-4 col-sm-12 col-md">
              <h3>For Business</h3>
              <FooterMain
                link1="Apple and Business"
                link2="Shop for Business"
              />
              <h3>For Education</h3>
              <FooterMain
                link1="Apple and Education"
                link2="Shop for College"
              />
              <h3>For Healthcare</h3>
              <FooterMain
                link1="Manage Your Apple ID"
                link2="Apple Store Account"
                link3="iCloud.com"
              />
              <h3>For Government</h3>
              <FooterMain
                link1="Apple and Education"
                link2="Shop for College"
              />
            </div>
            <div className="links-wrapper-5 col-sm-12 col-md">
              <h3>Apple Values</h3>
              <FooterMain
                link1="Find a Store"
                link2="Genius Bar"
                link3="Today at Apple"
                link4="Apple Camp"
                link5="Field Trip"
                link6="Apple Store App"
              />
              <h3>About Apple</h3>
              <FooterMain
                link1="Find a Store"
                link2="Genius Bar"
                link3="Today at Apple"
                link4="Apple Camp"
                link5="Field Trip"
                link6="Apple Store App"
              />
            </div>
          </div>
          <div className="my-apple-wrapper">
            More ways to shop: <a href="#">Find an Apple Store</a> or
            <a href="#">other retailer</a> near you. Or call 1-800-MY-APPLE.
          </div>
          <div className="copyright-wrapper row">
            <div className="copyright col-sm-12 order-2 col-md-8 order-md-1 col-lg-4 order-lg-1">
              Copyright &copy; 2020 Apple Inc. All rights reserved.
            </div>
            <div className="footer-links-terms col-sm-12 order-3 col-lg-6 order-lg-2">
              <ul>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms of Use</a>
                </li>
                <li>
                  <a href="#">Sales and Refunds</a>
                </li>
                <li>
                  <a href="#">Legal</a>
                </li>
                <li>
                  <a href="#">Site Map</a>
                </li>
              </ul>
            </div>
            <div className="footer-country col-sm-12 order-1 col-md-4 order-md-2 text-md-right col-lg-2 order-lg-3">
              <div className="flag-wrapper">
                <img src={flag} />
              </div>
              <div className="footer-country-name">United States</div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

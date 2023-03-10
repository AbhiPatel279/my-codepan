import React from 'react'
import { CommonBanner } from '../common-layout/Common-sec'
import image from "../bg-image/pexels-karolina-grabowska-5632397-3.jpg"
import { useLocation } from 'react-router-dom'
import { CommonSubHeading, CommonInnerHeading } from '../common-layout/Heading'
import { ServicesCategoryContent, ServicesCategoryImage, ServicesSmallBox } from '../common-layout/service-common-sec';
import useDocumentTitle from '../module/Title';

export default function ECommerceDev() {
  useDocumentTitle("E-Commerce Development Drop Techno Lab - Digital Services");
  const Location = useLocation();
  const url = Location.pathname.split("/");
  return (
    <>
      <section className="dtl-common-banner" style={{ backgroundImage: `url(${image})` }}>
        <CommonBanner
          heading="E-Commerce Development"
          text={url[1]}
          categorytext={url[2].replace("-"," ")}
        />
      </section>
      <div className="container">
        < CommonSubHeading
          title="What is E-Commerce?"
          text="Online shopping is a modern trend in India and across the world. So our E-Commerce experts are ready to take your business online. We build custom focused digital products and E-Commerce web applications using Drupal, Magento, WooCommerce, Shopify, BigCommerce and many more.our experts are capable of fulfilling all the requirements of our clients."
        />
      </div>
      <section className="services-category-we-are-offering">
        <div className="container">
          < CommonInnerHeading
            subheading="What We're  offering"
          />
          <div className="row align-items-center flex-lg-row flex-md-column-reverse flex-column-reverse mb-5">
            < ServicesCategoryContent
              subheading="Magento Developments"
              content={["Depending on your needs, we can install and adjust a ready-made theme or develop your custom design.",
                "We develop custom Magento themes to meet your needs.",
                "We are providing a migration service from one Magento to another platform and another platform to magento.",
                "We create custom Magento plugins as per your requirements..",
                "We are providing integration with third-party services like shipping, stock management, payment and many more.",
                "We provide upgrade service from magento 1 to magento 2."]}
            />
            < ServicesCategoryImage
              image={"/images/pexels-realtoughcandycom-11035390-3.jpg"}
            />
          </div>
          <div className="row align-items-center mb-5">
            < ServicesCategoryImage
              image={"/images/pexels-realtoughcandycom-11035390-4.jpg"}
            />
            < ServicesCategoryContent
              subheading="WooCommerce Developement"
              content={["Woocommerce development services providing a secure online shopping experience.",
                "We can install and adjust a ready-made theme or develop your custom design to meet your needs.",
                "We are providing integration with third-party services like shipping, stock management, order management, payments and many more.",
                "Our WooCommerce development services include custom-tailored UI-designing and theme integration for your online store.",
                "We create custom Woocommerce plugins as per your requirements."]}
            />
          </div>
          <div className="row align-items-center flex-lg-row flex-md-column-reverse flex-column-reverse mb-5">
            < ServicesCategoryContent
              subheading="Shopify"
              content={["We are providing a migration service from one Shopify to another platform.",
                "We are providing integration with third-party services like shipping, stock management, order management, payments and many more.",
                "Our Shopify services include custom-tailored UI-designing and theme integration for your online store.",
                "We create custom Shopify plugins as per your requirements. for your online store.",
                "We can install and adjust a ready-made theme or develop your custom design to meet your needs."]}
            />
            < ServicesCategoryImage
              image={"/images/roberto-cortese-F1I4IN86NiE-unsplash-3.jpg"}
            />
          </div>
          <div className="row align-items-center mb-5">
            < ServicesCategoryImage
              image={"/images/zen-cart-img.jpg"}
            />
            < ServicesCategoryContent
              subheading="Zen cart"
              content={["Zencart is a free open source software. So we can easily modify the source code and design it as per your requirements.",
                "We create custom Zen cart plugins as per your requirements..",
                "Our zen cart services include custom-tailored UI-designing and theme integration for you.",
                "We are providing a migration service from one Zen cart to another platform.",
                "We are providing integration with third-party services like shipping, stock management, order management, payments and many more."]}
            />
          </div>
          <div className="row align-items-center flex-lg-row flex-md-column-reverse flex-column-reverse mb-5">
            < ServicesCategoryContent
              subheading="Open Cart"
              content={["We create custom Open cart plugins as per your requirements.",
                "We are providing a migration service from one Open cart to another platform.",
                "Our open cart services include custom-tailored UI-designing and theme integration for you.",
                "We are providing integration with third-party services like shipping, stock management, order management, payments and many more.",
                "We can install and adjust a ready-made theme or develop your custom design to meet your needs."
              ]}
            />
            < ServicesCategoryImage
              image={"/images/open-card-img.jpg"}
            />
          </div>
          <div className="row align-items-center mb-5">
            < ServicesCategoryImage
              image={"/images/presta-shop-img.jpg"}
            />
            < ServicesCategoryContent
              subheading="Prestashop"
              content={["We can install and adjust a ready-made theme or develop your custom design who meet all your business needs.",
                "We create custom Prestashop plugins as per your requirements.",
                "Our open cart services include custom-tailored UI-designing and theme integration for you.",
                "We are providing a migration service from one prestashop to another platform.",
                "We are providing integration with third-party services like shipping, stock management, order management, payments and many more."]}
            />
          </div>
          <div className="row align-items-center flex-lg-row flex-md-column-reverse flex-column-reverse">
            < ServicesCategoryContent
              subheading="E-commerce Migration"
              content={["We are providing an order migration service , customer migration service to move from one E-Commerce to another platform.",
                "We are providing data migration services to migrate your existing platform orders, customer, review etc.",
                "We are providing all the services related to E-Commerce Migration.",
              ]}
            />
            < ServicesCategoryImage
              image={"/images/online-shopping-web-shop-e-shopping-concept-1-1536x1038.jpg"}
            />
          </div>
        </div>
      </section>
      <section className="ecm-payment-gateway-sec">
        <div className="container">
          < CommonSubHeading
            title="Payment Gateway"
            text="Our expert team has ability to integrate any payment gateways into E-Commerce sites."
          />
          <div className="dtl-box-row d-flex flex-wrap mrl-0 justify-content-center">
            < ServicesSmallBox
              BoxContent={[
                {
                  image: "/images/paypal.png",
                  designation: "PayPal",
                  Linktext: "https://www.paypal.com/"
                },
                {
                  image: "/images/stripe2.jpg",
                  designation: "Stripe",
                  Linktext: "https://stripe.com/"
                },
                {
                  image: "/images/authorise-1.png",
                  designation: "Authorize.net",
                  Linktext: "https://www.authorize.net/"
                },
                {
                  image: "/images/afterpay.png",
                  designation: "After Pay",
                  Linktext: "https://www.afterpay.com/"
                },
                {
                  image: "/images/google-pay-icon.webp",
                  designation: "Google Pay",
                  Linktext: "https://pay.google.com/"
                },
                {
                  image: "/images/apple4.jpg",
                  designation: "Apple Pay",
                  Linktext: "https://www.apple.com/uk/apple-pay/"
                },
                {
                  image: "/images/dollar-sign.png",
                  designation: "Custom Payment Gateway",
                  Linktext: ""
                }
              ]}
            />
          </div>
        </div>
      </section>
      <section className="ecm-shipping-solution">
        <div className="container">
          < CommonSubHeading
            title="Shipping Solution"
            text="We have experience for integrating following shipping services. We can also integrate any bespoke shipping solutions into any E-Commerce sites."
          />
          <div className="dtl-box-row d-flex flex-wrap mrl-0 justify-content-center dtl-space-bottom">
            < ServicesSmallBox
              BoxContent={[
                {
                  image: "/images/fedex-1.png",
                  designation: "Fedex",
                  Linktext: "https://elementor.com/"
                },
                {
                  image: "/images/ups-logo.svg",
                  designation: "UPS",
                  Linktext: "https://www.wpbeaverbuilder.com/"
                },
                {
                  image: "/images/usps-logo.png",
                  designation: "USPS",
                  Linktext: "https://www.elegantthemes.com/"
                },
                {
                  image: "/images/dhl-logo.svg",
                  designation: "DHL",
                  Linktext: "https://wpbakery.com/"
                },
                {
                  image: "/images/bd-logo.png",
                  designation: "Blue Dart",
                  Linktext: "https://www.gutenberg.org/"
                }
              ]}
            />
          </div>
        </div>
      </section>
    </>
  )
}

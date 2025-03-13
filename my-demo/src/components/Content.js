import React from "react";
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";
import Inventory from "../assets/inventory.png";
import Quality from "../assets/quality.png";
import Purchase from "../assets/purchase.png";
import { FaBox } from "react-icons/fa";
import { BiSolidPurchaseTagAlt } from "react-icons/bi";
import { FaMagnifyingGlass } from "react-icons/fa6";

function Content() {
  return (
    <section>
      <div className="container mx-auto py-8 lg:py-24 ">
        <motion.h2
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="h2 text-[#C3E956]"
        >
          Let's explore the project and its key features
        </motion.h2>
        {/* Inventory */}
        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="flex"
        >
          {/* icon */}
          <div className="w-1/12">
            <div className="flex items-center justify-center md:w-12 md:h-12 ms:w-6 ms:h-6 rounded-full border">
              <FaBox className="text-[#FFD464]" />
            </div>
          </div>
          <div className="w-11/12 border-2 border-white/50 rounded-xl p-2">
            {/*content and img  */}
            <div className="flex items-start justify-start">
              <img
                src={Inventory}
                alt=""
                className="w-[80%] h-auto shadow-2xl border-transparent rounded-sm"
              />
            </div>
            <div className="flex-col text-[16px] p-3 text-[#000]">
              <p>
                This table represents an inventory tracking system that monitors
                product details and stock levels. Key features include:
              </p>
              <ul className="list-disc">
                <li>
                  <span className="font-medium">Product Information</span>:
                  Product ID, name, and unit type.
                </li>
                <li>
                  <span className="font-semibold">Stock Levels</span>: Current
                  quantity compared to reorder levels.
                </li>
                <li>
                  <span className="font-semibold">Status and Alerts</span>:
                  Indicates if items are in stock, low of stock or out of stock, with
                  low-stock alerts highlighted.
                </li>
                <li>
                  <span className="font-semibold">Supplier Details</span>:
                  Identifies the supplier for each product.
                </li>
              </ul>
              &rArr;{" "}
              <i className="font-medium">
                It visually highlights low stock and out-of-stock items for
                quick action.
              </i>
            </div>
          </div>
        </motion.div>
        {/* Purchase requests */}
        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="flex my-5"
        >
          {/* icon */}
          <div className="w-1/12">
            <div className="flex items-center justify-center md:w-12 md:h-12 ms:w-6 ms:h-6 rounded-full border">
              <BiSolidPurchaseTagAlt className="text-[#FFD464]" />
            </div>
          </div>
          <div className="w-11/12 border-2 border-white/50 rounded-xl p-2">
            {/*content and img  */}
            <div className="flex items-start justify-start">
              <img
                src={Purchase}
                alt=""
                className="w-[80%] h-auto shadow-2xl border-transparent rounded-sm"
              />
            </div>
            <div className="flex-col text-[16px] p-2 text-[#000]">
              <p>
                This table represents a purchase request tracking system, which
                includes the following details:
              </p>
              <ul className="list-disc">
                <li>
                  <span className="font-semibold">Request Information</span>:
                  Unique request IDs, requesting department, and product details
                  (ID and name).
                </li>
                <li>
                  <span className="font-semibold">Quantity Requested</span>:
                  Number of units requested per item.
                </li>
                <li>
                  <span className="font-semibold">Request Status</span>:
                  Indicates whether the request is pending, ordered or received.
                </li>
                <li>
                  <span className="font-semibold">Received Date</span>: Displays
                  the date when the items were received, if applicable.
                </li>
              </ul>
              &rArr;
              <i className="font-medium">
                The table also highlights missing product information ("Not
                found") for clarity and follow-up. It helps monitor and manage
                departmental purchase requests effectively.
              </i>
            </div>
          </div>
        </motion.div>
        {/* Quality control */}
        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="flex"
        >
          {/* icon */}
          <div className="w-1/12">
            <div className="flex items-center justify-center md:w-12 md:h-12 ms:w-6 ms:h-6 rounded-full border">
              <FaMagnifyingGlass className="text-[#FFD464]" />
            </div>
          </div>
          <div className="w-11/12 border-2 border-white/50 rounded-xl p-2">
            {/*content and img  */}
            <div className="md:w-3/6 place-content-center">
              <img
                src={Quality}
                alt=""
                className="w-auto h-auto shadow-2xl border-transparent rounded-sm"
              />
            </div>
            <div className="flex-col text-[16px] p-2 text-[#000]">
              <p>
                The following parts of the table lead to insights into product
                quality, defect trends, and the ability to prioritize corrective
                actions:
              </p>
              <ul className="list-disc">
                <li>
                  <span className="font-semibold">Defect Code</span>: Helps
                  categorize specific issues, making it easier to identify
                  recurring defects for targeted resolutions.
                </li>
                <li>
                  <span className="font-semibold">Defect Rate</span>: Indicates
                  the proportion of defective products in each batch, allowing
                  for trend analysis and quality assessment over time.
                </li>
                <li>
                  <span className="font-semibold">
                    Product Details (ID and Name)
                  </span>
                  : Links defects to specific products, enabling better
                  understanding of quality issues by product type.
                </li>
                <li>
                  <span className="font-semibold">Date</span>: Tracks when
                  defects were identified, helping monitor time-based patterns
                  or abnormalities in production quality.
                </li>
                <li>
                  <span className="font-semibold">
                    Quantity and Inspections
                  </span>
                  : Shows the scale of defects in relation to the total
                  inspected, giving a clearer perspective on severity.
                </li>
              </ul>
              &rArr;
              <i className="font-medium">
                These combined data points enable teams to pinpoint areas for
                improvement, monitor recurring issues, and take corrective
                actions systematically.
              </i>
            </div>
          </div>
        </motion.div>
        <motion.div variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }} className="container mx-auto">
            <i className="text-sm">
              (*) Google sheet source: <a target="_blank" href="https://docs.google.com/spreadsheets/d/15XSPlBjKtGZq_Zwe_1mWZ7NU2ZmC3cMd8a-swl_4ox8/edit?usp=sharing">Click here</a>
            </i>
          </motion.div>
      </div>
    </section>
  );
}

export default Content;

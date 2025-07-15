import React from "react"
import SaleCard from "./SaleCard"

const Sale = () => {
  return (
    <div className="">
    <section className=" px-6 ">
      <div className="text-center space-y-4">
        <p className="text-gray-500">Summer Collection</p>
        <h1 className="text-4xl font-semibold">ON Sale T-Shirts</h1>
      </div>
      <div className="grid lg:grid-cols-4 grid-cols-1 gap-4 ">
          
      </div>
    </section>
    <SaleCard category="men" name="Jean" price="$12,000" image="https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-09-a-300x366.jpg"/>
    <SaleCard category="womenmen" name="Jean" price="$29,000"/>
    </div>
  )
}

export default Sale

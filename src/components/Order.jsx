import moment from "moment";
import React from "react";
import Currency from "react-currency-formatter";

export function Order({ id, amount, amountShipping, items, timeStamp, images }) {

  return (
    <div
      className="border rounded-md"
      style={{ margin: '40px 0' }}
    >
      <div style={{ justifyContent: 'space-between' }} className="flex items-center p-5 bg-gray-100 text-sm text-gray-600">

        <div>
          <p className="font-bold text-xs">ORDER PLACED</p>
          <p>{moment.unix(timeStamp).format("DD MMM YYYY")}</p>
        </div>

        <div>
          <p className="text-xs font-bold">TOTAL</p>
          <p>
            <Currency quantity={amount} currency="USD" /> - Next Day Delivery{" "}
            <Currency quantity={amountShipping} currency="USD" />
          </p>
        </div>

        <div>
          <p className="">
            <strong>ORDER</strong> # {id}
          </p>
          <p className="text-sm whitespace-nowrap sm:text-xl self-end flex-1 text-right text-blue-500">
            {items.length} items
          </p>
        </div>

      </div>

      <div className="p-5 sm:p-10">
        <div className="flex">
          {images.map((image) => (
            <img src={image} alt="" style={{ height: '280px', margin: '8px 22px' }} />
          ))}
        </div>
      </div>
    </div>
  );
};
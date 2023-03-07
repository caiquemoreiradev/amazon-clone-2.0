import Image from "next/image";
import React, { useState } from "react";
import Currency from "react-currency-formatter";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";

import { Star } from "phosphor-react";
import { addToBasket } from "../slices/basketSlice";

const MAX_RATING = 5;
const MIN_RATING = 1;

export function Product({
    id,
    title,
    price,
    description,
    category,
    image,
    rating,
}) {
    const dispatch = useDispatch();
    const [customRating] = useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING)) + MIN_RATING
    );
    const [hasPrime] = useState(Math.random() < 0.5);

    const addItemTOBasket = () => {
        const loadingToast = toast.loading("Adding Item...");

        const product = {
            id,
            title,
            price,
            description,
            category,
            image,
            hasPrime,
            customRating,
        };

        dispatch(addToBasket(product));

        toast.success(`Item Added To Basket`, {
            id: loadingToast,

            position: "bottom-right",
            style: {
                textAlign: "center",
                padding: "18px",
            },
        });
    };

    return (
        <div
            className="relative flex flex-col m-5 bg-white z-30 p-10"
        >
            <Toaster />
            <p className="absolute top-2 right-2 text-xs italic text-gray-400">
                {category}
            </p>
            <div className="items-center flex justify-center">
                <img
                    src={image}
                    alt={title}
                    style={{
                        width: '200px',
                        height: '200px'
                    }}
                    className="object-contain my-2"
                />
            </div>

            <h4 className="my-2">{title.length > 20 ? `${title.substring(0, 20)}...` : title}</h4>
            <div className="flex">
                {Array(customRating)
                    .fill()
                    .map((_, i) => (
                        <Star style={{ color: '#fbbf24' }} className="my-2 " size={22} />
                    ))}
            </div>
            <p className="text-xs my-2 max-w-xs">{`${description.substring(0, 120)}...`}</p>
            <div className="my-2">
                <Currency quantity={price} currency="USD" />
            </div>
            {hasPrime ? (
                <div className="flex items-center space-x-2 my-2">
                    <img
                        className="w-12"
                        src="https://www.nicepng.com/png/detail/115-1159983_amazon-prime-logo-prime-amazon.png"
                        alt=""
                    />
                    <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
                </div>
            ) : (
                <div className="flex items-center space-x-2" style={{ margin: '12px' }}/>
            )}
            <button
                onClick={addItemTOBasket}
                className="mt-2 button hover:opacity-70"
            >
                Add to Basket
            </button>
        </div>
    );
};

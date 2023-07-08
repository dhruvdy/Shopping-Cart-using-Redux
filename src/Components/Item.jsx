import {add, remove} from '../Slices/CartSlice.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

export default function Item({id,title,price,description,category,image,rate,count,info}){
    const cart = useSelector((state)=> state);
    const dispatch = useDispatch();
   // console.log(cart)
    return (
        <div className="max-w-[350px] h-[350px] flex flex-col justify-between items-center gap-2 p-4 group rounded-md shadow-lg 
                        hover:scale-110 transition duration-200 shadow-[rgb(0,0,0,0.3)]">

                <h2 className="text-[1.125rem] font-medium text-[rgb(55,65,81)] text-center py-2">
                    {title.length > 17 ? `${title.substring(0,18)}...` : title}
                    </h2>

                <p className="text-[10px] w-40 font-light text-[rgb(156,163,175)] text-center py-2 ">
                    {description.length> 35 ? `${description.substring(0,50)}...` : description}
                    </p>

                <div className="h-[150px]  py-2">
                    <img src={image} className=" h-[150px] object-contain" />
                </div>


            <div className="flex justify-between w-full mt-[10px]">

                <span className="text-green-700 font-semibold">{`$${price}`}</span>
                {
                    cart.cart.some((item)=> { return item.id==id}) ? 
                    (<button onClick={()=>{dispatch(remove(id));}} className="text-[12px] font-medium px-3 p-1 border-gray-700 text-gray-700 rounded-xl transition duration-150  border-[2px] group-hover:text-white group-hover:bg-black">
                        REMOVE ITEM
                        </button>):
                    (<button onClick={()=>{dispatch(add(info))}} className="text-[12px] font-medium px-3 p-1 border-gray-700 text-gray-700 rounded-xl transition duration-150  border-[2px] group-hover:text-white group-hover:bg-black">
                    ADD TO CART
                    </button>)
                        
                }
                

            </div>
        </div>
    );
}
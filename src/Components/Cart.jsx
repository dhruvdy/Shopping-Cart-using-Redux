import { useSelector,useDispatch } from "react-redux";
import {useNavigate} from 'react-router-dom';
import CartItem from "./CartItem";


export default function Cart(){
    const navigate = useNavigate();
    const {cart} = useSelector((state) => state);
    console.log(cart)
    return (
        <div className="w-full mt-[1rem]">
            <div className="mx-auto max-w-[1130px] ">
            {
                cart.length==0 ? <div className="h-[80vh] flex flex-col items-center justify-center">
                   
                    <div className="text-[1.3rem] font-medium mb-3">Your Cart is Empty!</div>
                    <button onClick={()=>{navigate('/')}} className="py-[0.9rem] px-[1.5rem] transition duration-300 hover:bg-white hover:text-green-600 border-2 bg-green-600 rounded-lg border-green-600 text-white font-bold">SHOP NOW</button>
                    
                </div>:
                <div className="flex flex-col md:flex-row justify-between item-center ">
                    <div className="w-[60%] flex flex-col gap-y-6">
                        {
                            cart.map((item)=>(
                                <CartItem key={item.id}
                                id={item.id}
                                item={item}
                                />
                            ))
                        }
                    </div>
                    <div className="w-[35%] flex flex-col justify-between items-start">
                        <div>
                            <p className="text-[1.2rem] text-green-600 font-medium">YOUR CART</p> 
                            <p className="text-[3rem] text-green-600 -mt-[1rem] font-bold">SUMMARY</p>
                            <div className="font-medium"> Total Item : <span>
                        
                                {
                                     cart.reduce((acc, item)=>{
                                        return acc+1
                                    },0)
                                }
                                </span></div>
                            <div className="font-medium"> Total Amount : $<span>
                                {
                                     cart.reduce((acc, item)=>{
                                        return acc+item.price
                                    },0)
                                }
                                </span></div>
                        </div>
                            <button className="max-w-[100%] min-w-[50%] hover:bg-white transition duration-200 hover:text-green-600
                                             border-green-600 border-2 bg-green-600 text-[1.2rem] py-[0.3rem] text-white mt-[1rem] rounded-md
                                               font-semibold">CHECKOUT NOW</button>
                    </div>
                </div>
            }

            </div>
        </div>
    )
}
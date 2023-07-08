import {RiDeleteBinFill} from "react-icons/ri";
import { useDispatch } from "react-redux";
import {add, remove} from '../Slices/CartSlice.jsx';

export default function CartItem({item, id}){
    //console.log(item);
    const dispatch = useDispatch();
    return (
        <div className="w-full flex justify-center gap-7">
            <div className="w-[130px]">

                <img className="w-full h-full object-contain" src={item.image}/>
            </div>
            <div className="max-w-[60%] flex flex-col justify-around">
                <h2 className="capitalize font-semibold text-[1.2rem]">{item.title}</h2>
                <p>
                    {item.description.length>60 ? item.description.split(' ').slice(0,20).join(' ') : item.description}
                    </p>
                <div className="flex justify-between">
                    <span className="text-green-600 font-bold">{'$'+item.price}</span>
                    <button onClick={()=>{dispatch(remove(id))}}><RiDeleteBinFill/></button>
                </div>
            </div>
        </div>
    )
}
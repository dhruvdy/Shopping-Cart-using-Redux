import logo from '../logo.png';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';

export default function Header(){
    const cart = useSelector((state) => {return state.cart})
    return (
        <div className='w-full bg-[rgb(15,23,42)] py-[0.75rem] '>
            <div className='flex max-w-[1130px] mx-auto justify-between '>
                
                <img src={logo} width={170} />

                <div className='text-white flex text-[1.2rem] font-medium items-center justify-center'>
                    <Link className='hover:text-green-500' to='/'>Home</Link>
                    <div className='ml-[1rem] group relative'>
                        {
                            cart.length>0 ? <div className='absolute text-[10px] rounded-full left-full text-white
                                                             bg-green-500 h-[15px] w-[15px] flex flex-col 
                                                            justify-center items-center animate-bounce'>{cart.length}</div> :  ``
                        }
                        <Link className='group-hover:text-green-500' to='/Cart'><FaShoppingCart/></Link>
                    </div>
                </div>

            </div>
            

        </div>
    )
}
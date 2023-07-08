import {useEffect, useState} from 'react';
import Item from './Item';
import Loader from './Loader';


const API = `https://fakestoreapi.com/products`;

export default function Items(){
    const [loading ,setLoading] = useState(false);
    const [products,setProducts] = useState([]);
    const fetchItems = async()=>{
        setLoading(true);
        try{
            const res = await fetch(API);
            const data = await res.json();
            setProducts(data);
        }
        catch(e){

        }
        setLoading(false);
    }

    useEffect(()=>{
        fetchItems();
    },[])

    return (
        <div className="w-full">
                {
                    loading ? <Loader/> : !products>0 ? <div className='text-[3rem]'>No Item Avalaible</div> : 
                    <div className="max-w-[1200px] pl-[1rem] pr-[1rem] mx-auto gap-[1rem] grid grid-cols-1 second-break:grid-cols-2 first-break:grid-cols-3 lg:grid-cols-4 mt-[2rem]">
                    {products.map((product)=>(
                        <Item 
                         key={product.id}
                         id={product.id}
                        title={product.title}
                        description={product.description}
                        image={product.image}
                        rate={product.rating.rate}
                        price={product.price}
                        info={product}
                        />

                    ))}
                    </div>
                }

        </div>
    )
}
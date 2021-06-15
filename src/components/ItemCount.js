import React, {useState} from 'react';
import CartWidget from './CartWidget';


const ItemCount = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState(initial);

    const addCount = () => {
        if(stock > 1 && count < stock) {
            
            setCount(count +1);
       }
       if(count == stock){
        alert("Máximo stock disponible")
    }

    }

    const removeCount = () => {
        if(stock > 1 && count >=2) {

             setCount(count -1);
        }
       
    

}
    const ondAdd = () => {
        if(count==1){ 
      alert("Se agregó " + count + " remera al carrito.")
        }
        else{
            alert("Se agregaron " + count + " remeras al carrito.")

        }
    }

   
    return ( <>
        <div className="row text-center w-25 m-auto bg-pink p-4 pb-3">
            <h5 className="text-white mb-3">Remeras</h5>
            <div className="col-md-12  "> 
            <button className="border-0 bg-light text-pink pt-0 pb-0" onClick={ () => removeCount()}>-</button>
                <label className="w-75 bg-pink text-white "><h5> {count}</h5></label>
                <button className="border-0 bg-light text-pink pt-0 pb-0" onClick={ () => addCount() }>+</button>
 
            </div> 
        
            <div className="col-md-12 ">
            <button className="border-0 bg-light text-pink d-block w-100 mt-2" icon ='fas fa-cart-plus text-pink' 
            onClick={ () => ondAdd() }>Agregar <CartWidget icon ='fas fa-cart-plus text-pink iButton'/>
</button> 
            </div>     
        </div>     

            </>
    )
}

export default ItemCount;
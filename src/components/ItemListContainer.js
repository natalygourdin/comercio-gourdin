import ItemCount from "./ItemCount";

export  function ItemListContainer (props) {
    return(<>
    <div className="text-center">
        <h3 className="text-pink mt-3 bg-light p-3 mb-5">{props.mensaje}</h3>
        
        <ItemCount initial = {1} stock ={7}></ItemCount>
    </div>
        </>
    );
};
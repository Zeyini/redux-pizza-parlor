import {useState} from 'react';
import { useDispatch } from 'react-redux';

function SelectPizzaItem({pizza}) {
    const [ifAddPizzaEnabled, setIfAddPizzaEnabled] = useState(true);
    const dispatch = useDispatch();

    const addPizza = () => {
        //add this pizza data to my curentOrderlineItem
        dispatch({
            type: 'ADD_PIZZA_TO_ORDER',
            payload: {
                id: pizza.id, 
                name: pizza.name,
                price: pizza.price,
                qty: 1
            }
        })
        //switch the button to say remove
        setIfAddPizzaEnabled(false);
    }

    const removePizza = () => {
        //add this pizza data to my curentOrderlineItem
        dispatch({
            type: 'REMOVE_PIZZA_FROM_ORDER',
            payload: {
                id: pizza.id, 
                qty: pizza.qty
            }
        })
        //switch the button to say remove
        setIfAddPizzaEnabled(true);
    }




    return (

        <>
            <h3>{pizza.name}</h3>
            <p>{pizza.description}</p>
            <p>pizza.price</p>
            <div>{ ifAddPizzaEnabled ? 
                <button onClick={addPizza}>Add</button> :
                <button onClick={removePizza}>Remove</button>}
            </div>

        </>

    )
}

export default SelectPizzaItem;
import { useEffect, useStore } from "react";
import { useSelector, useDispatch } from "react-redux";

function SelectPizza() {

    const [ifAddPizzaEnabled, setIfAddPizzaEnabled] = useStore(true);
    const pizzas = useSelector(store => store.pizzas);
    const total = useSelector(store => store.total);
    const currentTotalLineItems = useSelector(store => 
                store.currentTotalLineItems);

    const dispatch = useDispatch();

    useEffect({
        fetchPizzas();
    }, []);

    const fetchPizzas = () => {
        axios({
            method: 'GET',
            url: '/api/pizza'
        })
        .then(response => {
            console.log('Get of pizzas successful: ', response.data);
            dispatchEvent({
                type: 'SET_pizzas',
                payload: response.data;
            })
        })
    }

    const addPizza = (pizza) => {
        //update total with the pizza.price
        dispatch({
            type: 'ADD_TO_TOTAL',
            payload: pizza.price
        })
        //add this pizza data to my curentOrderlineItem
        dispatch({
            type: 'ADD_PIZZA_TO_ORDER',
            payload: { id: pizza.id, qty: pizza.qty }
        })
        //switch the button to say remove
        setIfAddPizzaEnabled(false);
    }

    const removePizza = (pizza) => {
        //update total with the pizza.price
        dispatch({
            type: 'SUBTRACT_FROM_TOTAL',
            payload: pizza.price
        })
        //add this pizza data to my curentOrderlineItem
        dispatch({
            type: 'REMOVE_PIZZA_FROM_ORDER'
        })
        //switch the button to say remove
        setIfAddPizzaEnabled(true);
    }

    return(
        <>
        <h2>Step 1: Select Your Pizza</h2>
        <section>
            {pizzas.map(pizza => {
                return (
                    <>
                        <h3>{pizza.name}</h3>
                        <p>{pizza.description}</p>
                        <p>pizza.price</p>
                        <div>{ ifAddPizzaEnabled ? 
                            <button onClick={addPizza(pizza)}>Add</button> :
                            <button onClick={removePizza}>Remove</button>}
                        </div>
                        <button onClick={goToForm}>Next</button>
                    </>
                )
            })}
        </section>
        </>





    )
}



export default SelectPizza;
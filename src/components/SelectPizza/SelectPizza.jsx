import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SelectPizzaItem from "../SelectPizzaItem/SelectPizzaItem";
import axios from "axios";

function SelectPizza() {

    const pizzas = useSelector(store => store.pizzas);

    const dispatch = useDispatch();

    useEffect(() => {
        fetchPizzas();
    }, []);

    const fetchPizzas = () => {
        axios({
            method: 'GET',
            url: '/api/pizza'
        })
        .then(response => {
            console.log('Get of pizzas successful: ', response.data);
            dispatch({
                type: 'SET_PIZZAS',
                payload: response.data
            })
        })
    }

    const goToForm = () => {

    }

    return(
        <>
        <h2>Step 1: Select Your Pizza</h2>
        <section>
            {pizzas.map(pizza => {
                console.log(JSON.stringify(pizza));
                return (
                    <SelectPizzaItem pizza={pizza} />
              
                )
            })}
                <button onClick={goToForm}>Next</button>
        </section>
        </>





    )
}



export default SelectPizza;
import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { Dispatch } from 'react';

function CustomerForm() {

    const [nameInput, setNameInput] = useState('');
    const [addressInput, setAddressInput] = useState('');
    const [cityInput, setCityInput] = useState('');
    const [zipInput, setZipInput] = useState('');
    const [typeInput, settypeInput] = useState('');
    
const currentOrderForm = {name: nameInput,address: addressInput,city: cityInput,zip:zipInput,type: typeInput}
    

const dispatch = useDispatch()
dispatch({
    type: 'SET_USER_INPUT_VALUES', 
    payload: currentOrderForm 
  }) 


    return (
        <form  className="add-InfoForm">
            <label htmlfor="name"> </label>
            <input type="text" 
            id='name' 
            placeholder="Name"
            onChange={(event) => setNameInput(event.target.value)}
            ></input>
            <label htmlfor="Street Address"> </label>
            <input 
            type="text" 
            id='StreetAddress' 
            placeholder="Street Address"
            onChange={(event) => setAddressInput(event.target.value)}
            ></input>
            <label htmlfor="City"> </label>
            <input 
            type="text" 
            id='City ' 
            placeholder="City"
            onChange={(event) => setCityInput(event.target.value)}
            ></input>
            <label htmlfor="Zip"> </label>
            <input 
            type="text" 
            id='Zip' 
            placeholder="Zip"
            onChange={(event) => setZipInput(event.target.value)}
            ></input>

            <input
                type="radio"
                value="Delivery"
                id="deliveryType"
                checked={typeInput === 'Delivery'}
                onChange={(event) => settypeInput(event.target.value)}
            />
            <label htmlFor="deliveryType">Delivery</label>

            <input
                type="radio"
                value="Pickup"
                id="PickupType"
                checked={typeInput === 'Pickup'}
                onChange={(event) => settypeInput(event.target.value)}
            />
           
        </form>

    )
}

export default CustomerForm;
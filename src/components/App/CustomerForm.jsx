import { useState } from 'react';
import { useDispatch } from 'react-redux';

// import { Dispatch } from 'react';

function CustomerForm() {


    const [nameInput, setNameInput] = useState('');
    const [addressInput, setAddressInput] = useState('');
    const [cityInput, setCityInput] = useState('');
    const [zipInput, setZipInput] = useState('');
    const [typeInput, settypeInput] = useState('');
    
    const handleSubmit = event => {
        event.preventDefault();
    
// const currentOrderForm = {name: nameInput,address: addressInput,city: cityInput,zip:zipInput,type: typeInput}
    
};
// console.log(currentOrderForm);
const dispatch = useDispatch()
dispatch({
    type: 'SET_USER_INPUT_VALUES', 
    payload: {name: nameInput,address: addressInput,city: cityInput,zip:zipInput,type: typeInput}

  
  }) 






    return (
        <>
        <h2 className="inputHeader">Step 2: Customer Information </h2>
        <form  onSubmit={handleSubmit} >
            <div className="input-row">
            <label htmlfor="name"> </label>
            <input type="text" 
            id='name' 
            placeholder="Name"
            value={nameInput}
            onChange={(event) => setNameInput(event.target.value)}
            ></input>
            </div>
            <div className="input-row">
            <label htmlfor="Street Address"> </label>
            <input 
            type="text" 
            id='StreetAddress' 
            placeholder="Street Address"
            value={addressInput}
            onChange={(event) => setAddressInput(event.target.value)}
            ></input>
            </div>
            <div className="input-row">
            <label htmlfor="City"> </label>
            <input 
            type="text" 
            id='City ' 
            placeholder="City"
            value={cityInput}
            onChange={(event) => setCityInput(event.target.value)}
            ></input>
            </div>
            <div className="input-row">
            <label htmlfor="Zip"> </label>
            <input 
            type="text" 
            id='Zip' 
            placeholder="Zip"
            value={zipInput}
            onChange={(event) => setZipInput(event.target.value)}
            ></input>
            </div>
            <div className='RadioInputs'>
            <div className="input-row">
            <input
                type="radio"
                value="Delivery"
                id="deliveryType"
                checked={typeInput === 'Delivery'}
                onChange={(event) => settypeInput(event.target.value)}
            />
             <label htmlFor="deliveryType">Delivery</label>
            </div>
            <div className="input-row">
            <input
                type="radio"
                value="Pickup"
                id="PickupType"
                checked={typeInput === 'Pickup'}
                onChange={(event) => settypeInput(event.target.value)}
            />
              <label htmlFor="deliveryType">Delivery</label>
            </div>
           </div>
           <button id="next1button" type="submit">NEXT</button>
        </form>
        </>
    )
}

export default CustomerForm;
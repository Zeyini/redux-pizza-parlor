import { useSelector } from "react-redux"
function CheckoutTable () {
  //const total = useSelector(store=> store.total)
  //const 
    return (
        <div>
            <h1>Checkout Time !</h1>
            <h2> "ORDER DATA" </h2>
            <h2> 'For Delivery or For Pickup HERE'</h2>
            <table>
  <tr>
    <th>Pizza</th>
    <th>Cost</th>
  </tr>
  <tr>
    <td>"Pineapple"</td>
    <td>"$12.99"</td> 
  </tr>
  <tr>
    <td>"Sausage"</td>
    <td>"$1.39"</td>
  </tr>
</table>
<h3> Total: "29.99"</h3>
<button> Checkout !</button>
        </div>
    )
}
export default CheckoutTable
import React , {useState} from 'react'
import "./Checkout.css"

function Checkout({completeOrder}) {
    const [nameBuyer,setNameBuyer] = useState("")
    const [telBuyer,setTelBuyer] = useState("")
    const [emailBuyer,setEmailBuyer] = useState("")

    const handleCompleteOrder = async (e) => {
        e.preventDefault()
        const buyer = {
            name:nameBuyer,
            tel:telBuyer,
            email:emailBuyer
        }

        await completeOrder(buyer)
    }

    return (
        <form className='checkoutBuyer' onSubmit={(e)=>handleCompleteOrder(e)}>
            <input type="text" value={nameBuyer} onChange={(e)=>setNameBuyer(e.target.value)} placeholder='ingrese su nombre y apellido' required />
            <input type="number" value={telBuyer} onChange={(e)=>setTelBuyer(e.target.value)} placeholder='ingrese su telefono' required />
            <input type="email" value={emailBuyer} onChange={(e)=>setEmailBuyer(e.target.value)} placeholder='ingrese su email' required />
            <button type='submit' >Finalizar Compra</button>
        </form>
    )
}

export default Checkout
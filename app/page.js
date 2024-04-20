import styles from "./page.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/primary.css";

import { validate } from "./actions";




export default function Home() {
  'use client'

  const validateWithId = validate.bind(null, "2") 
  return (
    <>
      <div className="app text-center text-dark mx-5">
        <div>
          What do you want?
        </div>
        <a style={{ width: "100%" }} href="/home">
          <button id="home" className="btn btn-outline-dark my-2 mx-auto" type="submit">Home</button>
        </a>
        
      </div>
    
    </>
  )
}


{/* <div className="text-center text-light">
<p>This text is centered.</p>
</div>

<div className="d-flex justify-content-center text-light">
<p>This block-level element is centered horizontally.</p>
</div>

    <div className="d-flex align-items-center text-light" style={{height: "200px"}}>
<p>This text is centered vertically.</p>
</div>

<div style={{height: "200px"}}>
<p className="my-auto">This block-level element is centered vertically.</p>
</div> */}


// async function createInvoice(formData) {
//   'use server'

//   const rawFormData = {
//     customerId: formData.get('customerId'),
//     amount: formData.get('amount'),
//     status: formData.get('status'),
//   }

//   console.log(rawFormData);
// mutate data
// revalidate cache
// }





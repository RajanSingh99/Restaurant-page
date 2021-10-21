import { useEffect, useState } from "react";
import React from "react";
import { PulseSpinner } from "react-spinners-kit";

const Contact = () => {
    const [contacts,setContacts]=useState(null);
    const [isPending, setPending]=useState(true);
    const [error, setError] = useState(null); 

    useEffect(()=>{
        const abortController = new AbortController();

        setTimeout(() => {
            fetch('http://localhost:8000/contact',{signal: abortController.signal})
          .then(res =>{
              if (!res.ok) {
                  throw Error("could not fetch the data !");
              }
              return res.json();
          }).then(data =>{
              setPending(false);
              setContacts(data);
              setError(null);
          }).catch(err => {
              if (err.name === "AbortError") {
                  console.log("fetch aborted");   
              } else{
                setPending(false);
                setError(err.message)
              }
          })
        },1000);
        return () => abortController.abort();
    },[]);


    return (
        <div className="contact">
            {error && <div className="error-Message">{error}</div>}
            {isPending && <div className="loading"><h1>Loading
            <PulseSpinner
                size={30}
                color="#f4cb92"
                loading={true}/></h1> 
            </div>}
            {contacts && contacts.map(contact =>(
                <div className="contact-preview" key={contact.id} style={{borderBottom : contact.id===3? "1px solid #f4cb92":"none"}}>
                    <h2>{contact.title}</h2>
                    <h3>{contact.name}</h3>
                    <h4>{contact.mobile}</h4>
                </div>
            ))}
        </div>
      );
}
 
export default Contact;
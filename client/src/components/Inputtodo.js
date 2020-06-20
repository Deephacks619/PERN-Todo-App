import React,{Fragment,useState} from 'react';

const Inputtodo = () => {
    const [description,setdescription] = useState("")

    const onsubmitform = async (e)=>{
       e.preventDefault();
        try {
            const body = { description }
            const response =await fetch("http://localhost:5000/todos",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(body)
            });
            console.log(response)
            window.location="/";
        } catch (error) {
            console.log(error.message)
        }
    }
    return (
        <div>
            <Fragment>
                <h1 className="text-center mt-5" style={{fontFamily:"marquee",fontWeight:"bold"}}>TODO APP USING DATABASE</h1>
                <form className="d-flex m-5" onSubmit={onsubmitform} >
                    <input type="text" required className="form-control"
                    value={description} onChange={(e)=> setdescription(e.target.value)}
                     />
                    <button className="btn btn-dark ml-2">ADD TODO</button>
                </form>
            </Fragment>
        </div>
    );
};

export default Inputtodo;
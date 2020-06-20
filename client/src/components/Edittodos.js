import React,{Fragment,useState} from 'react';


const Edittodos = ( {todo} ) => {

    const [description,setdescription]=useState(todo.description)

    const changetodo = async (e)=>{
        e.preventDefault(); 
        try {
            const body = {description}
            await fetch(`http://localhost:5000/todos/${todo.todo_id}`,{
                method:"PUT",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(body)
            });
           window.location="/";

        } catch (error) {
            console.log(error.message)
        }

    }
    return (
        <Fragment>
             <button type="button" className="btn btn-success" data-toggle="modal" 
             data-target={`#id${todo.todo_id}`}>Edit</button>

            <div className="modal fade"
            onClick={e => setdescription(todo.description)}
             id={`id${todo.todo_id}`}>
            <div className="modal-dialog">
                <div className="modal-content">

                <div className="modal-header">
                    <h4 className="modal-title">Edit the todo</h4>
                    <button type="button"
                    onClick={e => setdescription(todo.description)}
                    className="close" data-dismiss="modal">x</button>
                </div>

                
                <div className="modal-body">
                    <input type="text"
                    value={description}
                    onChange={(e)=>setdescription(e.target.value)}
                     className="form-control"/>
                </div>

                
                <div className="modal-footer">
                    <button type="button" className="btn btn-primary"
                    onClick={changetodo}
                     data-dismiss="modal">Save</button>
                    <button type="button" 
                    onClick={e => setdescription(todo.description)}
                    className="btn btn-danger" data-dismiss="modal">Close</button>
                </div>

                </div>
            </div>
            </div>     
        </Fragment>
    );
};

export default Edittodos;
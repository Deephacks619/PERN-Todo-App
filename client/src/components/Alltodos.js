import React,{Fragment,useEffect,useState} from 'react';
import Edittodos from './Edittodos'

const Alltodos = () => {

const [alltodos,setalltodos] = useState([])

    const deletetodo = async (id) =>{
        try {
            await fetch(`http://localhost:5000/todos/${id}`,{
                method:"DELETE",
            });
           
            setalltodos(alltodos.filter( todo => todo.todo_id!==id))

        } catch (error) {
            console.log("error.message")
        }
    }

    const getalltodos = async (e) =>{
        try {
            const response =await fetch("http://localhost:5000/alltodos")
            const data = await response.json()

            setalltodos(data);
            

        } catch (error) {
            console.log(error.message)
        }
    }
    useEffect(()=>{
        getalltodos();
    },[]);

    return (
        <Fragment>
            <table className="table table-hover text-center">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    
                   {/* <tr>
                        <td>Description</td>
                        <td>Doe</td>
                        <td>john@example.com</td>
                    </tr> */}
                {alltodos.map((todo)=>( 
                    <tr key={todo.todo_id}>
                        <td>{todo.description}</td>
                        <td><Edittodos todo={todo} /></td>
                        <td>
                        <button className="btn btn-primary"
                        onClick={()=>deletetodo(todo.todo_id)}>Delete</button></td>
                    </tr>
                ))}
                </tbody>
        </table>
        </Fragment>
    );
};

export default Alltodos;
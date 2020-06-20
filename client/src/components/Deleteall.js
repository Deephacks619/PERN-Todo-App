import React,{Fragment} from 'react';

const Deleteall = () => {
    const deletetodos = async ()=>{
        if(window.confirm("Do you wanna delete all todos this will erase all data")){
            await fetch('http://localhost:5000/deletealltodos',{
                method:"DELETE"
            });
        }
        window.location="/";
    }
    return (
        <Fragment>
            <div className="text-center" style={{marginTop:"60px"}}>
                <button className="btn btn-danger" onClick={deletetodos}>Delete All TODOS</button>
            </div>
        </Fragment>
    );
};

export default Deleteall;
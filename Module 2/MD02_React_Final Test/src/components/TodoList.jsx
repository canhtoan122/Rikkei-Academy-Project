import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteJob, jobStatus, sortStatus} from '../redux-toolkit/reducer/todoReducer'

export default function TodoList() {
    const data = useSelector((state) => {
        return state
    })
    const disPatch = useDispatch();
    console.log(data);
    const deleteTodo = (id)=>{
        disPatch(deleteJob(id));
    }
    const handleStatus=(id, status)=>{
        disPatch(jobStatus({ id, status }));
    }
    const sort=()=>{
        disPatch(sortStatus());
    }
    return (
        <div>
            <ul>
                {
                    data.todoReducer.map((item, index) => {
                        return <li key={index}>
                            {item.name} 
                            <input type="checkbox" name="status" id="status" checked={item.status} 
                            onChange={() => handleStatus(item.id, !item.status)} /> 
                            <button onClick={() => deleteTodo(item.id)}>Delete</button>
                        </li>
                    })
                }
            </ul>
            
            <p>Move done item to the end?</p>
            <button onClick={sort}>click</button>
        </div>
    )
}

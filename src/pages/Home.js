import React, { useEffect, useState } from 'react';
import { addDoc, collection, getDocs } from "firebase/firestore";
import { getDatabase, ref, push, set,onValue, remove, update } from "firebase/database";

import { db } from './Firebase'

const Home = () => {
    const [emp, setEmp] = useState([])
    const [input, setInput] = useState({})
    const [edit , setEdit] = useState()
     useEffect(() => {
const dbRef = ref(db, 'employees');

onValue(dbRef, (snapshot) => {
    const list = []
  snapshot.forEach((childSnapshot) => {
    const childKey = childSnapshot.key;
    const childData = childSnapshot.val();
    list.push({id:childKey,...childData});
});
setEmp(list)
})
}, [])
    const fetchEmp = async () => {
        const querySnapshot = await getDocs(collection(db, 'employees'))
        var list = []
        querySnapshot.forEach((doc) => {
            var data = doc.data()
            list.push({ id: doc.id, ...data })
        })

        setEmp(list)
    }
    const handleEdit = (id) => {
        const user = emp.filter(data => data.id === id)
        // console.log(user)
          setEdit(id)
    setInput({name: user[0].name,email: user[0].email})
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        if(edit){
await update(ref(db, `employees/${edit}`),input)

        }else{
        const postListRef = ref(db, 'employees');
        const newPostRef = push(postListRef);
        set(newPostRef,input) 
}
setInput({})
    }
    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }
    const handleDelete = (id) => {
        
        remove(ref(db, `employees/${id}`))

    }

    return (

        <div className="container">
            <div className="row justify-content-center">
                <div className="col-4">
                    <h1>FORM</h1>
                    <form action="" onSubmit={handleSubmit} className='border-1'>
                        <label htmlFor="">Name : </label>
                        <input type="text" name="name" id="" className='form-control' value={input.name} placeholder='Enter Name' onChange={handleChange} />
                        <br />
                        <br />
                        <label htmlFor="">Email :</label>
                        <input type="text" name="email" id="" className='form-control' value={input.email} placeholder='Enter Email' onChange={handleChange} />
                        <br />
                        <br />
                        <button className='btn btn-primary w-100'>{edit?'UPDATE':'ADD'}</button>
                    </form>
                </div>

                <div className="col-6">
                    <h1>EMP DETAIL</h1>
                    <table border={1} className='table '>
                        <thead>
                            <tr>
                                <th>NAME</th>
                                <th>EMAIL</th>
                                <th>DELETE</th>
                                <th>EDIT</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                emp && emp.map((item) =>
                                    <tr>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>
                                            <button onClick={() => handleDelete(item.id)} className='btn btn-danger mx-1'>DELETE</button>
                                        </td>
                                           <td> <button onClick={() => handleEdit(item.id)} className='btn btn-primary'>EDIT</button></td>
                                    </tr>
                                )
                            }
                        </tbody>


                    </table>
                </div>
            </div>
        </div>

    );
}

export default Home;

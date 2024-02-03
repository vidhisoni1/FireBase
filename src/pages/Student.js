import React, { useEffect, useState } from 'react';
import { addDoc, collection, getDocs, deleteDoc,doc,updateDoc} from "firebase/firestore";
import { db } from './Firebase'

const Student = () => {
    const [emp, setEmp] = useState([])
    const [input, setInput] = useState({})
    const [edit, setEdit] = useState()
    useEffect(() => {
        fetchUsers()
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
        setInput({ name: user[0].name, email: user[0].email })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (edit) {
            const userRef = doc(db, "users", edit);
            const res = await updateDoc(userRef, input);

        } else {
            try {
                const docRef = await addDoc(collection(db, "users"), input);
                console.log("Document written with ID: ", docRef.id);
            } catch (e) {
                console.error("Error adding document: ", e);
            }

        }
        fetchUsers()
        setInput({})
    }
    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }
    const handleDelete = async(id)  => {

        await deleteDoc(doc(db, 'users', id))


fetchUsers()

    }
    const fetchUsers = async () => {
        const querySnapshot = await getDocs(collection(db, "users"));
        const temp = []
        querySnapshot.forEach((doc) => {
            temp.push({ id: doc.id, ...doc.data() })
        });
        setEmp(temp)
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
                        <button className='btn btn-primary w-100'>{edit ? 'UPDATE' : 'ADD'}</button>
                    </form>
                </div>

                <div className="col-6">
                    <h1>STUDENT DETAILS</h1>
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

export default Student;

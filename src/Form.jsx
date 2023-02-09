import React, { useState } from "react";
import Navbar from "./Navbar";
import ToDolist from "./ToDolist";

export default function FormComponet() {

    const [input, setInput] = useState("");
    const [item, setItem] = useState([]);

    const itemEvent = (e) => {
        setInput(e.target.value);
    };

    const [curval, setVal] = useState({
        username: "",
        password: "",
        email: "",
    });

    const inputval = (e) => {
        const { value, name } = e.target;
        // const name = e.target.name;
        // setVal(values => ({ ...values, [name]: value }))

        setVal((prevalue) => {
            return {
                ...prevalue,
                [name]: value,
            };
            // if (name === "username") {
            //     return {
            //         username: value,
            //         password: prevalue.password,
            //         email:prevalue.email,
            //     }
            // } else if (name === "password") {
            //     return {
            //         username: prevalue.username,
            //         password: value,
            //         email:prevalue.email,
            //     }
            // }else if (name === "email") {
            //     return {
            //         username: prevalue.username,
            //         password: prevalue.password,
            //         email:value,
            //     }
            // }else {
            //     alert("value not same")
            // }
        });
    };

    const AddItem = () => {
        setItem((olditem) => {
            return [...olditem, input];
        });
        setInput("");
    };

    const RemoveItem = () => {
        setItem([]);
    };

    const DeleteItem = (id) => {
        setItem((olditem) => {
            return olditem.filter((array, index) => {
                return index !== id;
            });
        });
    };

    const handlesub = (e) => {
        e.preventDefault();
        alert("form submitted")
    };

    return (
        <>
            < Navbar />
            <div className="container">
                <div className="form-div">
                    <h1> Username : {curval.username}</h1>
                    <h1> Password : {curval.password} </h1>
                    <h1> Email : {curval.email} </h1>
                    <form onSubmit={handlesub} className="login-form mt-5">
                        <fieldset className="fieldset-row">
                            <label className="input-label">Username</label>
                            <input type="text" name="username" className="form-input" value={curval.username} onChange={inputval}>
                            </input>
                        </fieldset>
                        <fieldset className="fieldset-row">
                            <label className="input-label">Password</label>
                            <input type="password" name="password" className="form-input" value={curval.password} onChange={inputval} />
                        </fieldset>
                        <fieldset className="fieldset-row mb-4">
                            <label className="input-label">Email</label>
                            <input type="email" name="email" className="form-input" value={curval.email} onChange={inputval} />
                        </fieldset>
                        <button type='submit' className="submit-btn" onClick={handlesub}>submit</button>
                    </form>

                    <div>
                        <label>data</label>
                        <input type="text" value={input} onChange={itemEvent} />
                        <button onClick={AddItem}>AddItem</button>
                        <ol>
                            {item.map((itemval, index) => {
                                return (
                                    <>
                                        <ToDolist
                                            key={index}
                                            id={index}
                                            text={itemval}
                                            onSelect={DeleteItem}
                                        />
                                    </>
                                )
                            })}
                        </ol>
                        <button onClick={RemoveItem}>Remove</button>
                    </div>
                </div>
            </div>
        </>
    );
};

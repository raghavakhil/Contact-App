import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const AddContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const contacts = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const checkEmail = contacts.find(
      (contact) => contact.email === email && contact
    );
    const checkPhone = contacts.find(
      (contact) => contact.phone === parseInt(phone)
    );
    if (!name || !email || !phone) {
      return toast.warning("Please fill in all the details");
    }
    checkEmail && toast.error("Email already exists");
    checkPhone && toast.error("Mobile number already exists");
    const data = {
      id: contacts[contacts.length - 1].id + 1,
      name,
      email,
      phone
    };
    dispatch({ type: "ADD_CONTACT", payload: data });
    toast.success("Employee added successfully");
    history.push("/");
  };
  return (
    <div className="container">
      <h1 className="display-5 my-5 text-center">Add Employee</h1>
      <div className="row">
        <div className="col-6 shadow mx-auto p-5">
          <form onSubmit={handleSubmit}>
            <div className="form-group p-2">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="form-group p-2">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="form-group p-2">
              <input
                type="number"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="form-group p-2">
              <input
                type="submit"
                value="Add Employee"
                className="btn btn-primary form-control"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddContact;

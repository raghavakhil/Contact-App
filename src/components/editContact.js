import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const EditContact = () => {
  const { id } = useParams();
  const contacts = useSelector((state) => state);
  const currentContact = contacts.find(
    (contact) => contact.id === parseInt(id)
  );
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (currentContact) {
      setName(currentContact.name);
      setEmail(currentContact.email);
      setPhone(currentContact.phone);
    }
  }, [currentContact]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const checkEmail = contacts.find(
      (contact) => contact.id !== parseInt(id) && contact.email === email
    );
    const checkPhone = contacts.find(
      (contact) =>
        contact.id !== parseInt(id) && contact.phone === parseInt(phone)
    );
    if (!name || !email || !phone) {
      return toast.warning("Please fill in all the details");
    }
    checkEmail && toast.error("Email already exists");
    checkPhone && toast.error("Mobile number already exists");
    const data = {
      id: parseInt(id),
      name,
      email,
      phone
    };
    dispatch({ type: "UPDATE_CONTACT", payload: data });
    toast.success("Employee updated successfully");
    history.push("/");
  };

  return (
    <div className="container">
      {currentContact ? (
        <>
          <h1 className="display-5 my-5 text-center">
            Edit Employee Details {id}
          </h1>
          <div className="row">
            <div className="col-6 shadow mx-auto p-5">
              <form onSubmit={handleSubmit}>
                <div className="form-group p-2">
                  <input
                    type="text"
                    placeholder="Name"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-group p-2">
                  <input
                    type="email"
                    placeholder="Email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group p-2">
                  <input
                    type="number"
                    placeholder="Phone Number"
                    className="form-control"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="form-group p-2">
                  <input
                    type="submit"
                    value="Update"
                    className="btn btn-dark"
                  />
                  <Link to="/" className="btn btn-danger m-2">
                    Cancel
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </>
      ) : (
        <h1 className="display-5 my-5 text-center">
          Employee Details with id {id} doesn't exist
        </h1>
      )}
    </div>
  );
};

export default EditContact;

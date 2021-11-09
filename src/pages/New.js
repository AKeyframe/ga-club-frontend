import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import { createSneak } from "../services/sneakerService"
import "./css/new.scss"
import "./css/footer.scss"


function New(props) {
  // state to hold formData
  const [newForm, setNewForm] = useState({
    name: "",
    brand: "",
    description: "",
    price: "",
    image: ""
  });

  
  const navigate = useNavigate();
  // handleChange function for form
  const handleChange = event => {
    setNewForm({ ...newForm, [event.target.name]: event.target.value });
  }

  // handle submit function for form
  const handleSubmit = event => {
    event.preventDefault();
    createSneak(newForm);
    setNewForm({
      name: "",
      brand: "",
      description: "",
      price: "",
      image: ""
    });
    navigate('/sneakers');
  }

  return (

    <div className="form">
      <h1>Add New Item Page</h1>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <input className="gredient_input"
            type="text"
            value={newForm.name}
            name="name"
            placeholder="Name"
            onChange={handleChange} />
        </div>

        <div className="field">
          <input className="gredient_input"
            type="text"
            value={newForm.brand}
            name="Brand"
            placeholder="brand"
            onChange={handleChange}/>
        </div>
        
        <div className="field">
          <input className="gredient_input"
            type="text"
            value={newForm.description}
            name="Description"
            placeholder="description"
            onChange={handleChange}
          /></div>
        <div className="field">
          <input className="gredient_input"
            type="text"
            value={newForm.price}
            name="price"
            placeholder="Price"
            onChange={handleChange}
          /></div>
        <div className="field">
          <input className="gredient_input"
            type="text"
            value={newForm.image}
            name="image"
            placeholder="Image"
            onChange={handleChange}
          /></div>
        <button id='newButton' className="blue_button" type="submit" value="Submit" >Submit</button>
      </form>
    </div>

  );
}

export default New;
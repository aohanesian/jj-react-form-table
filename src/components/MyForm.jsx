import React, {useState} from 'react';

let initialForm = {
    email: '',
    password: '',
    address: '',
    city: '',
    country: '',
    acceptRules: false,
};

function MyForm() {
    const [show, setShow] = useState(true);

    const [formData, setFormData] = useState(initialForm);

    const tableData = Object.entries(formData).map((item, index) => (
        <tr key={index}>
            <td>{item[0]}</td>
            <td>{item[1].toString()}</td>
        </tr>
    ))

    const handleInputChange = (event) => {
        const {name, value, type, checked} = event.target;
        const newValue = type === 'checkbox' ? checked : value;
        setFormData((prevState) => ({...prevState, [name]: newValue}));
    };

    const handleSubmit = (e) => {
        e.target.type === "submit" && e.preventDefault()
        setShow(!show)
    }

    return (
        <>
            {show &&
                <form name="myForm" className="mx-auto">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="email" className="col-form-label">Email</label>
                        <input type="email" name="email" className="form-control" id="email" placeholder="Email"
                               value={formData.email} onChange={handleInputChange}/>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="password" className="col-form-label">Password</label>
                        <input type="password" name="password" className="form-control" id="password"
                               placeholder="Password" value={formData.password} onChange={handleInputChange}/>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="address" className="col-form-label">Address</label>
                        <textarea type="text" className="form-control" name="address" id="address"
                                  placeholder="1234 Main St" value={formData.address}
                                  onChange={handleInputChange}></textarea>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="city" className="col-form-label">City</label>
                        <input type="text" className="form-control" name="city" id="city" placeholder="Odessa"
                               value={formData.city} onChange={handleInputChange}/>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="country" className="col-form-label">Country</label>
                        <select id="country" name="country" className="form-control" value={formData.country}
                                onChange={handleInputChange}>
                            <option>Choose</option>
                            <option value="argentina">Argentina</option>
                            <option value="ukraine">Ukraine</option>
                            <option value="china">China</option>
                        </select>
                    </div>
                    <div className="col-md-6 mb-3">
                        <div className="form-check">
                            <label className="form-check-label" htmlFor="rules">
                                <input id="rules" type="checkbox" name="acceptRules" className="form-check-input"
                                       checked={formData.acceptRules} onChange={handleInputChange}/>
                                Accept Rules
                            </label>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={(e) => handleSubmit(e)}>Sign in</button>
                </form>
            }

            {!show &&
                <>
                    <table className="table">
                        <tbody>
                        {tableData}
                        </tbody>
                    </table>
                    <button type="button" className="btn btn-primary" onClick={(e) => handleSubmit(e)}>Back</button>
                </>
            }
        </>
    );
}

export default MyForm;

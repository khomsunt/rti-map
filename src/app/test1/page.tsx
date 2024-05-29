"use client"
import React, { useState } from 'react';

const LoginForm = () => {
    const [form, setForm] = useState({
        Form: [
            { ID: "username", inputType: "text", label: "Username" },
            { ID: "password", inputType: "password", label: "Password" },
            { ID: "selectField", inputType: "select", label: "Select", options: ["option1", "option2", "option3"] }
        ]
    });

    const [formData, setFormData] = useState({
        username: '',
        password: '',
        selectField: ''
    });

    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [id]: value
        }));

        if (id === "selectField") {
            setSelectedOption(value);
        }
    };

    const renderInput = (inputType, id, options) => {
        if (inputType === 'select') {
            return (
                <select id={id} value={formData[id]} onChange={handleChange} className="border border-gray-300 rounded-md py-2 px-4 text-gray-700 leading-tight focus:outline-none">
                    <option value="">Select an option</option>
                    {options.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                    ))}
                </select>
            );
        } else {
            return (
                <input
                    id={id}
                    type={inputType}
                    value={formData[id]}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md py-2 px-4 text-gray-700 leading-tight focus:outline-none"
                />
            );
        }
    };

    let displayComponent;

    switch (selectedOption) {
        case 'option1':
            displayComponent = <div className='text-green-500'>Option 1 is selected</div>;
            break;
        case 'option2':
            displayComponent = <div className='text-green-500'>Option 2 is selected</div>;
            break;
        case 'option3':
            displayComponent = <div className='text-green-500'>Option 3 is selected</div>;
            break;
        default:
            displayComponent = <div className='text-red-500'>Please select an option</div>;
    }

    return (
        <div className="max-w-md mx-auto bg-white rounded-lg">
            <form className='border border-gray-300 rounded-md py-2 px-4 text-gray-700 leading-tight focus:outline-none mt-20 shadow-lg'>
                <div className='py-5'>
                    <div>
                        {
                            form.Form.map((row, index) => (
                                <div key={index} className="mb-4">
                                    <label className='block mb-2'>{row.label}</label>
                                    {renderInput(row.inputType, row.ID, row.options)}
                                </div>
                            ))
                        }
                    </div>
                    <div>
                        {displayComponent}
                    </div>
                    <div className="form-control mt-5">
                        <label className="cursor-pointer label">
                            <span className="label-text">Checkbox</span>
                            <input type="checkbox" defaultChecked className="checkbox checkbox-secondary" />
                        </label>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;

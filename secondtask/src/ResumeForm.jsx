import React, { useEffect, useState } from "react";

function ResumeForm() {

    // Form Data State
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        address: "",
        education: "",
        skills: "",
    });

    // Submit State
    const [submitted, setSubmitted] = useState(false);

    // Handle Input Change
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle Form Submit
    const handleSubmit = (e) => {
        e.preventDefault();

        // Trigger submit state
        setSubmitted(true);
    };

    // useEffect
    useEffect(() => {

        if (submitted) {

            // Reset Form
            setFormData({
                fullName: "",
                email: "",
                phone: "",
                address: "",
                education: "",
                skills: "",
            });

            // Reset submit state
            setSubmitted(false);
        }

    }, [submitted]);

    return (
        <div className="container">

            <h1>Resume Form</h1>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="fullName"
                    placeholder="Enter Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    value={formData.email}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="phone"
                    placeholder="Enter Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                />

                <textarea
                    name="address"
                    placeholder="Enter Address"
                    value={formData.address}
                    onChange={handleChange}
                />

                <textarea
                    name="education"
                    placeholder="Enter Education"
                    value={formData.education}
                    onChange={handleChange}
                />

                <textarea
                    name="skills"
                    placeholder="Enter Skills"
                    value={formData.skills}
                    onChange={handleChange}
                />

                <button type="submit">
                    Submit
                </button>

            </form>
        </div>
    );
}

export default ResumeForm;
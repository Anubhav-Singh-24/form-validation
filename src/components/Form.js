import React, { useState } from 'react'


const Form = () => {

    const [credentials, setCredentials] = useState({ firstName: '', lastName: '', email: '', phone: '', password: '' })
    const [visible,setVisibility] = useState(true)

    const changes = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        setVisibility(false)
    };



    return (
        <div className="flex justify-center items-center min-h-screen bg-indigo-400">
            {visible && <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96">
                <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                        First Name
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="firstName"
                        name="firstName"
                        type="text"
                        placeholder="Enter your first name"
                        required
                        value={credentials.firstName}
                        onChange={changes}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                        Last Name
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="lastName"
                        name="lastName"
                        type="text"
                        placeholder="Enter your last name"
                        required
                        value={credentials.lastName}
                        onChange={changes}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                        Phone
                    </label>
                    <div className="relative">
                        <span className="bg-gray-200 absolute inset-y-0 left-0 flex items-center pl-2 px-2">+91</span>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 pl-12 pr-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="Phone"
                            value={credentials.phone}
                            onChange={changes}
                            required
                            minLength={10}
                        />
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        required
                        value={credentials.email}
                        onChange={changes}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={credentials.password}
                        onChange={changes}
                        required
                        minLength={7}
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-indigo-400 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Sign Up
                    </button>
                </div>
            </form>}
            {!visible && <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96'>
                <h2 className="text-2xl font-bold mb-6">Details</h2>
                <p className=' text-gray-700 text-sm font-bold mb-2'>First Name: {credentials.firstName}</p>
                <p className=' text-gray-700 text-sm font-bold mb-2'>Last Name: {credentials.lastName}</p>
                <p className=' text-gray-700 text-sm font-bold mb-2'>Phone: {credentials.phone}</p>
                <p className=' text-gray-700 text-sm font-bold mb-2'>Email: {credentials.email}</p>
                <p className=' text-gray-700 text-sm font-bold mb-2'>Password: {credentials.password}</p>
            </div>}
        </div>
    )
}



export default Form

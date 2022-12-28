import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function LoginSection() {

    const [ data, setData ] = useState({
        email: "",
        password: ""
    })
    const onChange = (e) => {
        e.preventDefault();
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const submitHandler = (e) => {
        e.preventDefault()
    }
    return (
        <div className='fixed top-0 left-0 right-0 bottom-0'>
            <div className="flex justify-center items-center h-screen bg-gray-800">
                <div className="w-2/6 py-7 bg-gray-900 text-white px-8 rounded-2xl space-y-3">
                    <h1 className="text-2xl font-bold">Welcome Back!</h1>
                    <p className="font-medium text-text my-2">We are happy that you are with us!</p>
                    <form onSubmit={submitHandler}>
                        <div className="space-y-5">
                            <div className="">
                                <label htmlFor="input-email">Email</label>
                                <input
                                    type="email"
                                    id="input-email"
                                    name="email"
                                    value={data.email}
                                    onChange={onChange}
                                    placeholder="Enter email address"
                                    className="block p-2 w-full text-gray-400 bg-gray-900 rounded-md border border-gray-600 sm:text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                                />
                            </div>
                            <div className="">
                                <label htmlFor="input-password">Password</label>
                                <input
                                    type="password"
                                    id="input-password"
                                    name="password"
                                    value={data.password}
                                    onChange={onChange}
                                    placeholder="Enter password"
                                    className="block p-2 w-full text-gray-400 bg-gray-900 rounded-md border border-gray-600 sm:text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                                />
                            </div>
                        </div>
                        <button className="block bg-sky-500 w-full hover:bg-sky-400 mt-10 py-2 rounded-md">
                            Log in
                        </button>

                    </form>
                    <p className="text-gray-400 text-sm">
                        Need an account?
                        <Link to="/register" className="text-sky-500">
                            Create an account!
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LoginSection
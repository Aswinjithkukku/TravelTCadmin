import React from 'react'
import { Link } from 'react-router-dom'

function SignupSection() {
    return (
        <div className='fixed top-0 left-0 right-0 bottom-0'>
            <div className="flex justify-center items-center h-screen bg-gray-800">
                <div className="w-2/6 py-7 bg-gray-900 text-white px-8 rounded-2xl space-y-3">
                    <h1 className="text-2xl font-bold">Greetings!!!</h1>
                    <p className="font-medium text-text my-2">We are happy that you are with us!</p>
                    <form >
                        <div className="space-y-5">
                            <div className="">
                                <label htmlFor="input-name">Name</label>
                                <input
                                    type="text"
                                    id="input-name"
                                    name="name"
                                    // value={name}
                                    // onChange={(e) => setname(e.target.value)}
                                    placeholder="Enter Name "
                                    className="block p-2 w-full text-gray-400 bg-gray-900 rounded-md border border-gray-600 sm:text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                                />
                            </div>

                            <div className="">
                                <label htmlFor="input-email">Email</label>
                                <input
                                    type="email"
                                    id="input-email"
                                    name="email"
                                    // value={email}
                                    // onChange={(e) => setEmail(e.target.value)}
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
                                    // value={password}
                                    // onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter password"
                                    className="block p-2 w-full text-gray-400 bg-gray-900 rounded-md border border-gray-600 sm:text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                                />
                            </div>
                        </div>
                        <button className="block bg-sky-500 w-full hover:bg-sky-400 mt-10 py-2 rounded-md">
                            SignUp
                        </button>

                    </form>
                    <p className="text-gray-400 text-sm">
                        Already have an account?
                        <Link to="/login" className="text-sky-500">
                            login to account!
                        </Link>
                    </p>
                </div>
            </div >
        </div >
    )
}

export default SignupSection
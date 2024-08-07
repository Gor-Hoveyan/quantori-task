import React, { useState } from 'react';

export default function Form() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [success, setSuccess] = useState<string>('');

    function login(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault();
            fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: email,
                    password: password,
                })
            }).then(res => res.json()).then((res: any) => {
                if(res.message) {
                    setError(res.message);
                    setSuccess('')
                } else {
                    console.log(res)
                    setError('');
                    setSuccess('Success');
                }
            })
    }


    function cancel(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault();
        setEmail('');
        setPassword('');
        setError('');
        setSuccess('');
    }

    return (
        <div className='flex w-screen h-[calc(100%)] items-center justify-center absolute'>
            <form className='bg-white text-primary z-10 h-fit w-fit px-5 py-7 rounded-xl'>
                <h2 className='text-2xl font-bold mb-2'>Login</h2>
                <div>
                    <label htmlFor='email' className='font-bold bg-white  text-[11px]  text-gray-90 relative px-1  top-2 left-3 w-auto'>
                        Email
                    </label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)}
                        type='email' name='email' id='email' className='h-8 text-10 py-55-rem border-primary border-2 rounded-lg0 block w-full p-2.5'
                    />
                </div>
                <div>
                    <label htmlFor='password' className='font-bold bg-white  text-[11px]  text-gray-90 relative px-1  top-2 left-3 w-auto'>
                        Password
                    </label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)}
                        type='password' name='password' id='password' className='h-8 text-10 py-55-rem border-primary border-2 rounded-lg0 block w-full p-2.5'
                    />
                </div>
                <p className='my-2 text-green-500'>{success && success}</p>
                <p className='my-2 text-red-500'>{error && error}</p>
                <div className='text-right mt-10'>
                    <button onClick={(e) => cancel(e)} className='border-2 border-primary mr-2 bg-white px-4 py-1 text-primary rounded-lg'>
                        Cancel
                    </button>
                    <button onClick={(e) => login(e)} className='border-2 border-primary bg-primary px-4 py-1 text-white rounded-lg'>
                        Login
                    </button>
                </div>

            </form>
        </div>
    )
}
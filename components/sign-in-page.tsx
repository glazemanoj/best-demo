'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function SignInPage() {
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSignedUp, setIsSignedUp] = useState(false)

  const handleSignUp = (e) => {
    e.preventDefault()
    // Simulate a successful sign-up
    setTimeout(() => {
      setIsSignedUp(true)
      router.push('/todo') // Redirect to "/todo"
    }, 1000)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-500">
      <div className="bg-white bg-opacity-20 p-8 rounded-xl backdrop-blur-md shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">Sign Up</h1>
        {!isSignedUp ? (
          <form onSubmit={handleSignUp} className="space-y-4">
            <div>
              <label htmlFor="name" className="text-white">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="mt-1 bg-white bg-opacity-20 border-0 focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-300 w-full p-2 rounded"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-white">Email Id</label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 bg-white bg-opacity-20 border-0 focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-300 w-full p-2 rounded"
              />
            </div>
            <div>
              <label htmlFor="password" className="text-white">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 bg-white bg-opacity-20 border-0 focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-300 w-full p-2 rounded"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
            >
              Sign Up
            </button>
          </form>
        ) : (
          <div className="text-white text-center animate-fade-in">
            <p className="text-2xl font-bold mb-4">You are successfully signed up!</p>
            <p>Welcome, {name}!</p>
          </div>
        )}
      </div>
    </div>
  )
}

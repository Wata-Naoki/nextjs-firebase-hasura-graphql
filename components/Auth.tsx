import firebase from 'firebase'
import { useFirebaseAuth } from '../hooks/useFirebaseAuth'
import {
  ChevronDoubleRightIcon,
  SwitchVerticalIcon,
} from '@heroicons/react/solid'
import Link from 'next/link'
export const Auth = () => {
  const user = firebase.auth().currentUser //現在のユーザー情報誌れる

  const {
    isLogin,
    email,
    password,
    pwChange,
    emailChange,
    authUser,
    toggleMode,
  } = useFirebaseAuth()
  return (
    <>
      <form
        action=""
        onSubmit={authUser}
        className="mt-8 flex justify-center items-center flex-col"
      >
        <label>Email:</label>
        <input
          type="text"
          className="my-3 px-3 border border-gray-300"
          placeholder="email ?"
          onChange={emailChange}
        />
        <label>Password:</label>
        <input
          type="password"
          className="my-3 px-3 border border-gray-300"
          placeholder="password ?"
          value={password}
          onChange={pwChange}
        />
        <button
          disabled={!email || !password}
          type="submit"
          className="disabled:opacity-40 mt-5 py-1 px-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded focus:outline-none"
        >
          {isLogin ? 'Login' : 'Register'}
        </button>
        <SwitchVerticalIcon
          className="my-5 h-5 w-5 text-blue-500 cursor-pointer"
          onClick={toggleMode}
        />
        {user && (
          <Link href={'/tasks'}>
            <div className="flex items-center cursor-pointer my-3">
              <ChevronDoubleRightIcon className="h-5 w-5 x-1 text-blue-500 " />
              <span>to tasks page</span>
            </div>
          </Link>
        )}
      </form>
    </>
  )
}

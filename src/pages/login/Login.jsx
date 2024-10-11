import React from 'react';
import { useLoaderData, Form, redirect, useActionData, useNavigation} from 'react-router-dom';
import {loginUser} from '../../api'
import {mutateResponseToRedirect} from '../../utils'
import './Login.css';
export function loader({request}){
    const url = new URL(request.url)
    const isAuth = url.searchParams.get("auth") === "true" ? true : null;
    return isAuth
}
export async function action({request}){
    const formData = Object.fromEntries(await request.formData());
    const redirectParam = new URL(request.url).searchParams.get("redirectTo") || '/'
    console.log(formData)
    const {email, password} = formData;
    try {
        const data = await loginUser(formData)
        console.log(data)
        console.log(`Email: ${email}, Passowrd : ${password}`)
        console.log("Action Function here!")
        localStorage.setItem("isLoggedIn",true)
        return mutateResponseToRedirect(redirectParam)
    }catch(err) {
        return err.message
    }
}
const Login = () => {
    const navigation = useNavigation()
    const errorMessage = useActionData()
    const authMessage = useLoaderData()
    return (
        <main className="login-container">
            {authMessage && <h3>You must log in first.</h3>}
            <h1>Sign in to your account</h1>
            <p>Use our fake account: </p>
            <small>b@b.com</small>
            <small>p123</small>
            <Form method="post" replace>
                <label>
                    <input
                        placeholder='Email Adress'
                        type="email"
                        name="email"
                        autoComplete='username'
                        required 
                        />
                </label>
                <label>
                    <input 
                        placeholder='Password'
                        type="password" 
                        name="password"
                        autoComplete='current-password'
                        required 
                    />
                </label>
                <button disabled={navigation.state === "submitting"} type="submit">
                    {navigation.state === "submitting" ? "Logging in..." : "Log in"}
                </button>
            </Form>
            {errorMessage && <h3>{errorMessage}</h3> }
            <p className="signup-prompt">
                Don’t have an account? <a href="#">Create one now</a>
            </p>
        </main>
    );
};

export default Login;

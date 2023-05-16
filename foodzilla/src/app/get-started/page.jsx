"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import Logo from '../../../components/welcome_page.jsx'; 

export default function GetStartedPage() {
const router = useRouter();

const handleNewUserClick = () => {
    // navigate to a new user registration page
    router.push("/register");
};

const handleForgotPasswordClick = () => {
    // navigate to a password reset page
    router.push("/reset-password");
};

return (
    <div>
    <Logo logo="../foodzilla_logo.svg" logoAlt="../Foodzilla logo" />
    
    <h1>Get Started</h1>

    <form>
        <label>
        Username:
        <input type="text" name="username" />
        </label>

        <label>
        Password:
        <input type="password" name="password" />
        </label>

        <button type="submit">Log In</button>
    </form>

    <a href="#" onClick={handleNewUserClick}>New User</a>
    <br />
    <a href="#" onClick={handleForgotPasswordClick}>Forgot your password?</a>
    </div>
);
}

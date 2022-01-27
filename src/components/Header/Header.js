/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div class="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">
            <div class="px-2 mx-2 navbar-start">
                <span class="text-lg font-bold">
                    EndGame Travel
                </span>
            </div>
            <div class="hidden px-2 mx-2 navbar-center lg:flex">
                <div class="flex items-stretch">
                    <a class="btn btn-ghost btn-sm rounded-btn">
                        <Link className="m-2 text-decoration-none" to="/home">Home</Link>
                    </a>
                    <a class="btn btn-ghost btn-sm rounded-btn">
                        <Link className="m-2 text-decoration-none" to="/travelblog">Travel Blog</Link>
                    </a>
                    <a class="btn btn-ghost btn-sm rounded-btn">
                        <Link className="m-2 text-decoration-none" to="/dashboard">DashBoard</Link>
                    </a>
                    <a class="btn btn-ghost btn-sm rounded-btn">
                        <Link className="m-2 text-decoration-none" to="/login">Login</Link>
                    </a>
                </div>
            </div>
            <div class="navbar-end">
                <button class="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                    </svg>
                </button>
                <button class="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </button>
            </div>
            <div class="flex-none">
                <div class="avatar">
                    <div class="rounded-full w-10 h-10 m-1">
                        <img src="https://i.pravatar.cc/500?img=32" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
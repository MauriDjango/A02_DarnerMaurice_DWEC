import React, { useState, useEffect } from 'react';

const Cookies = () => {
    const [userData, setUserData] = useState({
        name: '',
        address: '',
        age: '',
        profession: '',
    });

    // Load user data from cookies
    useEffect(() => {
        const cookieUserData = getCookies();
        if (cookieUserData) {
            setUserData(cookieUserData);
        }
    }, []);

    // Save user data to cookies and localStorage
    const saveUserData = () => {
        setCookies(userData);
        localStorage.setItem('userData', JSON.stringify(userData));
    };

    // Clear user data from cookies and localStorage
    const clearUserData = () => {
        removeCookies();
        localStorage.removeItem('userData');
        setUserData({
            name: '',
            address: '',
            age: '',
            profession: '',
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value,
        });
    };

    return (
        <div>
            <h2>User Data Storage</h2>
            <div>
                <label>Name:</label>
                <input type="text" name="name" value={userData.name} onChange={handleChange} />
            </div>
            <div>
                <label>Address:</label>
                <input type="text" name="address" value={userData.address} onChange={handleChange} />
            </div>
            <div>
                <label>Age:</label>
                <input type="text" name="age" value={userData.age} onChange={handleChange} />
            </div>
            <div>
                <label>Profession:</label>
                <input type="text" name="profession" value={userData.profession} onChange={handleChange} />
            </div>
            <button onClick={saveUserData}>Save</button>
            <button onClick={clearUserData}>Clear</button>
            <div>
                <h3>User Data:</h3>
                <pre>{JSON.stringify(userData, null, 2)}</pre>
            </div>
        </div>
    );
};

// Cookie handling functions
const getCookies = () => {
    const cookies = document.cookie.split('; ');
    const cookieData = {};
    cookies.forEach((cookie) => {
        const [name, value] = cookie.split('=');
        cookieData[name] = decodeURIComponent(value);
    });
    return cookieData.name ? cookieData : null;
};

const setCookies = (data) => {
    document.cookie = `name=${encodeURIComponent(data.name)}`;
    document.cookie = `address=${encodeURIComponent(data.address)}`;
    document.cookie = `age=${encodeURIComponent(data.age)}`;
    document.cookie = `profession=${encodeURIComponent(data.profession)}`;
};

const removeCookies = () => {
    document.cookie = 'name=; expires=Thu, 01 Jan 1970 00:00:00 UTC';
    document.cookie = 'address=; expires=Thu, 01 Jan 1970 00:00:00 UTC';
    document.cookie = 'age=; expires=Thu, 01 Jan 1970 00:00:00 UTC';
    document.cookie = 'profession=; expires=Thu, 01 Jan 1970 00:00:00 UTC';
};

export default Cookies;

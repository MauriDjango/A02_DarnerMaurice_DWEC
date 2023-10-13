import React, { useState } from 'react';

const NewWindow = () => {
    const [popup, setPopup] = useState(null);
    const [width, setWidth] = useState(400);
    const [height, setHeight] = useState(400);

    const openPopup = () => {
        if (popup && !popup.closed) {
            popup.close();
        }

        const left = Math.floor(Math.random() * (window.innerWidth - width));
        const top = Math.floor(Math.random() * (window.innerHeight - height));

        const newPopup = window.open('', 'NewWindow', `width=${width},height=${height},left=${left},top=${top}`);
        setPopup(newPopup);

        if (width <= 160 && height <= 160) {
            expandPopup();
        } else {
            shrinkPopup();
        }
    };

    const shrinkPopup = () => {
        if (width <= 160 && height <= 160) {
            expandPopup();
            return;
        }
        setWidth(width - 40);
        setHeight(height - 40);
        popup.resizeTo(width, height);
        setTimeout(shrinkPopup, 1000);
    };

    const expandPopup = () => {
        if (width >= 400 && height >= 400) {
            return;
        }
        setWidth(width + 40);
        setHeight(height + 40);
        popup.resizeTo(width, height);
        setTimeout(expandPopup, 1000);
    };

    return (
        <div>
            <button onClick={openPopup}>Open Resizable Popup</button>
        </div>
    );
};

export default NewWindow;

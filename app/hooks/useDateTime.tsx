'use client'

import { useEffect, useState } from "react";

const useDateTime = () => {
    const [dateTime, setDateTime] = useState({
        date: '',
        time: '',
    });

    useEffect(() => {
        const updateDateTime = () => {
            const now = new Date();
            setDateTime({
                date: now.toLocaleDateString('fr-FR', {
                    day: 'numeric',  // "30"
                    month: 'short',  // "Sep"
                    year: 'numeric', // "2024"
                }),
                time: now.toLocaleTimeString('en-US', {
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: true,  // 12-hour format with AM/PM
                }),
            });
        };

        // Update every second
        updateDateTime();
        const interval = setInterval(updateDateTime, 1000);

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    return dateTime;
};

export default useDateTime;

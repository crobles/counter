import React, { useEffect, useState } from 'react';

const Counter = props => {

    const {start, end, duration} = props.data
    const [number, setMoney] = useState(0);

    useEffect(() => {

        let range = end - start;
        let minTimer = 50;
        let stepTime = Math.abs(Math.floor(duration / range));
        stepTime = Math.max(stepTime, minTimer);
        let startTime = new Date().getTime();
        let endTime = startTime + duration;
        let timer;

        const run = () => {
            let now = new Date().getTime();
            let remaining = Math.max((endTime - now) / duration, 0);
            let value = Math.round(end - (remaining * range));
            const formatterPeso = new Intl.NumberFormat('es-CL', {
                style: 'currency',
                currency: 'CLP',
                minimumFractionDigits: 0
            });
            setMoney(formatterPeso.format(value));
            if (value === end) {
                clearInterval(timer);
            }
        }

        timer = setInterval(run, stepTime);
        run();

        return () => clearInterval(timer);

    }, []);

    return (

        <p className="counter">{number}</p>
    );
}
export default Counter;
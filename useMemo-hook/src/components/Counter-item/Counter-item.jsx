import {useEffect, useState} from "react";

const CounterItem = ({ counterGenerate }) => {
    const [item, setItem] = useState([])

    useEffect(() => {
        const newItem = counterGenerate()
        setItem(newItem)
        console.log('Render')
    }, [counterGenerate]);

    return (
        <div className="counter-item">
            <ul>
                {item.map(item => <li key={item}>{item}</li>)}
            </ul>
        </div>
    )
}

export default CounterItem
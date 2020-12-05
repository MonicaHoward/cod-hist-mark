import React, {useState, useEffect} from 'react';

const Data = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const URL = 'https://www.dallasopendata.com/resource/adn6-n59j.json'
        fetch(URL)
            .then(res => res.json())
            .then(markers =>console.log(markers))
            .then(markers => {setData(markers)})
    }, [])

    return(
        <div>
            <h1>Data</h1>
        </div>
    )
}
export default Data;
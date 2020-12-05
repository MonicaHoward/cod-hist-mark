import React, {useState, useEffect} from 'react';
import CardList from '../components/CardList';

const Data = () => {
    const [appState, setAppState] = useState({
        data: []
    })

    useEffect(() => {
        const URL = 'https://www.dallasopendata.com/resource/adn6-n59j.json'
        fetch(URL)
            .then(res => res.json())
            .then((data) => {
                setAppState({data: data})
            })
    }, [setAppState])

    return(
        <div>
            <h1>Data</h1>
            <CardList data={appState.data}/>
        </div>
    )
}
export default Data;
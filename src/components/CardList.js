import React from 'react';
import Card from './Card'

const CardList = ({data}) => {
    return(
        <div class="mw9 center ph3-ns">
            <div class="cf ph2-ns">
            {
                data.map((marker, k) => {
                    return(
                        <Card 
                            key={k}
                            title={data[k].title}
                            address={data[k].address}
                            moreInfo={data[k].marker_text}
                            type={data[k].classification}
                            yearEstablished={data[k].year}
                        
                        />
                    )
                })
            }
            </div>
        </div>
    ) 
}
export default CardList;
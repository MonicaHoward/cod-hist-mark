import React from 'react';

const Card = ({key, title, address, moreInfo, type, yearEstablished, markerText}) => {
    return(
        <div className="fl w-100 w-25-ns pa2">
            <div class="outline bg-white pv4">
            <article className=" ">
                <div className="tc">
                    <p className="ttu">{type}</p>
                    <h1 className="f5 f4-ns fw6 mid-gray">{title}</h1>
                    <h2 className="f6 gray fw2 ttu tracked">{address}</h2>
                    <hr className="mw3 bb bw1 b--black-10"/>
                </div>
                <p className="lh-copy measure center f6 black-70">{moreInfo}</p>
                <h5>Year Established: {yearEstablished}</h5>
            </article>

            </div>
        </div>
        
    )
}
export default Card;
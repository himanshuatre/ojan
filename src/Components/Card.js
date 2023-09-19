import React from 'react'
function Card(props) {
    
    return (
        <>
            <div class="card" style={{width: "30%"}}>
                <img class="card-img-top" src={props.image} alt="Card image" />
                <div class="card-body">
                    <h4 class="card-title">John Doe</h4>
                    <p class="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                    <a href="#" class="btn btn-primary">See Profile</a>
                </div>
            </div>
        </>
    )
}

export default Card

import space from "./../space.png"

export function Card(){


    return (

        <div className="col">
        <div class="card" >
            <img src={space} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">More</a>
            </div>
            </div>
        </div>

    )
}
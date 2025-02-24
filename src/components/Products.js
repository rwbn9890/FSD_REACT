
import { Card } from "./Card"

export function Products(){

    let arr =  [ 1, 2, 3, 4, 5, 7, 8, 9, 10]

    return (
        <div className="container my-5 pt-5" >
            <div className="row row-cols-4 g-3">
                {
                    arr.map(ele => <Card />)
                }
            </div>
        </div>
    )
}
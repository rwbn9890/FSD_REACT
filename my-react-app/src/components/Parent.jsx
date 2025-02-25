

export function Parent({props}){

    return (
        <div>
            {
                props.map(ele => <h1>{ele}</h1>)
            }
        </div>
    )
}
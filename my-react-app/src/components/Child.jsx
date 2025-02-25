

export function Child({props}){
    const { name, sirname, loc} = props;
    return (
        <div>
            <h2>{name}</h2>
            <h2>{sirname}</h2>
            <h2>{loc}</h2>
        </div>
    )
}
export default function MealDetailsPage({params}){
    
    console.log(params)
    return(
        <h1>
    {params.mealSlug}
        </h1>
    )
}
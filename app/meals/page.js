import Link from "next/link"
import classes from "./page.module.css"
import MealGrid from "@/component/meal/meal-grid"
import { getMeals } from "@/lib/meals"
import { Suspense } from "react"


export const metadata = {
    title: 'All Meals',
    description: 'Browse the delicious meal share by our vibrant community.',
  };

async function Meals(){
    const meals = await getMeals()
    
    return <MealGrid meals={meals}/>
}


export default  function MealsPage(){

    return (
        <>
        <header className={classes.header}>
        <h1>
            Delicious meals, created 
            <span className={classes.highlight}>
                by You
            </span>
        </h1>
        <p>Choose Your favorite recipe and cook it yourself. It is easy and fun.</p>
        <p className={classes.cta}>
        <Link href="meals/share">
            Share your favorite recipe. 
        </Link>
        </p>
        </header>
        <main className={classes.main}>
        <Suspense fallback={<p className={classes.loading}>Fething meals...</p>}>
        <Meals/>
        </Suspense>
        </main>
        </>
    )
    
}

        
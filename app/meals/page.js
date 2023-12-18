import Link from "next/link"
import classes from "./page.module.css"
import MealGrid from "@/component/meal/meal-grid"
import { getMeal } from "@/lib/meals"
export default async function MealsPage(){

    const meals = await getMeal()

    return (
        <>
        <header className={classes.header}>
        <h1>
        Delicious meals, created <span className={classes.highlight}>by You</span>
        </h1>
        <p>Choose Your favorite recipe and cook it yourself. It is easy and fun.</p>
        <p className={classes.cta}>
        <Link href="meals//share">
       Share your favorite recipe. 
        </Link>
        </p>
        </header>
        <main className={classes.main}>
        <MealGrid meals={meals}/>
        </main>
        </>
    )
}
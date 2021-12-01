import AvailableMeals from "./AvaibleMeals"
import { Fragment } from "react"
import MealsSummary from "./MealsSummary"

const Meals = () => {
  return <Fragment>
    <MealsSummary />
    <AvailableMeals />
  </Fragment>
}

export default Meals
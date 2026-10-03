export default function Main() {
    const ingredients = ["Chicken", "Oregano", "Tomatoes"]
    
    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))
    
    /**
     * Challenge:
     * Add an `onSubmit` event listener on the form. Have the function
     * simply console.log("Form submitted!") for now
     */
    function handleSubmit(e) {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const newIngredient = formData.get("ingredient")
        console.log(newIngredient)
    }

    return (
        <main>
            <form onSubmit={handleSubmit} className="add-ingredient-form">
                <input 
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            <ul>
                {ingredientsListItems}
            </ul>
        </main>
    )
}
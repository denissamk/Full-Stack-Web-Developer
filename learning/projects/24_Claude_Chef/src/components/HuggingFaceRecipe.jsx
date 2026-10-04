import Markdown from 'react-markdown'

export default function HuggingFaceRecipe(props) {
    return (
        <section className='suggested-recipe-container'>
            <h2>Chef Denis Recommends:</h2>
            <Markdown>{props.recipe}</Markdown>
        </section>
    )
}
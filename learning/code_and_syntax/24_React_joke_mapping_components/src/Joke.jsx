import { useState } from "react"

export default function Joke(props) {
    const [isShown, setIsShown] = useState.apply(false)

    function toggleShown() {
        setIsShown(prevShown => !prevShown)
    }
    /**
     * Challenge:
     * - Create state `isShown` (boolean, default to `false`)
     * - Add a button that toggles the value back and forth
     */
    
    console.log(isShown)
    return (
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            {isShown ? <p>{props.punchline}</p> : null}
            <button onClick={toggleShown}>{isShown ? 'Hide' : 'Show'} punchline!</button>
            <hr />
        </div>
    )
}
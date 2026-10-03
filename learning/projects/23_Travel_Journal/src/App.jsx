import data from "./data"
import Header from "./components/Header"
import Entry from "./components/Entry"

export default function App() {
    const entryElements = data.map(entry => <Entry 
                                                key={entry.id}
                                                // entry={entry}
                                                {...entry}
                                            />
                          )
    return <>
               <Header />
               <main className="container">{entryElements}</main>
           </>
}
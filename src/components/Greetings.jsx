import React from 'react'

    const greetingText = (lang) => {
        if (lang === 'de') {
            return 'Hallo'
        } else if ( lang === 'es') {
            return 'Hola'
        } else if ( lang === 'fr') {
            return 'Bonjour'
        } else {
            return 'Hello'
        }
    }


const Greetings = (props) => {
    return (
        <div className="greeting col-12 col-sm-3"> <strong>{greetingText(props.lang)}</strong> {props.children}!</div>
    )
}
export default Greetings
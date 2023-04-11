import Button from './evento/Button'


function Evento() {
    
    function meuEvento() {
        console.log('Opa! Fui ativado')
    }

    function segundoEvento() {
        console.log('Ativando o 2º evento.')
    }
    
    return(
        <div>
            <p>Clique para desparar o evento:</p>
            <Button event={meuEvento} text="Primeiro Evento"/>
            <Button event={segundoEvento} text="Segundo Evento"/>
        </div>
    )
}

export default Evento





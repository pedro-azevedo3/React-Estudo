import {useState} from 'React'

function Condicional() {

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(e) {
        e.preventDefault()
        setUserEmail(email)
    }

    function limparEmail() {
        setUserEmail('')
    }

    return (
        <div>
            <h2>Cadastre o seu e-mail</h2>
            <form>
                <input type="email" placeholder='Digite o seu e-mail...' onChange={(e) => setEmail(e.target.value)}/>
                <button type="submit" onClick={enviarEmail}>Enviar e-mail</button>
                {userEmail && (
                    <div>
                        <p>
                             O e-mail do usuário é: {userEmail}
                             <button onClick={limparEmail}>Limpar e-mail</button>
                        </p>
                    </div>
                )}
            </form>
        </div>
    )

}

export default Condicional
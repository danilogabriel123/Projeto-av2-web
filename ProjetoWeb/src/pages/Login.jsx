import { useState } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa"
import "./Login.css"

function Login() {
  const [mostrarSenha, setMostrarSenha] = useState(false)

  return (
    <div className="tela-login">
      <div className="caixa-login">

        <h1>Login</h1>
        <p>Entre com seu usuário e senha</p>

        <div className="campo">
          <label htmlFor="email">E-mail:</label>
          <input
            id="email"
            type="email"
            placeholder="Digite seu e-mail"
          />
        </div>

        <div className="campo">
          <label htmlFor="senha">Senha:</label>

          <div className="senha">
            <input
              id="senha"
              type={mostrarSenha ? "text" : "password"}
              placeholder="Digite sua senha"
            />

            <button
              type="button"
              onClick={() => setMostrarSenha(!mostrarSenha)}
              className="botao-senha"
            >
              {mostrarSenha ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>

        <button className="botao-entrar">Entrar</button>

      </div>
    </div>
  )
}

export default Login
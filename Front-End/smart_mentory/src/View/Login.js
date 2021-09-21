import React from 'react';
import '../CSS/ViewLogin.css' 
import LogoIST from '../Image/Logo_IST_ azul.png'
import { AuthContext } from '../Routes/MainContext';


class Login extends React.Component {
    static contextType = AuthContext
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            senha: '',
        }
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeSenha = this.handleChangeSenha.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChangeEmail(event){
        this.setState({email: event.target.value})
    }
    
    handleChangeSenha(event){
        this.setState({senha: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault();
    }
    
    render() {
        const { user, setUser } = this.context
        console.log(user)
        return (
                <body>
                    <div className="container-primary">
                        <div className="container-login">
                            <div className="container-image-login">
                                <img src={LogoIST} alt="Logo IST" width="80%" height="55%"/>
                            </div>
                            <div className="container-form">
                                <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                                        <input required type="email" className="form-control " id="email" placeholder="Email" onChange={this.handleChangeEmail} />
                                        <input required type="password" className="form-control " id="password" placeholder="Senha" onChange={this.handleChangeSenha}/>
                                        <input className="btn button" type="submit" value="ACESSAR" onClick={() => {
                                            const newUser = {
                                                email: this.state.email,
                                                senha: this.state.senha
                                            }
                                            setUser(newUser)
                                        }} />
                                </form>
                            </div>
                        </div>
                    </div>
                </body>
        );
    }
};

export default Login;

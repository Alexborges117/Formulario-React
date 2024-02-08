import { useState } from "react";
import "./MyForm.css";
const MyForm = ({userName, userEmail}) => {
    // 3 - gerenciamento de dados
    const [name, setName] = useState(userName);
    const [email, setEmail] = useState(userEmail);
    const [bio, setBio] = useState("")
    const [role, setRole] = useState("");

    const handleName = (e) => {
        setName(e.target.value)
    };

    // envio de form
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name,email,bio,role);

        // * limparform
        setName("");
        setEmail("");
        setBio("");
        setRole("");
            
    }

    console.log(name, email, bio);



  return (
    <div>
        {/* - Criação de form */}
        {/* Criação de formulario */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name="name" placeholder="Digite o seu nome" onChange={handleName}
                 // 6- controlled input
                 value={name || ""}/>
            </div>
            {/* 2- Label envolvendo Input */}
            <label>
                <span>E-mail:</span>
                <input type="text" name="email" placeholder="Digite o seu e-mail"onChange={(e) => setEmail(e.target.value)}
                // 6- controlled input
                value={email || ""} />
            </label>
            {/*8 - imput area textarea */}
            <label>
                <span>Bio:</span>
                <textarea name="bio" placeholder="descrição do usario" onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
            </label>
            {/*9 - Select */}
            <label>
                <span>Função do sistema</span>
                <select name="row" onChange={(e) => setRole(e.target.value)} value={role}>
                    <option value="user">Usuário</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Admin</option>
                </select>
            </label>
            <input type="submit" value="Enviar" />
        </form>
        </div>
  )
}

export default MyForm
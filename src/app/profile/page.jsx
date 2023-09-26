import React from "react";
import Profile from "../components/Profile";



const UserProfile = () => {

    
    const user = {
        name: 'Matheus felipe',
        idade: 25,
        altura: 1.93,
        Pedominante: 'Esquerdo',
        Posiçao: 'Atacante',
        nascionalidade: 'Brasileira',



    };
    
    return (

        
        <div>
            <h1>Detalhamento de Jogador</h1>
            <Profile user={user} />
            
        
        </div>
    );
};

export default UserProfile;

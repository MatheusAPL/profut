// components/Profile.js
import React from 'react';

const Profile = ({ user }) => {
  return (
    <div>
      <h1>Perfil de {user.name}</h1>
      <p>Idade: {user.idade}</p>
      <p>Altura: {user.altura}</p>
      <p>Pé Dominante: {user.Pedominante}</p>
      <p>Posição: {user.Posiçao}</p>
      <p>Nascionalidade: {user.nascionalidade}</p>
    </div>
  );
};

export default Profile;

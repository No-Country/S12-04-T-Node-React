import { useState } from 'react';
import img from '../assets/images/Group8.svg';
import { Link } from 'react-router-dom';

const initialValues = {
  username: '',
  password: '',
}
const Login = () => {
  const [dataUser, setDataUser] = useState(initialValues);
  // const {error, setError} = useState({});
  
  // const validate = () => {
  //   let errorsList = {};

  //   if (!dataUser.username)
  //     errorsList = { ...errorsList, username: "Campo obligatorio" };
  //   else if (dataUser.username.length < 4)
  //     errorsList = {
  //       ...errorsList,
  //       username: "Debe tener al menos 4 caracteres",
  //     };

  //   return errorsList;
  // };
  const handleData = (e) => {
    e.preventDefault();
    console.log(dataUser);
  }
  return (
    <>  
      <img src={img} alt="img" className="w-[10rem] mx-auto pt-4"/>
      <h1 className="text-7xl font-normal text-center my-4">Bienvenido</h1>
      <h3 className='text-center text-3xl font-bold my-4' style={{fontFamily: 'SF Pro Display'}}>Iniciar Sesion</h3>
      <form action="" onSubmit={handleData} className="flex flex-col sm:w-1/2  justify-around p-4 mx-auto ">
        
        <input 
        style={{backgroundColor: 'rgba(118, 120, 118, 0.46)', borderRadius: '10px'}}
        className='min-w-[12rem] ps-2 text-2xl py-2 mb-4 placeholder:bolder placeholder:text-black placeholder:text-900'
        type="text" 
        placeholder="Usuario..."
        name="username"
        value={dataUser.email}
        onChange={(e) => setDataUser({ ...dataUser, username: e.target.value })} 
        />

        

        <input 
        style={{backgroundColor: 'rgba(118, 120, 118, 0.46)',
        borderRadius: '10px'}}
        className='min-w-[12rem] ps-2 text-2xl py-2 mt-4 placeholder:bolder placeholder:text-black placeholder:text-900 '
        type="password" 
        name="password"
        placeholder='Contraseña...'
        value={dataUser.password} 
        onChange={(e) => setDataUser({ ...dataUser, password: e.target.value })}
        />
        <Link to="/" className="text-xl font-bold mt-4" style={{fontFamily: 'SF Pro Display'}}>¿Olvidaste tu contraseña?</Link>

        <p className='text-xl font-bold mt-4 text-center'>No tienes un usuario?</p>
        <Link to="/register" className="text-xl font-bold mb-4 text-center underline" style={{fontFamily: 'SF Pro Display'}}>Registrate</Link>




        <button 
        type="submit" 
        className="sm:w-1/2 mx-auto text-white font-bold tracking-wider py-5 px-4 rounded"
        style={{backgroundColor: '#8D2607',
        borderRadius: '10px'}}>
          Iniciar Sesion</button>


      </form>
    </>
  )
}

export default Login
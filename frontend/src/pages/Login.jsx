import { useState } from 'react';
import img from '../assets/images/Group8.svg';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const initialValues = {
  username: '',
  password: '',
}

const Login = () => {
  // const url = useLocation();
  // // const ruta = url.state;
  // console.log('ruta', url);
  const [dataUser, setDataUser] = useState(initialValues);
  // const {error, setError} = useState({});
  
  const validate = () => {
    let errorsList = {};

    if (!dataUser.username)
      errorsList = { ...errorsList, username: "Campo obligatorio." };
    else if (dataUser.username.length < 4 || dataUser.username.length > 8)
      errorsList = {
        ...errorsList,
        username: "Debe tener como minimo 4 caracteres y 8 maximo.",
      };
      if(!dataUser.password)
      errorsList = { ...errorsList, password: "Campo obligatorio." };
      else if(dataUser.password.length < 4 || dataUser.password.length > 8)
      errorsList = {
        ...errorsList,
        password: "Debe tener como minimo 4 caracteres y 8 maximo.",
      };

    return errorsList;
  };
  const handleData = (e) => {
    e.preventDefault();
    if(Object.keys(validate()).length === 0){
      console.log(dataUser);
    }else{
      alert('Verifique los Campos')
    }
  }
  return (
    <>  
    <div className='bg-[#F9E9E7] h-screen flex flex-col bg-center items-center justify-center '  >

      <img src={img} alt="img" className="w-[11rem] mx-auto "/>
      <h1 className="text-3xl font-normal text-center my-4">BIENVENIDO</h1>
      <h3 className='text-center text-2xl font-bold mb-2' style={{fontFamily: 'SF Pro Display'}}>Iniciar Sesion</h3>
      <form action="" onSubmit={handleData} className="flex flex-col sm:w-1/2  justify-around mx-auto ">
        
        <input 
        style={{backgroundColor: 'rgba(118, 120, 118, 0.46)', borderRadius: '10px'}}
        className='min-w-[12rem] ps-2 text-2xl py-2  placeholder:bolder placeholder:text-black placeholder:text-900'
        type="text" 
        placeholder="Usuario..."
        name="username"
        value={dataUser.email}
        onChange={(e) => setDataUser({ ...dataUser, username: e.target.value })} 
        
        autoFocus       />
        <small className='text-red-600 mt-2'>{validate().username}</small>

        

        <input 
        style={{backgroundColor: 'rgba(118, 120, 118, 0.46)',
        borderRadius: '10px'}}
        className='min-w-[12rem] ps-2 text-2xl py-2 mt-5 placeholder:bolder placeholder:text-black placeholder:text-900 '
        type="password" 
        name="password"
        placeholder='Contraseña...'
        value={dataUser.password} 
        
        onChange={(e) => setDataUser({ ...dataUser, password: e.target.value })}
        />
        <small className='text-red-600 mt-2'> {validate().password}</small>
        <Link to="/" className="text-xl font-bold mt-2" style={{fontFamily: 'SF Pro Display'}}>¿Olvidaste tu contraseña?</Link>

        <p className='text-xl font-bold mt-2 text-center'>No tienes un usuario?</p>
        <Link to="/register" className="text-xl font-bold mb-4 text-center underline" style={{fontFamily: 'SF Pro Display'}}>Registrate</Link>




        <button 
        type="submit" 
        className="sm:w-1/2 mx-auto text-white font-bold tracking-wider py-5 px-4 rounded"
        style={{backgroundColor: '#8D2607',
        borderRadius: '10px'}}>
          Iniciar Sesion</button>


      </form>
    </div>
    </>
  )
}

export default Login
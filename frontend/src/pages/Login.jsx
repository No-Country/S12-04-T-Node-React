import { useState} from "react";
import img from "../assets/images/Group8.svg";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/auth";
import { Formik, Form, Field, ErrorMessage } from "formik";
import eyeClose from "../assets/images/eyeClose.svg";
import eyeOpen from "../assets/images/eyeOpen.svg";
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { Report } from "notiflix/build/notiflix-report-aio";

const initialValues = {
  email: "",
  password: "",
};



const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const setUid = useAuthStore((state) => state.setUid);
  const setUsername = useAuthStore((state) => state.setUsername);
  const setToken = useAuthStore((state) => state.setToken);

  const [dataUser, setDataUser] = useState(initialValues);

  const navigate = useNavigate();
  const validar = () => {
    let errorsList = {};
    const regTest = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (!dataUser.email)
      errorsList = { ...errorsList, email: "Campo obligatorio." };
    else if (!regTest.test(dataUser.email))
      errorsList = { ...errorsList, email: "Correo no valido." };
    if (!dataUser.password)
      errorsList = { ...errorsList, password: "Campo obligatorio." };
    else if (dataUser.password.length < 8 || dataUser.password.length > 16)
      errorsList = {
        ...errorsList,
        password: "Debe tener como minimo 8 caracteres y 16 maximo.",
      };

    return errorsList;
  };
  const handleData = async () => {
    // e.preventDefault();
    Loading.dots();
    if (Object.keys(validar()).length === 0) {
      await fetch("https://chefgtp.onrender.com/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataUser),
      })
        .then((response) => response.json())
        .then((response) => {
          if(response.errors) {
            Report.failure(
              'Email / Contraseña incorrectos',
              'Volver a intentar',
            );
            Loading.remove();
          }
          Report.success(`Bienvenido ${response.data.username}`, 'Sesión iniciada');
          Loading.remove(); 
          setUid(response.data.uid);
          setToken(response.data.token);
          setUsername(response.data.username);
          navigate("/chat");
        })
        .catch((error) => console.log(error))
    } else {
      alert("Verifique los Campos");
    }
  };

  return (
    <>
      <div className=" h-screen flex-col items-center justify-center py-5">
        <img src={img} alt="img" className="w-[11rem] mx-auto " />
        <h1 className="text-3xl font-normal text-center my-4">BIENVENIDO</h1>
        <div className="flex flex-col sm:w-1/2 mx-auto">
          <Formik
          onSubmit={handleData}
          initialValues={initialValues}
          validate={validar}
          >
            <Form className="flex flex-col gap-1">
              <Field
                name="email"
                type="email"
                placeholder="Email..."
                className="inputRegister mb-0 mx-auto w-1/4"
                autoComplete="on"
                value={dataUser.email}
                onChange={(e) =>
                  setDataUser({ ...dataUser, email: e.target.value })
                }
              >
              </Field>
              <ErrorMessage name="email" />
              
              
              <div className="relative">
                <Field
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password..."
                  className="inputRegister mx-auto w-1/2"
                  autoComplete="on"
                  value={dataUser.password}
                  onChange={(e) =>
                    setDataUser({ ...dataUser, password: e.target.value })
                  }
                >
                </Field>
                <ErrorMessage name="password" className="text-red-600" /> 
                
                
                
                <div className="absolute z-2 top-4 right-5">
                  <img
                    src={showPassword ? eyeOpen : eyeClose}
                    alt="eye"
                    onClick={() => setShowPassword(!showPassword)}
                    className="w-7"
                  />
                </div>
              </div>

              <Link
                to="/"
                className="text-xl font-bold "
                style={{ fontFamily: "SF Pro Display" }}
              >
                ¿Has olvidado la contraseña?
              </Link>

              <Link
                to="/auth/register"
                className="text-xl btn btn-outline hover:bg-[#6cc48ed3] my-5 text-dark-900 border-amber-900  rounded "
                style={{
                  borderRadius: "10px",
                }}
              >
                Registrate
              </Link>

              <button
                type="submit"
                className="btn btn-amber-900  text-white text-xl rounded "
                style={{ backgroundColor: "#8D2607", borderRadius: "10px" }}
              >
                Iniciar Sesion
              </button>

            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Login;

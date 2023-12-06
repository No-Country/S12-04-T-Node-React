import { useState } from "react";
import * as yup from "yup";
import { Formik, Form, Field } from "formik";
import { useNavigate, Link } from "react-router-dom";
import Group8 from "../assets/images/Group8.svg";
import { Report } from "notiflix/build/notiflix-report-aio";
import { sendNewUser } from "../services/register";

const initialValues = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const Register = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState("/user.png");
  const validationSchema = yup.object({
    username: yup.string().required("Campo obligatorio"),
    email: yup.string().required("Campo obligatorio").email("Correo no valido"),
    password: yup
      .string()
      .required("Campo obligatorio")
      .min(8, "La contraseña requiere ser de minimo 8 caracteres"),
  });

  const onSubmit = async (values) => {
    if (values.password !== values.confirmPassword) return false;

    const { username, email, password } = values;
    const newUserData = { username, email, password };
    sendNewUser(newUserData);

    Report.success(
      "Registro Exitoso",
      "Por favor ingrese con los datos que se registro",
      "Siguiente",
      () => navigate("/auth")
    );
  };

  function handleChanges(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <div className="flex flex-col mt-8  justify-center items-center ">
      <img src={Group8} alt="logo" className="w-[11rem] mx-auto " />
      <h1 className="text-4xl mt-4">BIENVENIDO</h1>

      <div className="flex flex-col w-2/5 p-4  gap-5 justify-center items-center scale-90">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ errors, values }) => (
            <Form className=" flex flex-col w-full gap-4">
              <div className=" relative flex items-center gap-4 w-full">
                <img
                  src={file}
                  className="rounded-full border-[6px] border-[#eaeaea]  w-28 h-28 object-cover "
                />
                <div>
                  <input
                    type="file"
                    onChange={handleChanges}
                    className="absolute scale-150 left-0 opacity-0  hover:cursor-pointer"
                  />
                  <h1 className="text-2xl ml-8">+ Elige tu foto de perfil</h1>
                </div>
              </div>
              <Field
                name="username"
                className="inputRegister "
                placeholder="Nombre de usuario"
              ></Field>
              <small className="text-red-400">{errors?.username}</small>
              <Field
                name="email"
                className="inputRegister"
                placeholder="Email"
              ></Field>
              <small className="text-red-400">{errors?.email}</small>
              <Field
                name="password"
                type="password"
                className="inputRegister"
                placeholder="Contraseña"
              ></Field>
              <small className="text-red-400">{errors?.password}</small>
              <Field
                name="confirmPassword"
                type="password"
                className="inputRegister"
                placeholder="Repetir contraseña"
              ></Field>
              <small className="text-red-400">
                {values.password !== values.confirmPassword &&
                  "Las contraseñas no coinciden"}
              </small>
              {/* Boton de registro */}
              <button
                className="w-full text-xl p-4 mt-4 bg-[#8C1407] rounded-full text-white"
                type="submit"
              >
                Registrarse
              </button>
              <div className="w-full flex flex-col items-center gap-2">
                <h3>¿Ya tienes un usuario? </h3>
                <Link to="/auth" className="underline text-lg">
                  <h3>Iniciar sesión</h3>
                </Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Register;

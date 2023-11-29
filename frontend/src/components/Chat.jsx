import { Link } from "react-router-dom";

const Chat = () => {
  return (
    <div className="flex flex-col w-[80rem] sm:w-[60rem] h-screen gap-10 mx-2">
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-16 rounded-full">
            <img alt="avatar" src="avatar-chef.png" />
          </div>
        </div>
        <div className="chat-bubble bg-slate-200 text-slate-800">
          Hola, dime que ingredientes tienes!
        </div>
      </div>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-12 rounded-full">
            <img
              alt="avatar"
              src="/avatar.svg"
            />
          </div>
        </div>
        <div className="chat-bubble bg-slate-200 text-slate-800">
          Tomate - palta - pollo
        </div>
      </div>
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-16 rounded-full">
            <img alt="avatar" src="avatar-chef.png" />
          </div>
        </div>
        <div className="chat-bubble bg-slate-200 text-slate-800">
          Aqui tienes una receta:
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus quisquam eius consequuntur odio repudiandae corrupti at
            quidem inventore, saepe fugiat laboriosam dicta numquam delectus?
            Deleniti?
          </p>
        </div>
      </div>
      <div className="flex flex-col mb-6">
        <h4 className="font-bold text-xl mx-auto mb-4">¿Te gustó esta receta?</h4>
        <div className="flex justify-center gap-2 flex-wrap">
          <Link to="/recipe" className="btn bg-slate-500 px-32 col-12 text-slate-50 text-lg">Si</Link>
          <button className="btn bg-slate-500 px-32 col-12 text-slate-50 text-lg">No</button>
        </div>
      </div>
      <div className="flex gap-2 w-[90%] sm:w-[60%] mx-4 fixed bottom-8"> 
      <input type="text" placeholder="Escribe lo que tienes en la heladera" className="input border-2 border-slate-400 rounded-2xl w-full" />
      <button className="absolute right-2 mt-3 "><img src="/enviar.png" alt="button" /></button>
      </div>
    </div>
  );
};

export default Chat;

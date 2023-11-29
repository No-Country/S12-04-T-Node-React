
const Chat = () => {
  return (
    <div className="flex flex-col w-[80rem] sm:w-[60rem] h-screen gap-10 mx-2 font-medium text-lg">
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-16 rounded-full">
            <img alt="avatar" src="avatar-chef.png" />
          </div>
        </div>
        <div className="chat-bubble bg-[#F9E9E7] text-slate-800">
          <p>Hola, dime que ingredientes tienes!</p>
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
        <div className="chat-bubble bg-[#F9E9E7] text-slate-800">
          <p>Tomate, aceite, papa y lechuga</p>
        </div>
      </div>
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-16 rounded-full">
            <img alt="avatar" src="avatar-chef.png" />
          </div>
        </div>
        <div className="chat-bubble bg-[#F9E9E7] text-slate-800">
         <p> Aqui tienes una receta:</p>
         <br />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus quisquam eius consequuntur odio repudiandae corrupti at
            quidem inventore, saepe fugiat laboriosam dicta numquam delectus?
            Deleniti?
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-16 my-6">
        <h4 className="font-bold text-2xl mx-auto">¿Te gustó esta receta?</h4>
        <div className="flex justify-center gap-2 flex-wrap">
          <button className="btn btn-outline border-red-800 border-2 hover:bg-slate-800 hover:border-slate-50 w-[40%] px-32 col-12 text-xl">Si</button>
          <button className="btn bg-red-800 hover:bg-slate-800 px-32 col-12 w-[40%] text-slate-50 text-xl">No</button>
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

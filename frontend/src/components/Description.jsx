
const Description = () => {
  return (
    <div className="flex flex-col h-screen gap-4 items-center sm:m-12">
    <img className="sm:w-[60%] sm:h-[50%] shadow-lg shadow-slate-800 sm:rounded-2xl" src="/plato.png" alt="plato" />
    <div className="flex flex-col gap-4 w-[60%]">
      <h1 className="text-2xl font-bold">Nombre del Plato</h1>
      <h4 className="font-semibold">Descripción</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
        doloremque, animi id perspiciatis est eligendi sunt omnis fuga vel
        aperiam ratione. Qui velit earum debitis.
      </p>
      <h4 className="font-semibold">Ingredientes:</h4>
      <div>
        Tomate-Papas-Lechuga
      </div>
      <h4 className="font-semibold">Instrucciones</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, consequatur numquam? Dolore inventore incidunt nam. Tenetur, ad earum. Mollitia perspiciatis quos eos consequuntur blanditiis similique ipsam molestias possimus inventore ipsa quia minus magnam numquam quisquam, ex natus enim nisi architecto.</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus totam reiciendis hic perspiciatis beatae quam delectus quidem! Architecto molestiae, minima fuga consectetur quis aliquid amet tenetur ipsam tempore a! Unde animi perspiciatis corporis explicabo tempora illum consequuntur nisi alias sapiente.</p>
    </div>
  </div>
   
  )
}

export default Description
import useRecipeStore from "../store/useRecipeStore";

const Modal = ({ isOpen, onSubmit }) => {
  const modal = useRecipeStore((state) => state.modal);
  const closeModal = useRecipeStore((state) => state.closeModal);
  const setTitle = useRecipeStore((state) => state.setTitle);
  const setCategory = useRecipeStore((state) => state.setCategory);

  return (
    <div
      className={
        isOpen
          ? "fixed inset-0 flex items-center justify-center z-50"
          : "hidden"
      }
    >
      <div className="max-w-md w-full mx-auto bg-[#D9D9D9] rounded-2xl shadow-2xl shadow-black p-4 space-y-6">
        <div className="flex justify-end items-start">
          <button onClick={closeModal} className="btn btn-circle bg-transparent border-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="space-y-2 flex flex-col items-center">
          <label className="block text-sm font-medium mr-28">
            Elige el nombre de la receta
          </label>
          <input
            type="text"
            placeholder="Selecciona un nombre"
            className="input input-bordered input-error w-full max-w-xs"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="space-y-2 flex flex-col items-center">
          <label
            className="block text-sm font-medium mr-12"
            htmlFor="recipeCategory"
          >
            Selecciona la categoria para guardar
          </label>
          <select
            onChange={(e) => setCategory(e.target.value)}
            value={modal.category}
            className="select select-error w-full max-w-xs"
          >
            <option disabled selected>
              Seleccionar...
            </option>
            <option value="Desayuno">Desayuno</option>
            <option value="Almuerzo">Almuerzo</option>
            <option value="Merienda">Merienda</option>
            <option value="Cena">Cena</option>
          </select>
        </div>
        <div className="flex justify-center">
          <button
            onClick={onSubmit}
            className="btn btn-wide bg-[#8C1407] text-slate-50"
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

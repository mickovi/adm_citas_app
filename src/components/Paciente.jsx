const Paciente = () => {
    return (
        <div className="m-3 bg-white shadow-md px-5 py-10 rounded-lg">
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Nombre: {""}
                <span className="font-normal normal-case">Hooky</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Propietario: {""}
                <span className="font-normal normal-case">ReactJS</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Email: {""}
                <span className="font-normal normal-case">correo@correo.com</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Teléfono: {""}
                <span className="font-normal normal-case">999-888-777</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Fecha de alta: {""}
                <span className="font-normal normal-case">22/11/21</span>
            </p>
            
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Síntomas: {""}
                <span className="font-normal normal-case">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum voluptatem illum quod ducimus beatae tempora doloribus ad sint, qui recusandae non omnis distinctio vitae excepturi unde consectetur esse quisquam cum.</span>
            </p>
        </div>    
     );
}
 
export default Paciente;
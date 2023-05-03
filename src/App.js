const App = () => {
  return (
    <div className="text-center py-10">
      <h5 className=" text-heading_color">orosia</h5>
      <h1 className="text-4xl w-96 mx-auto leading-normal font-bold mb-12">
        Read What Others Have to say
      </h1>
      <div className="flex max-w-5xl mx-auto gap-8 group">
        <div className="bg-white/10 duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 cursor-pointer p-8 rounded-xl mix-blend-luminosity">
          <img src={require("./img/1.png")} alt="" className="h-20 mx-auto" />
          <h4 className="uppercase text-xl font-bold">Adel Orosia</h4>
          <p className="text-sm leading-7 my-3 font-light opacity-50">
            font-family: 'Poppins', sans-serif;font-family: 'Poppins',
            nt-family: 'Poppins', sans-serif;
          </p>
          <button className="bg-btn_primary py-2.5 px-8 rounded-full">
            Get in touch
          </button>
        </div>

        <div className="bg-white/10 duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100  cursor-pointer p-8 rounded-xl mix-blend-luminosity">
          <img src={require("./img/1.png")} alt="" className="h-20 mx-auto" />
          <h4 className="uppercase text-xl font-bold">Adel Orosia</h4>
          <p className="text-sm leading-7 my-3 font-light opacity-50">
            font-family: 'Poppins', sans-serif;font-family: 'Poppins',
            nt-family: 'Poppins', sans-serif;
          </p>
          <button className="bg-btn_primary py-2.5 px-8 rounded-full">
            Get in touch
          </button>
        </div>

        <div className="bg-white/10 duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100  cursor-pointer p-8 rounded-xl mix-blend-luminosity">
          <img src={require("./img/1.png")} alt="" className="h-20 mx-auto" />
          <h4 className="uppercase text-xl font-bold">Adel Orosia</h4>
          <p className="text-sm leading-7 my-3 font-light opacity-50">
            font-family: 'Poppins', sans-serif;font-family: 'Poppins',
            nt-family: 'Poppins', sans-serif;
          </p>
          <button className="bg-btn_primary py-2.5 px-8 rounded-full">
            Get in touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;

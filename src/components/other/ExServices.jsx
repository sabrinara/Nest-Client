

const ExServices = () => {
    return (
        <div>
            {/* <hr className=" border-sky-400" /> */}
            <h1 className="text-4xl md:text-5xl font-bold text-center text-cyan-600 mb-4 ">Exclusive Services</h1>
            <div className="grid grid-col-1 md:grid-cols-4  gap-4 p-10 justify-center ">

               
                <div className="relative grid h-[26rem] w-full max-w-[20rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
                    <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('paste-control.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
                        <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
                    </div>
                    <div className="relative p-6 px-6 py-14 md:px-12">
                        <h2 className="mb-6 block font-sans text-2xl font-medium leading-[1.5] tracking-normal text-white antialiased">
                            We will protect your home from any kind of insecta. Grab our exclusive services?
                        </h2>
                        
                    </div>
                </div>
                <div className="relative grid h-[26rem] w-full max-w-[20rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
                    <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('./planting.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
                        <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
                    </div>
                    <div className="relative p-6 px-6 py-14 md:px-12">
                        <h2 className="mb-6 block font-sans text-2xl font-medium leading-[1.5] tracking-normal text-white antialiased">
                            Love gardening? We can help you to meet your desires.
                        </h2>
                        
                    </div>
                </div>
                <div className="relative grid h-[26rem]  max-w-[20rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
                    <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('./pestcontrol.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
                        <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
                    </div>
                    <div className="relative p-6 px-6 py-14 md:px-12">
                        <h2 className="mb-6 block font-sans text-2xl font-medium leading-[1.5] tracking-normal text-white antialiased">
                            Do you want our professional cleaner to clean your home? 
                        </h2>
                        
                    </div>
                </div>
                <div className="relative grid h-[26rem] w-full max-w-[20rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
                    <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('./kitchen.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
                        <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
                    </div>
                    <div className="relative p-6 px-6 py-14 md:px-12">
                        <h2 className="mb-6 block font-sans text-2xl font-medium leading-[1.5] tracking-normal text-white antialiased">
                           Interior touch? We can help you with our decor team.
                        </h2>
                        
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ExServices;
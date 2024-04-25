import Marquee from "react-fast-marquee";

const Providers = ({ services }) => {
    // Create a set to store unique provider emails
    const uniqueEmails = new Set();

    return (
        <div className=" mb-16 text-sky-900 font-bold">
            <h1 className="text-3xl md:text-5xl font-bold text-center my-16 text-cyan-600">Service Providers</h1>
            <Marquee speed={100} className="">
                {services.map((service) => {
                    // Check if the email is already encountered, if so, skip rendering
                    if (uniqueEmails.has(service.provider_email)) {
                        return null;
                    }

                    // Add the email to the set to mark it as encountered
                    uniqueEmails.add(service.provider_email);

                    // Render the provider card
                    return (
                        <div key={service._id} className="">
                            <div className="flex justify-center items-center gap-1 mx-2 w-80 h-32 shadow-xl rounded bg-gradient-to-r from-sky-50 to-sky-300">
                                <div className="w-1/2 pl-10">
                                 
                                        <img src={service.provider_image} alt="provider" className="rounded-full w-20 h-20 border border-sky-600" />
                                 
                                </div>

                                <div className="flex flex-col items-center text-center w-1/2 pr-10">
                                    <h2 className="">{service.provider_name}</h2>
                                    {/* <h1 className="text-sm overflow-x-hidden">{service.provider_email}</h1> */}
                                </div>
                            </div>
                        </div>
                    );
                })}
             </Marquee>
        </div>
    );
};

export default Providers;

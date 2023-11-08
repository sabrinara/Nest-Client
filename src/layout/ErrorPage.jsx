import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <style>
                {`
                    html, body {
                        overflow: hidden;
                    }
                `}
            </style>
            <section className="bg-primary relative z-10 py-[120px] sm:py-[80px] md:py-[100px]" style={{ minHeight: '100vh', backgroundImage: 'url(https://i.ibb.co/yqpXKvL/error.jpg)', backgroundSize: 'cover'}}>
                <div className="container mx-auto">
                    <div className="-mx-4 flex">
                        <div className="w-full px-4">
                            <div className="mx-auto max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] xl:max-w-[800px] text-center "  >
                               
                                <p className="mb-8 text-lg sm:text-xl md:text-2xl text-black font-bold">
                                    The page you are looking for may be deleted
                                </p>
                                <a
                                    href="javascript:void(0)"
                                    className="hover:text-primary inline-block rounded-lg border border-black px-8 py-3 text-center text-base sm:text-lg md:text-xl font-semibold text-black transition hover:bg-white"
                                >
                                    <Link to="/">Go To Home</Link>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ErrorPage;

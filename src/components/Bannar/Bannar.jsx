

const Bannar = () => {
    return (
        <div style={{backgroundImage:'url(https://i.ibb.co.com/BCwm4s9/bannar.jpg',objectFit:'cover',opacity:'1.7', borderRadius:'15px'}} className=' w-[80%] bg-no-repeat h-screen bg-cover mx-auto'>
           <div  className="w-[60%] justify-center mx-auto flex items-center flex-col text-center h-full" >
           <h1 className="text-white text-5xl pb-4">Discover an exceptional cooking class tailored for you!</h1>
           <p className="text-gray-300 ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci eius dicta accusamus deleniti possimus earum suscipit eveniet reiciendis. Blanditiis, expedita.</p>
        <div className="flex mt-6 gap-4"> <button className=" bg-green-500 rounded-full py-3 px-6 my-4">Explore Now</button>
            <button className="rounded-full py-3 px-6 my-4 border-2 border-white text-white">Our Feedback</button></div>
           </div>

        </div>
    );
};

export default Bannar;
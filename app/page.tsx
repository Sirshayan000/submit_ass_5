export default function HomePage(){
  return(
    <div
     className="h-[1000px] 
                bg-[white]
                w-[100vw]"
    >

{/* ---------------------header- */}
      <div className="h-[80px]
                      w-[100vw]
                      bg-[#A29875]
                      flex
                      items-center
                      justify-start
                      pl-[15px]" 
      >
          <h1 className="text-5xl font-extrabold"
          >
            MANZZARI
          </h1>
      </div>
{/* --------------------------hero       */}
  <div className="flex justify-evenly items-center">
                 {/* div_one  */}
     <div className="flex justify-evenly items-center">    

       <div>
        <h1 className="text-3xl font-bold text-black ">
          IMPECCABLE <br />CRAFTSMANSHIP AND <br />FINESSE
        </h1>        
      </div>

      <div className="h-[150px] w-[900px] bg-[url('/images/para_img.png')] bg-cover ">   
      </div>

      <div className="h-[50px] w-[250px] bg-[#A29875]">
        <p className="text-white text-2xl">Explore Now</p>
       </div>

    </div> 

                 {/* div_two  */}
    <div 
       className="h-[350px] w-[150px] bg-[pink]">
    </div>

 </div>




    </div>
  )
}
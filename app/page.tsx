export default function HomePage(){
  return(
    <div className="h-[1000px] bg-[white] w-[100vw]">
     
{/* ---------------------header- */}
      <div className="h-[135px]
                      w-[100vw]
                      bg-[#A29875]
                      flex
                      items-center
                      justify-start
                      pl-[15px]" 
      >
          <h1 className="text-7xl font-extrabold font-serif"
          >
            MANZZARI
          </h1>
      </div>
{/* --------------------------hero       */}
  <main  className="h-[850px]">

                
                 {/* div_one  */}
     
     
      
  <div className="h-[600px] w-[1700px] mt-[100px] ml-[165px]"> 

    
       <div className="h-[200px] w-[500px] ">
        <div className="text-3xl font-bold text-black font-serif  pt-[60px]">
          <p className="">IMPECCABLE</p> <p className="pt-[15px]">CRAFTSMANSHIP AND</p> <p className="pt-[15px]">FINESSE</p>
        </div>        
       </div>

       <div className="h-[150px] w-[900px] bg-[url('/images/para_img.png')] bg-cover mt-[26px] pt-[40px]">   
       </div>

       <div className="h-[60px] w-[300px] bg-[#A29875] mt-[26px] rounded-[10px]">
         <button className="text-white text-2xl text-center pt-[10px] pl-[75px] font-medium">Explore Now</button>
       </div> 
                  {/* div_two  */}
       <div 
       className="bg-[url('/images/hero_img.jpeg')] bg-cover inline-block ml-[900px] mt-[-463px] h-[600px] w-[450px]  rounded-tl-[140px] rounded-tr-[0px] rounded-bl-[0px] rounded-br-[140px]">
          
        

       </div>

  </div>
   
     </main>




    </div>
  )
}
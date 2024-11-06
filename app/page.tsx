export default function HomePage(){
  return(
    <div
     className="h-screen
                bg-[white]"
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
      
      <div>
        <h1 className="text-3xl font-bold text-black ">
          IMPECCABLE <br />CRAFTSMANSHIP AND <br />FINESSE
        </h1>        
      </div>

      <div className="h-[150px] w-[900px] bg-[url('/images/para_img_png')] bg-cover ">
        
      </div>

    </div>
  )
}
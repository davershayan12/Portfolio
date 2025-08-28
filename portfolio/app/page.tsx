import Image from "next/image";
import * as motion from "motion/react-client";
import Header from "@/componets/header";
import { easeInOut } from "motion";
const word="DAVER";
const letter=[...word];
export default function Home() {
  return (
    <>

<div className="relative w-full">
  <div className="absolute z-30 left-1/2">
    <Header  />
  </div>
  <motion.div id="name" className="absolute  z-20 text-center  text-yellow-400 top-2/5   font-[sinosans] flex ">
    { 
    letter.map((l,index)=>
      
      <motion.h1 className=" text-9xl  " key={index} animate={{opacity:["0%","0%","0%","0%","0%","0%","50%","100%"], y:[100,100,100,100,100,-40,0]}} transition={{ delay:index*.1, duration:2 ,ease:"easeInOut"}}>{l}</motion.h1>
    )}
 

  </motion.div>
  <div className="abaolute z-10 gap-y-0">
    {[...Array(8)].map((_,index) =>(
    <motion.div key={index} className="bg-blue-950 font-[sinosans] p-8 text-6xl  h-6 " animate={{width:["0%","100%"]}} transition={{duration:2,ease:"easeOut",delay:index * .2}}>

    </motion.div>
       
    ))
    }
  </div>

</div>
   </>
  );
}

import Image from "next/image";
import * as motion from "motion/react-client";
import Header from "@/componets/header";
import { easeInOut } from "motion";
export default function Home() {
  return (
    <>
    <Header />


   <motion.div className="bg-blue-900 font-[sinosans] p-8 text-6xl  h-6 " animate={{width:["0%","100%"]}} transition={{duration:2,ease:"easeOut"}}>

   </motion.div>
   <motion.div className="bg-blue-900 font-[sinosans] p-8 text-6xl  h-6 " animate={{width:["0%","100%"]}} transition={{duration:2,ease:"easeOut",delay:.2}}>

   </motion.div>
   <motion.div className="bg-blue-900 font-[sinosans] p-8 text-6xl  h-6 " animate={{width:["0%","100%"]}} transition={{duration:2,ease:"easeOut",delay:.4}}>

   </motion.div>
   <motion.div className="bg-blue-900 font-[sinosans] p-8 text-6xl  h-6 " animate={{width:["0%","100%"]}} transition={{duration:2,ease:"easeOut",delay:.6}}>

   </motion.div>
   <motion.div className="bg-blue-900 font-[sinosans] p-8 text-6xl  h-6 " animate={{width:["0%","100%"]}} transition={{duration:2,ease:"easeOut",delay:.8}}>

   </motion.div>
   <motion.div className="bg-blue-900 font-[sinosans] p-8 text-6xl  h-6 " animate={{width:["0%","100%"]}} transition={{duration:2,ease:"easeOut",delay:1}}>

   </motion.div>
   <motion.div className="bg-blue-900 font-[sinosans] p-8 text-6xl  h-6 " animate={{width:["0%","100%"]}} transition={{duration:2,ease:"easeOut",delay:1.2}}>

   </motion.div>
   <motion.div className="bg-blue-900 font-[sinosans] p-8 text-6xl  h-6 " animate={{width:["0%","100%"]}} transition={{duration:2,ease:"easeOut",delay:1.4}}>

   </motion.div>
   


   </>
  );
}

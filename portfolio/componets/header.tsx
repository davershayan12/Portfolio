const menus = ["Home","About","Home","Home"];
const Header =()=>{
    return(
        <div className="flex justify-center ">
        <header className=" fixed top-0  w-2/3 my-8  h-14 rounded-3xl  bg-yellow-300   backdrop-blur-lg  ">
            <nav className="text-center text-2xl flex justify-evenly items-center py-1 ">
                {
                    menus.map((menu: string, i:number) => {
                        return(
                            <a className="font-[queensides] text-black hover:bg-blue-800 h-12 py-1.5 w-56 hover:text-3xl hover:py-1   rounded-3xl transition-all duration-500"
                            key={i}
                            href={`#${menu}`}>{menu}</a>
                        );
                    })
                }
            </nav>
        </header>
        </div>
    )
}
export default Header;

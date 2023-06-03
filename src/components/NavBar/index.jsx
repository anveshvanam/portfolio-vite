const NavBar = () => {
    return (
      <nav className=" sticky top-2 center-0 h-12 w-[-90vw] box-border m-11 flex flex-row items-center p-8 rounded-md border-black border-solid border-2 justify-between hover:bg-neutral-600">
       <a href='/'><b className=" bg-purple-800 text-white p-3 rounded-full w-12
       ">AV</b></a>
       <ul className="flex flex-row m-12 justify-between items-center">
        <li className=" ml-16 font-semibold text-white hover:text-black text-lg "><a href="#about">About</a></li>
        <li className=" ml-16 font-semibold text-white hover:text-black text-lg"><a href="#projects">Projects</a></li>
        <li className=" ml-16 font-semibold text-white hover:text-black text-lg"><a href="https://drive.google.com/uc?export=download&id=1YRKvP5RLgjKgnxHGYt4g5haaVOptKAAL">Resume</a></li>
      </ul>
      </nav>
      
    )
}


export default NavBar
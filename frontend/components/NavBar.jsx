export default function NavBar(){
    return(
        <>
            <nav className="nav" class="flex-wrap items-center justify-between text-4xl">
                <a href="/" className="site-title" >Quizar</a>
                <ul>
                    <li>
                       <a href="/Quiz" class="text-xl">Quiz</a> 
                       <a href="/Quiz" class="text-xl">Analytics</a> 

                    </li>
                </ul>
            </nav>
        </>           
     )
}

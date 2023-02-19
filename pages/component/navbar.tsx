export interface Navigation{
    clicked : (section: number) => void;
}

const Navbar: React.FC<Navigation> = (prop: Navigation) => {
    const handleHover = (e:any) => {
        e.target.classList.add('zoom');
        setTimeout(()=>{
            e.target.classList.remove('zoom');
        },500);
    };
    
    return(
        <div>
            <div className="navbarwrapper">
                <span>
                    <div className="textwrapper">
                        <div onMouseEnter={handleHover}>I</div>
                        <div onMouseEnter={handleHover}>T</div>
                    </div>
                    <div>&nbsp;</div>
                    <div className="textwrapper">
                        <div onMouseEnter={handleHover}>S</div>
                        <div onMouseEnter={handleHover}>O</div>
                        <div onMouseEnter={handleHover}>L</div>
                        <div onMouseEnter={handleHover}>U</div>
                        <div onMouseEnter={handleHover}>T</div>
                        <div onMouseEnter={handleHover}>I</div>
                        <div onMouseEnter={handleHover}>O</div>
                        <div onMouseEnter={handleHover}>N</div>
                        <div onMouseEnter={handleHover}>S</div>
                    </div>
                </span>
                <ul>
                    <li onClick={() => prop.clicked(1)}>Problem</li>
                    <li onClick={() => prop.clicked(2)}>Solution</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar

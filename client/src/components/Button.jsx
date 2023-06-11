export const ButtonHero = ({text, isLink, link}) =>{
    const handleClick = (isLink, link) =>{
        console.log("sdadasda");
        if(isLink){
            
        }
        else{
            console.log(`${link}`);
            var element = document.getElementById(`${link}`);
            //console.log(element);
            element.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }
    }
    return (
        <button data-aos="fade-up" className="btn btn-primary btn-hero" onClick={() => handleClick(isLink, link)} >{text}</button>
    );
}

export const MyButton2 = ({text, onClick, color}) =>{
    return (
        <button className={`btn btn-primary ${color}`} onClick={onClick} >{text}</button>
    );
}
import { useId } from "react";

function Menu({menu_list,active_menu,logo}) 
{
const id = useId();
return (
  <>
  <ul className="menu">
    {logo ? <h1 className="menu_logo">Nagulan</h1>: undefined}
    {menu_list.map((el,index) => ( <li id={id+index} key={id+index} className={index === active_menu ? index +' active': index}>{el}</li> ))}  
  </ul>
  </>
  );
}

export default Menu;

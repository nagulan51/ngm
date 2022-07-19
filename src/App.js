import React, { useId} from 'react';

import Menu from './model/menu'
function App() 
{
  //var [button1, setButton1] = useState(0);
  var id = useId();
  return (<>
    {/* <button onMouseOver={() => setButton1(button1+1)}>{button1}</button> */}
    <Menu id={id} key={id} logo={1} active_menu={0} menu_list={['Accueil','Projets','Qui je-suis ?','Contact']} ></Menu>
  </>);
}

export default App;

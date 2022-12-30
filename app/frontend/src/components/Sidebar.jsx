import styled from '../css/sidebar.module.css'
import logo from '../images/logo.png'

function Sidebar() {
  return (
    <aside className={ styled.sidebar } >
      <div>
        <img src={ logo } alt="cashforce logo" />
      </div>
      <div className={ styled.sidenav } >
        <a href="/">Notas Fiscais</a>
      </div>
    </aside>
  );
}

export default Sidebar;

import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

const Submenu = () => {
  const { isSubmenuOpen, closeSubmenu, location, page: { page, links } } = useGlobalContext();
  const container = useRef(null);

  const [columns, setColumns] = useState("col-2")

  useEffect(() => {  
    setColumns("col-2");
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;

    if (links.length !== 2) {
      setColumns(`col-${links.length}`)
    }
  }, [location, links])
  

  return (
    <aside className={`${isSubmenuOpen ? "submenu show" : "submenu"}`} ref={container} onMouseLeave={closeSubmenu}>
      <h4>{page}</h4>
      <div className={`submenu-center ${columns}`}>
        {links.map((item, i) => {
          const { label, icon, url } = item;
          return <a key={i} href={url}>
            {icon}
            {label}
          </a>
        })}
      </div>

    </aside>
  )
}

export default Submenu

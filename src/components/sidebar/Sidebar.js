import './Sidebar.css'
import 'boxicons'

import React from 'react'


const Sidebar = ({sidebarOpen, closeSidebar}) => {
    return(
        <div className={sidebarOpen ? 'sidebar-responsive' : ""} id="sidebar">
            <div className='sidebar__title'>
                <div className='sidebar__img'>
                    <h1>ryanvs</h1>
                </div>

                <i onClick={() => closeSidebar()}
                className="fa fa-times"
                id='sidebarIcon'
                aria-hidden="true"
                ></i>
            </div>

            <div className='sidebar__menu'>
                <div className="sidebar__link active_menu_link">
                <i class='bx bxs-home'></i>
                    <a href='#'>Home</a>
                </div>
                <h2>ADMIN</h2>
                <div className='sidebar__link'>
                <i class='bx bxs-bar-chart-alt-2'></i>
                    <a href='#'>Área administrativa</a>
                </div>
                <div className='sidebar__link'>
                <i class='bx bxs-shopping-bag-alt' ></i>
                    <a href='#'>Lojas</a>
                </div>
                <div className='sidebar__link'>
                <i class='bx bxs-basket'></i>
                    <a href='#'>Produtos</a>
                </div>
                <div className='sidebar__link'>
                <i class='bx bxs-category'></i>
                    <a href='#'>Categorias</a>
                </div>
                <div className='sidebar__link'>
                <i class='bx bxs-user-voice'></i>
                    <a href='#'>Pedidos</a>
                </div>
                <h2>PESSOAS</h2>
                <div className='sidebar__link'>
                <i class='bx bx-group'></i>
                    <a href='#'>Administradores</a>
                </div>
                <div className='sidebar__link'>
                <i class='bx bx-user'></i>
                    <a href='#'>Usuários</a>
                </div>
                <div className='sidebar__link'>
                <i class='bx bx-money-withdraw'></i>
                    <a href='#'>Pagamentos e custos</a>
                </div>
                <div className='sidebar__link'>
                <i class='bx bx-home-alt-2'></i>
                    <a href='#'>A plataforma</a>
                </div>
                <div className='sidebar__link'>
                <i class='bx bxs-bookmark'></i>
                    <a href='#'>Política de privacidade</a>
                </div>
                <div className='sidebar__logout'>
                <i class='bx bxs-log-in-circle' ></i>
                <a href='#'>Log out</a>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
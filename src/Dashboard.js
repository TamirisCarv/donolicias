import React, { useEffect } from 'react';
import perfil from './perfil.png';
import { Link } from "react-router-dom";
import { BxMenu, BxBell, BxCloudDownload, BxReceipt, BxFilter, BxCheckCircle, BxXCircle, BxDotsVerticalRounded, BxLogOutCircle, BxsDashboard, BxStoreAlt, BxAnalyse, BxMessageSquareDots, BxGroup, BxCog, BxDollarCircle, BxShowAlt, BxLineChart } from 'boxicons';

import './dashboard.css';

const Dashboard = () => {
    useEffect(() => {
        const sideLinks = document.querySelectorAll('.sidebar .side-menu li a:not(.logout)');
        const sideBar = document.querySelector('.sidebar');
        const menuBar = document.querySelector('.content nav .bx.bx-menu');

        sideLinks.forEach(item => {
            const li = item.parentElement;
            item.addEventListener('click', () => {
                sideLinks.forEach(i => {
                    i.parentElement.classList.remove('active');
                })
                li.classList.add('active');
            })
        });

        menuBar.addEventListener('click', () => {
            sideBar.classList.toggle('close');
        });

        window.addEventListener('resize', () => {
            if (window.innerWidth < 768) {
                sideBar.classList.add('close');
            } else {
                sideBar.classList.remove('close');
            }
        });
    }, []);

    return (
        <>
           <div class="body2">
            <div className="sidebar">
                <a href="#" className="logo">
                   
                   
                </a>
                <ul className="side-menu">
                    <li><a href="#"><i className='bx bxs-dashboard'></i>Dashboard</a></li>
                    <li><Link to="/catalogo"><i className='bx bx-store-alt'></i>Catálogo</Link></li>
                    <li className="active"><a href="#"><i className='bx bx-analyse'></i>Dados</a></li>
                    <li><a href="#"><i className='bx bx-message-square-dots'></i>Chat</a></li>
                    <li><a href="#"><i className='bx bx-group'></i>Usuários</a></li>
                    <li><a href="#"><i className='bx bx-cog'></i>Configurações</a></li>
                </ul>
                <ul className="side-menu">
                    <li>
                        <a href="#" className="logout">
                            <i className='bx bx-log-out-circle'></i>
                            <Link to="/cadastro"><a href="#">Logout</a> </Link> 
                        </a>
                    </li>
                </ul>
            </div>

            <div className="content">
                <nav>
                    <i className='bx bx-menu'></i>
                    <a href="#" className="profile">
                    <img className="logo1" src={perfil} alt="logo" /></a>
                </nav>

                <main>
                    <div className="header">
                        <div className="left">
                            <h1>Dashboard</h1>
                            <ul className="breadcrumb">
                                
                            </ul>
                        </div>
                        <a href="#" className="report">
                            <i className='bx bx-cloud-download'></i>
                            <span>Download CSV</span>
                        </a>
                    </div>

                    <ul className="insights">
                        <li>
                            <i className='bx bx-calendar-check'></i>
                            <span className="info">
                                <h3>1,074</h3>
                                <p>Pedidos</p>
                            </span>
                        </li>
                        <li><i className='bx bx-show-alt'></i>
                            <span className="info">
                                <h3>3,944</h3>
                                <p>Visitas</p>
                            </span>
                        </li>
                        <li><i className='bx bx-line-chart'></i>
                            <span className="info">
                                <h3>14,721</h3>
                                <p>Pesquisa</p>
                            </span>
                        </li>
                        <li><i className='bx bx-dollar-circle'></i>
                            <span className="info">
                                <h3>$6,742</h3>
                                <p>Total Mensal</p>
                            </span>
                        </li>
                    </ul>

                    <div className="bottom-data">
                        <div className="orders">
                            <div className="header">
                                <i className='bx bx-receipt'></i>
                                <h3>Pedidos Recentes</h3>
                                <i className='bx bx-filter'></i>
                                <i className='bx bx-search'></i>
                            </div>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Usuário</th>
                                        <th>Data</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            
                                            <p>Tamiris</p>
                                        </td>
                                        <td>09-03-2024</td>
                                        <td><span className="status completed">Finalizado</span></td>
                                    </tr>
                                    <tr>
                                        <td>
                                           
                                            <p>Murilo</p>
                                        </td>
                                        <td>09-03-2024</td>
                                        <td><span className="status pending"> Em Andamento</span></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            
                                            <p>Iasmim</p>
                                        </td>
                                        <td>09-03-2024</td>
                                        <td><span className="status process">Processando</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="reminders">
                            <div className="header">
                                <i className='bx bx-note'></i>
                                <h3>Pedidos</h3>
                                <i className='bx bx-filter'></i>
                                <i className='bx bx-plus'></i>
                            </div>
                            <ul className="task-list">
                                <li className="completed">
                                    <div className="task-title">
                                        <i className='bx bx-check-circle'></i>
                                        <p>Agendar pedido</p>
                                    </div>
                                    <i className='bx bx-dots-vertical-rounded'></i>
                                </li>
                                <li className="completed">
                                    <div className="task-title">
                                        <i className='bx bx-check-circle'></i>
                                        <p>Carrinho</p>
                                    </div>
                                    <i className='bx bx-dots-vertical-rounded'></i>
                                </li>
                                <li className="not-completed">
                                    <div className="task-title">
                                        <i className='bx bx-x-circle'></i>
                                        <p>Fale Conosco</p>
                                    </div>
                                    <i className='bx bx-dots-vertical-rounded'></i>
                                </li>
                            </ul>
                        </div>
                    </div>
                </main>
                </div>
        </div>
    </>
);
}

export default Dashboard;

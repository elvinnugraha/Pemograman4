import React from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar">
                <h1><Link to="/">Catatan</Link></h1>
                <div className="navbar-button">
                    <Link to="/new" className="btn">Catatan Baru</Link>
                </div>
            </nav>
        );
    }
}
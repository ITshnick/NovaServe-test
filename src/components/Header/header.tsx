import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

interface HeaderProps {
  title: string;
  links: { label: string; path: string }[];
}

const Header: React.FC<HeaderProps> = ({ title, links }) => {
  return (
    <header className="header">
      <div className="header__container">
        <h1 className="header__title">{title}</h1>
        <nav className="header__nav">
          <ul className="header__nav-list">
            {links.map((link, index) => (
              <li key={index} className="header__nav-item">
                <Link to={link.path} className="header__nav-link">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
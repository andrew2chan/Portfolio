import { motion } from 'framer-motion';
import { useState } from 'react';
import './Navbar.css';

const paths = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' }
];

const Navbar = () => {
    const [activeItem, setActiveItem] = useState<String>("Home");

    return (
        <nav className="navigation-container">
            <div className="nav-items">
                {
                    paths.map((item, index) => {
                        return (
                            <button onClick={() => setActiveItem(item.name)} key={item.name} className="nav-item">
                                {
                                    item.name == activeItem && (<motion.div
                                        layoutId = "highlight"
                                        className = "nav-highlight"
                                        transition = {{ type: 'spring', stiffness: 500, damping: 20 }}
                                    />
                                    )
                                }
                                <span className={item.name === activeItem ? "active" : ""}>{item.name}</span>
                            </button>
                        )
                    })
                }
            </div>
        </nav>
    )
}

export default Navbar;
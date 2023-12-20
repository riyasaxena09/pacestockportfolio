
import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <ScrollLink to="/" smooth={true} duration={500}>
          home
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="project" smooth={true} duration={500}>
            project
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="about" smooth={true} duration={500}>
            About
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="leader" smooth={true} duration={500}>
            leader
          </ScrollLink>
        </li>
    
        <li>
          <ScrollLink to="skills" smooth={true} duration={500}>
           skills
          </ScrollLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;

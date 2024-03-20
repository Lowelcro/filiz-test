import React, { ReactNode } from 'react';
import './Section.scss';

interface SectionProps {
  children: ReactNode;
}

const Section: React.FC<SectionProps> = ({ children }) => {
  return <section className='Section'>{children}</section>;
};

export default Section;
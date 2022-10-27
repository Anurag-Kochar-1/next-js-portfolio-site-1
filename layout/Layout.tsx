import React from 'react'
import { FC } from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Container } from './LayoutStyles'

export const Layout = ({children}:LayoutProps) => {
  return (
    <Container>
     <Header/>
     <main>{children}</main> 
     <Footer/>
    </Container>
  )
}
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LogoFlexDev from './LogoFlexDev.png'
import React, { Component } from 'react';

class NavBar extends Component {

  render() {
    return (
      <div>
        <Navbar expand="sm" variant={"ligth"}
        >
          <Container fluid style={
            {
              fontSize: '1.3rem',
              marginLeft: '30px',
              marginRight: '30px',
            }
          }>
            <Navbar.Brand href="#home" style={
              { fontSize: '1.8rem' }
            }>
              <img src={LogoFlexDev}
                style={{
                  width: '42px',
                  marginRight: '10px',
                  marginBottom: '5px',
                  filter: 'invert(1)'

                }}></img>  Multiflex

            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Empresas</Nav.Link>
                <Nav.Link href="#link">Tabelas</Nav.Link>
                <NavDropdown title="Cadatros" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    Empresa
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.2">
                    Tabela
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link onClick={() => console.log('Teste')}>Sair</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    )
  };
}

export default NavBar;
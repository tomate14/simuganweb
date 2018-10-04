import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';

class TabMenu extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.generarNav = this.generarNav.bind(this);
    this.state = {
      activeTab: '1'
    };
  }



  generarNav(parametros){
     let navs = [];
     for(let i = 0; i< parametros.length ; i++){
        navs.push( <NavItem key = {i+1}>
                      <NavLink
                              className={classnames({ active: this.state.activeTab === (i+1).toString() })}
                              onClick={() => { this.toggle((i+1).toString()); }}
                            >
                        {parametros[i]}
                      </NavLink>
                    </NavItem>);
     }
     return navs;
  }

  generarPanels(parametros){ // this.props.opcion leera de un arreglo que contendra los 
    let navs = [];           // componentes de cada parametro.
     for(let i = 0; i< parametros.length ; i++){
        navs.push(<TabPane key = {i+1} tabId= {(i+1).toString()}>
            <Row>
              <Col sm="12">
                {this.props.opcion} 
              </Col>
            </Row>
          </TabPane>);
      } 
     return navs;  
   }

  toggle(tab) {
    console.log(tab + typeof tab);
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
      var arreglo = ["Destete y Primer Servicio", "Parámetro 2", "Parámetro 3", "Parámetro 4"];
      return (
      <div>
        <Nav tabs>
              {this.generarNav(arreglo).map((object,i)=>{
                                      return object;
                                    }
                              )}
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
            {this.generarPanels(arreglo).map((object,i)=>{
                                      return object;
                                    }
                              )}
        </TabContent>
      </div>
    );
  }
}


export default TabMenu;
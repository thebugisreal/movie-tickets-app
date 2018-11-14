import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    const { movie } = this.props;
    return(
      <div>
        <Nav className="d-flex mb-3">
          <NavItem>
            <NavLink
              className={`${classnames({ active: this.state.activeTab === '1' })} px-0 pt-0 mr-4`}
              onClick={() => { this.toggle('1'); }}
            >
              Giới Thiệu
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={`${classnames({ active: this.state.activeTab === '2' })} px-0 pt-0 mr-4`}
              onClick={() => { this.toggle('2'); }}
            >
              Trailer
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={`${classnames({ active: this.state.activeTab === '3' })} px-0 pt-0`}
              onClick={() => { this.toggle('3'); }}
            >
              Bình Luận
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12" className="text-white">
                <p className="mb-4">{ movie.decs }</p>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                <div>
                  <iframe title="watching..." width="100%" height="315" src={`https://www.youtube.com/embed/${movie.youtube}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div> 
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row>
              <Col sm="12">
                Comments
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    )
  }
}

export default (MovieDetails);
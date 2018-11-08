import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default () => {
  return (
    <section className="promotion py-3 py-sm-4">
      <Container>
        <Row>
          <Col xs="6" sm="3" className="pr-1 pr-sm-0">
            <div className="p-2 border border-dark promotion__block">
              <a href="https://google.com">
                <img className="w-100" src="./assets/news/thumbnail/dream-party-package.jpg" alt="DREAM PARTY PACKAGE" />
              </a>
            </div>
          </Col>
          <Col xs={{ size: 12, order: 12 }} sm={{ size: 6, order: 0 }} className="mt-2 mt-sm-0 px-sm-2">
            <div className="p-2 border border-dark promotion__block">
              <a href="https://google.com">
                <img className="w-100" src="./assets/news/thumbnail/mon-qua-ky-niem-dac-biet-cung-dien-anh.jpg" alt="LOVERS' TICKET" />          
              </a>
            </div>
          </Col>
          <Col xs={{ size: 6, order: 1 }} sm={{ size: 3, order: 0 }} className="pl-1 pl-sm-0">
            <div className="p-2 border border-dark promotion__block">
              <a href="https://google.com">
                <img className="w-100" src="./assets/news/thumbnail/hotline.png" alt="CGV HOTLINE" />  
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
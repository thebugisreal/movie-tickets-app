import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row, Col } from 'reactstrap';
 
export default () => {
	return (
		<footer id="footer" className="footer">
			<Container>
				<Row className="pt-3 pt-sm-5 pb-2">
					<Col lg="3" md="6" sm="12">
						<h3 className="footer__title text-uppercase">CGV Việt Nam</h3>
						<ul>
							<li className="footer__list text-uppercase">
								<a className="footer__link" href="https://github.com">Giới Thiệu</a>
							</li>
							<li className="footer__list text-uppercase">
								<a className="footer__link" href="https://github.com">Tiện Ích Online</a>
							</li>
							<li className="footer__list text-uppercase">
								<a className="footer__link" href="https://github.com">Thẻ Quà Tặng</a>
							</li>
							<li className="footer__list text-uppercase">
								<a className="footer__link" href="https://github.com">Tuyển Dụng</a>
							</li>
							<li className="footer__list text-uppercase">
								<a className="footer__link" href="https://github.com">Liên Hệ Quảng Cáo CGV</a>
							</li>
						</ul>
					</Col>
					<Col lg="3" md="6" sm="12">
						<h3 className="footer__title text-uppercase">Điều khoản sử dụng</h3>
						<ul>
							<li className="footer__list text-uppercase">
								<a className="footer__link" href="https://github.com">Điều Khoản Chung</a>
							</li>
							<li className="footer__list text-uppercase">
								<a className="footer__link" href="https://github.com">Điều Khoản Giao Dịch</a>
							</li>
							<li className="footer__list text-uppercase">
								<a className="footer__link" href="https://github.com">Chính Sách Thanh Toán</a>
							</li>
							<li className="footer__list text-uppercase">
								<a className="footer__link" href="https://github.com">Chính Sách Bảo Mật</a>
							</li>
							<li className="footer__list text-uppercase">
								<a className="footer__link" href="https://github.com">Câu Hỏi Thường Gặp</a>
							</li>
						</ul>
					</Col>
					<Col lg="3" md="6" sm="12">
						<h3 className="footer__title text-uppercase">Kết nối với chúng tôi</h3>
						<ul>
							<li className="footer__icon d-inline-flex justify-content-center align-items-center mr-2">
								<FontAwesomeIcon icon={['fab', 'facebook-f']} />
							</li>
							<li className="footer__icon d-inline-flex justify-content-center align-items-center mr-2">
								<FontAwesomeIcon icon={['fab', 'youtube']} />
							</li>
							<li className="footer__icon d-inline-flex justify-content-center align-items-center mr-2">
								<FontAwesomeIcon icon={['fab', 'instagram']} />
							</li>
							<li className="footer__icon d-inline-flex justify-content-center align-items-center mr-2">
								<FontAwesomeIcon icon={['fab', 'twitter']} />
							</li>
							<li className="footer__icon d-inline-flex justify-content-center align-items-center">
								<FontAwesomeIcon icon={['fab', 'github']} />
							</li>
						</ul>
						<div className="footer__permission my-3">
							<a href="https://github.com">CGV</a>
						</div>
					</Col>
					<Col lg="3" md="6" sm="12">
						<h3 className="footer__title text-uppercase">Chăm sóc khách hàng</h3>
						<ul>
							<li className="footer__list text-uppercase">Hotline: 1900 6017</li>
							<li className="footer__list text-uppercase">Giờ làm việc: 8:00 - 22:00 (Tất cả các ngày bao gồm cả Lễ Tết)</li>
							<li className="footer__list text-uppercase">Email hỗ trợ: hoidap@cgv.vn</li>
						</ul>
					</Col>
				</Row>
				<Row className="pt-2 pb-5">
					<Col xs="12" className="d-flex">
						<div>
							<div className="footer__logo"></div>
						</div>
						<div>
							<h3 className="footer__title">CÔNG TY TNHH CJ CGV VIETNAM</h3>
							<p className="footer__text text-uppercase">Giấy CNĐKDN: 0303675393, đăng ký lần đầu ngày 31/7/2008, đăng ký thay đổi lần thứ 5 ngày 14/10/2015, cấp bởi Sở KHĐT thành phố Hồ Chí Minh.</p>
							<p className="footer__text text-uppercase">Địa Chỉ: Tầng 2, Rivera Park Saigon - Số 7/28 Thành Thái, P.14, Q.10, TPHCM.</p>
							<p className="footer__text text-uppercase">Hotline: 1900 6017</p>
							<p className="footer__text text-uppercase">COPYRIGHT 2017 CJ CGV. All RIGHTS RESERVED .</p>
						</div>
					</Col>
				</Row>
			</Container>
		</footer>
	);
}
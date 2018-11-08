import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class News extends Component {
  showPosts() {
    return (
      <OwlCarousel
        className="owl-theme pt-2 pb-2 pb-sm-3 border-bottom news__slide"
        loop
        margin={10}
        nav
        items={4}
        autoplay={false}
        navContainer={'.news__nav'}
        dots={false}
        responsiveClass={true}
        responsive={{ 0: { items: 2 }, 600:{ items: 3 }, 1000:{ items: 4 }}}
      >
        { this.props.posts.map(item => (
          <div key={ item._id }>
            <Link to={`/news/${item.slug}`} className="w-100">
              <img src={ item.thumbnail } alt={item.title} />
            </Link>    
          </div>
        )) }
      </OwlCarousel>
    )
  }

  render() {
    return (
      <section className="news">
        <Container>
          <div className="w-100 d-flex justify-content-between">
            <h5 className="pt-4 text-light">
              <FontAwesomeIcon className="mr-2" icon={['far', 'newspaper']} />
              Tin Mới &amp; Ưu Đãi
            </h5>
            <div className="news__nav position-relative pt-4"></div>
          </div>
          { this.props.posts.length !== 0 ? this.showPosts() : '' }
        </Container>
      </section>
    )
  }
}

const mapStateProps = state => ({
  posts: state.posts.items
});

export default connect(mapStateProps, null)(News);
import styles from './home.module.css';
import intro from '../../assets/intro.mp4';
import logo from '../../assets/logo.png';
import sample1 from '../../assets/sample1.jpg';
import sample2 from '../../assets/sample2.jpg';
import sample3 from '../../assets/sample3.jpg';
import sample4 from '../../assets/sample4.jpg';
import sample5 from '../../assets/sample5.jpg';
import sample6 from '../../assets/sample6.jpg';
import face from '../../assets/face.avif';
import golf from '../../assets/golf.png';
import sample10 from '../../assets/sample10.jpg';
import { Link } from 'react-router-dom';
import { icon } from '../../External/design';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { EffectFade, Navigation, Pagination,Autoplay } from 'swiper/modules';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  const images = [sample1, sample2, sample3, sample4, sample5];
  const facilities = [
    { name: 'Elevator', iconEl: 'elevator' },
    { name: 'DSTV', iconEl: 'tv' },
    { name: 'Gym Center', iconEl: 'exercise' },
    { name: 'Kitchen Fittings', iconEl: 'kitchen' },
    { name: 'cctv cameras', iconEl: 'videocam' },
    { name: 'Bathroom Fittings', iconEl: 'shower' },
    { name: 'Common Pool Area', iconEl: 'pool' },
    { name: 'Fast Internet', iconEl: 'wifi' },
    { name: 'Heat & AC Units', iconEl: 'ac_unit' },
    { name: 'Luxury Appliances', iconEl: 'coffee_maker' },
    { name: 'Playground', iconEl: 'sports_handball' },
    { name: 'Doors & Wardrobe', iconEl: 'styler' },
    { name: 'Outdoor Barbeque Area', iconEl: 'kebab_dining' },
    { name: 'On-site Management Office', iconEl: 'meeting_room' },
    { name: '24/7 Customer Service', iconEl: 'support_agent' },
    { name: 'Telephone Outlets', iconEl: 'call' },
    { name: 'Backup Water Supply', iconEl: 'water' },
    { name: 'Service Area', iconEl: 'person' },
  ]

  const [menuToggled, setMenuToggled] = useState(false);
  const [gallerySlideNum, setGallerySlideNum] = useState(0);
  const [facilitySlideNum, setFacilitySlideNum] = useState(0);
  const [testBoxPadding, setTestBoxPadding] = useState('5vh 0');

  useEffect(() => {
    if (window.innerWidth > 1400) {
      setGallerySlideNum(4);
    } else if (window.innerWidth < 1400 && window.innerWidth > 850) {
      setGallerySlideNum(3);
    } else if (window.innerWidth < 850 && window.innerWidth > 450) {
      setGallerySlideNum(2);
    } else if (window.innerWidth < 450) {
      setGallerySlideNum(2);
    }

    if (window.innerWidth > 1400) {
      setFacilitySlideNum(6);
    } else if (window.innerWidth < 1400 && window.innerWidth > 1025) {
      setFacilitySlideNum(4);
    } else if (window.innerWidth < 1025 && window.innerWidth > 800) {
      setFacilitySlideNum(3);
    } else if (window.innerWidth < 800 && window.innerWidth > 500) {
      setFacilitySlideNum(2);
    } else if (window.innerWidth < 530) {
      setFacilitySlideNum(2);
    }

    if(window.innerWidth > 600){
      setTestBoxPadding('5vh 0');
    }else{
      setTestBoxPadding('2vh 0');
    }
    

    AOS.init({
      duration: "1000",
    })
  }, [])

  const toggleMenu = () => {
    menuToggled ? setMenuToggled(false) : setMenuToggled(true);
  }

  return (
    <section className="wrapper">
      <section className={styles.headBox}>
        <video src={intro} muted autoPlay loop></video>
        <section className={styles.headSheet}>
          <section className={styles.topNav}>
            <img src={logo} />
            <nav className={menuToggled && `${styles.change}`}>
              <legend onClick={toggleMenu}>{icon('menu')}</legend>
              <Link>Home</Link>
              <Link>About Us</Link>
              <Link>Gallery</Link>
              <Link>Blog</Link>
              <Link>Contact</Link>
              <Link>Inquire</Link>
            </nav>
          </section>

          <article>
            <strong>Live Like Royalty: Explore Luxury Homes.</strong>
            <small>Explore homes that ignite passion, inspire dreams, and make life unfold.</small>
          </article>

          <section className={styles.lowNav}>
            <div>
              <h3>{icon('radio_button_checked')} Location</h3>
              <span>Kumasi</span>
            </div>
            <div>
              <h3>{icon('radio_button_checked')} Property</h3>
              <span>Apartments</span>
            </div>
            <div>
              <h3>{icon('radio_button_checked')} 3</h3>
              <span>Bedrooms</span>
            </div>
            <Link>Explore</Link>
          </section>
        </section>
      </section>

      <section className={styles.galleryBox}>
        <h3>Top Features</h3>
        <Swiper
          modules={[Autoplay]}
          loop={true}
          speed={1000}
          slidesPerView={gallerySlideNum}
          spaceBetween={15}
          autoplay={{ delay: 3500, disableOnInteraction: true, pauseOnMouseEnter: true }}
          style={{ width: '100%' }}
          className={styles.topSwiper}
        >
          {images.map((el, i) => (
            <SwiperSlide key={i} >
              <Link>
                <img src={el} />
                <article>
                  <span>Living Room</span>
                </article>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className={styles.rentBox}>
        <section className={styles.left}>
          <h3>Start Owning A Home Today.</h3>
          <article>
            <div>
              <legend>1</legend>
              <p>
                <strong>Forever Ownership.</strong>
                <small>World-class luxury flats, quality workmanship</small>
              </p>
            </div>
            <div>
              <legend>2</legend>
              <p>
                <strong>Customize to the fullest.</strong>
                <small>World-class luxury flats, quality workmanship</small>
              </p>
            </div>
            <div>
              <legend>3</legend>
              <p>
                <strong>You control when you buy.</strong>
                <small>World-class luxury flats, quality workmanship</small>
              </p>
            </div>
          </article>
          <article>
            <Link>Learn More</Link>
          </article>
        </section>
        <section className={styles.right}>
          <img src={sample10} />
        </section>
      </section>

      <section className={styles.facilityBox}>
        <h3>Facilities</h3>

        <Swiper
          modules={[Autoplay]}
          loop={true}
          speed={1000}
          slidesPerView={facilitySlideNum}
          spaceBetween={15}
          autoplay={{ delay: 3500, disableOnInteraction: true, pauseOnMouseEnter: true }}
          style={{ width: '100%' }}
          className={styles.topSwiper}
        >
          {facilities.map((el, i) => (
            <SwiperSlide key={i} >
              <a>
                <i class="material-symbols-outlined">{el.iconEl}</i>
                <strong style={{ fontFamily: "Alegreya Sans SC, sans-serif" }}>{el.name}</strong>
                <legend>{icon('north_east')}</legend>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>


      <section className={styles.blogBoxHolder}>
        <header style={{ padding: '1rem 0' }}>
          <h3>Our News & Blog</h3>
          <button type="">View More</button>
        </header>
        <section className={styles.blogBox}>
          <section className={styles.left}>
            <section className={styles.blog}>
              <div className={styles.topImage}>
                <img src={sample5} />
              </div>

              <div>
                <header>
                  <article>
                    <img src={face} className={styles.dp} />
                    <legend>
                      <strong>Mr. Emmanuel</strong>
                      <small>Ghana</small>
                    </legend>
                  </article>
                  <small>
                    <strong>Published: </strong>
                    <span>30 mins ago.</span>
                  </small>
                </header>

                <p>
                  <strong>Welcome To Royal Golf Views</strong>
                  <span className='cut'>
                    World-class luxury flats, quality workmanship with attention to detail. Kumasi is the capital of the Ashanti Region of Ghana, also known as the Garden City of Ghana. It is known for its rich Ghanaian Culture and hospitality. Royal Golf Views Apartments is located in a serene area in Kumasi.
                  </span>
                </p>
              </div>

              <header>
                <Link>Read More</Link>
                <p>
                  <nav>
                    <img src={face} width={30} height={30} alt="" />
                    <img src={face} width={30} height={30} alt="" />
                    <img src={face} width={30} height={30} alt="" />
                  </nav>
                  <small>64 comments</small>
                </p>
              </header>
            </section>
          </section>
          <section className={styles.right}>
            <section >
              {Array(3).fill().map((el) => (
                <article data-aos="fade-up">
                  <img src={sample6} />
                  <p>
                    <strong>Buy Real Estate</strong>
                    <small className='cut'>
                      World-class luxury flats, quality workmanship with attention to detail. Kumasi is the capital of the Ashanti Region of Ghana, also known as the Garden City of Ghana.
                    </small>
                    <sub style={{ color: 'salmon' }}>3 mins ago</sub>
                  </p>
                </article>
              ))}
            </section>
          </section>


        </section>
      </section>


      <section className={styles.testimonialBox}>
                
        <header>
          <h3>Testimonials</h3>
          <span>
            Don't just take our word for it. Check out what our residents are saying about their experience buying, selling, or renting with Royal Golf Views.
          </span>
        </header>

        <Swiper
          modules={[EffectFade, Pagination,Autoplay]}
          loop={true}
          speed={1000}
          pagination={{
            dynamicBullets: true,
          }}

          slidesPerView={window.innerWidth > 600 ? 2 : 1}
          spaceBetween={15}
          autoplay={{ delay: 3500, disableOnInteraction: true, pauseOnMouseEnter: true }}
          style={{ width: '100%', padding : `${testBoxPadding}` }}
          className={styles.topSwiper}
        >

        {Array(6).fill().map((el)=>(
          <SwiperSlide>
          <Link>
          {icon('format_quote')}
            <span className='cut2'>
              What happens when you find the ideal home not just through specs and photos, but through the voices of those who live there? Scroll down and step into a world of fulfilled dreams, happy surprises, and the transformative power of a perfect address
            </span>

            <article>
              <img src={face} />
              <p>
                <strong>Mr. Emmanuel</strong>
                <small style={{color:'darkgray'}}>Businessman</small>
              </p>
            </article>
          </Link>
          </SwiperSlide>
        ))}
          
        </Swiper>


        
      </section>

      <footer>
        <header>
          <img src={golf} alt="" />
          <h4>ROYAL GOLF VIEWS</h4>
        </header>
        <section className="mid">
          <article data-aos="fade-up">
            <h3>Apartments</h3>
            <small>Royal Golf Views has apartments and penthouses for sale and rent in Ghana.</small>
            <div>
              <a>
                <span>ADDRESS</span>
                <small>34-35 John Owusu Addo Close, Ridge, Kumasi, Ghana</small>
              </a>
              <a>
                <span>PHONE</span>
                <small>+233 (0)544 339 762</small>
              </a>
              <a>
                <span>E-MAIL</span>
                <small>sales@royalgolfviews.online</small>
              </a>
            </div>
          </article>
          <article data-aos="fade-up">
            <h3>Contact Agent</h3>
            <small>Royal Golf Views has apartments and penthouses for sale and rent in Ghana.</small>
            <a>
              <span className="material-symbols-outlined">phone</span>
              <small>+233 (0)544 339 762</small>
            </a>
            <a>
              <span className="material-symbols-outlined">mail</span>
              <small>sales@royalgolfviews.online AVA House, 3rd Floor C66/2</small>
            </a>
            <a>
              <span className="material-symbols-outlined">send</span>
              <small>Kojo Thompson Rd Adabraka, Accra, Ghana</small>
            </a>
          </article>
          <article data-aos="fade-up">
            <h3>Get In Touch</h3>
            <form>
              <div>
                <input type="text" placeholder="Your name" />
              </div>
              <div>
                <input type="text" placeholder="Your phone number" />
              </div>
              <div>
                <input type="text" placeholder="Your e-mail" />
              </div>
              <div>
                <textarea name=""></textarea>
              </div>
              <div>
                <button>Submit</button>
              </div>
            </form>
          </article>
        </section>
        <hr />

        <section className="socialBox">
          <p>
            <i className="fa-brands fa-facebook-f"></i>
          </p>
          <p >
            <i className="fa-brands fa-x-twitter"></i>
          </p>
          <p >
            <i className="fa-brands fa-instagram"></i>
          </p>
          <p >
            <i className="fa-brands fa-youtube"></i>
          </p>
          <p>
            <i className="fa-brands fa-google-plus-g"></i>
          </p>
        </section>
      </footer>
    </section>
  );
}

export default Home;
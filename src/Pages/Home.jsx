import Header from '../components/sections/Header';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Education from '../components/sections/Education';
import ContactForm from '../components/sections/ContactForm';
import RecentProjects from '../components/sections/RecentProjects';
import Blogs from './Blogs';
import BlogSlider from '../components/sections/BlogSlider';
import LineCompo from '../components/compo/LineCompo';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Portfolio</title>
        <link rel="canonical" href="https://portoliodot.netlify.app" />
      </Helmet>

      <Header />
      <About />
      <LineCompo />
      <Skills />
      <LineCompo />
      <Education />
      <LineCompo />

      {/* <Blogs /> */}
      <BlogSlider />
      <LineCompo />

      <RecentProjects />
      <LineCompo />

      <ContactForm />
    </div>
  );
};

export default Home;

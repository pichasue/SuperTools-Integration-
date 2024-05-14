import NavBar from './components/NavBar';
import MainContent from './components/MainContent';
import Category from './components/Category';
import ToolEntry from './components/ToolEntry';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div>
      <NavBar />
      <MainContent />
      <Category />
      <ToolEntry />
      <Footer />
    </div>
  );
}

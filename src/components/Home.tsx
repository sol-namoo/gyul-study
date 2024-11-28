import { Link } from 'react-router-dom';
import menus from '../data/menus';

function Home() {
  return (
    <div>
      {menus.map((item) => (
        <Link to={item.to}>
          <div>
            <div>{item.title}</div>
            <div>{item.desc}</div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Home;

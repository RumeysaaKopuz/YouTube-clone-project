import { categories } from '../utils/constants';
import { useContext } from 'react';
import { YoutubeContext } from '../context/youtubeContext';

const SideNav = () => {
  // contexte abone olma
  const { selectedCategory, setSelectedCategory } =
    useContext(YoutubeContext);

  return (
    <nav className="flex flex-col  pt-4">
      {categories.map((item) => (
        <>
          <div
            // seçilen kategoriyi contexte gönderme
            onClick={() => setSelectedCategory(item.name)}
            // eğerki seçiğlen kategorinin ismi ekran bastığımınkiyle eşşleşirse onu mavi yap
            className={`${
              selectedCategory === item.name && 'bg-blue-600'
            } flex items-center gap-2 p-2 py-4 text-lg cursor-pointer hover:bg-gray-800 `}
          >
            {item.icon}
            <span>{item.name}</span>
          </div>
          {/* eğerki objenin divide değeri true ise ekrana bir çizgi bas */}
          {item.divider && <hr />}
        </>
      ))}
    </nav>
  );
};

export default SideNav;

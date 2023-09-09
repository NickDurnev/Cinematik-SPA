import { BsSun, BsMoonStars } from 'react-icons/bs';
import { ThemeToggler } from './ThemeSwitcher.styled';

interface IProps {
  theme: string;
  setTheme: (theme: string) => void;
}

const ThemeSwitcher = ({ theme, setTheme }: IProps) => {
  const changeTheme = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  };

  return (
    <ThemeToggler whileTap={{ scale: 1.3 }} onClick={() => changeTheme()}>
      {theme === 'dark' ? <BsMoonStars size={20} /> : <BsSun size={20} />}
    </ThemeToggler>
  );
};

export default ThemeSwitcher;

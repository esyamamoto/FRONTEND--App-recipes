import { useNavigate } from 'react-router-dom';
import drinkIcon from '../../images/drinkIcon.svg';
import mealIcon from '../../images/mealIcon.svg';
import { FooterType } from '../../type';
import '../../AllCss/Footer.css';

export default function Footer({ footerOk = false }: FooterType) {
  const navigate = useNavigate();

  function handleMealClick() {
    return (
      navigate('/meals')
    );
  }

  function handleDrinkClick() {
    return (
      navigate('/drinks')
    );
  }

  function buttonDrinks() {
    return (
      <button onClick={ handleDrinkClick } className="button iconButton">
        <img src={ drinkIcon } alt="Drinks" data-testid="drinks-bottom-btn" />
      </button>
    );
  }

  function buttonMeals() {
    return (
      <button onClick={ handleMealClick } className="button iconButton">
        <img src={ mealIcon } alt="Meals" data-testid="meals-bottom-btn" className="iconFooter"/>
      </button>
    );
  }
  return (
    <footer className="footer" data-testid="footer">
      {footerOk && buttonDrinks()}
      {footerOk && buttonMeals()}
    </footer>
  );
}

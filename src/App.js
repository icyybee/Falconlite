import { useState } from 'react';

import './App.css';

const App = () => {
  const [category, setCategory] = useState('');
  const [items, setItems] = useState('');

  const foodList = ['Eba', 'Mega pot lover', 'Beans'];
  const drinkList = ['Hollandia yogurt', 'Monster energy drink'];

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    if (e.target.value === 'Food') {
      setItems(foodList);
    } else if (e.target.value === 'Drink') {
      setItems(drinkList);
    } else {
      console.log('error');
    }
  }

  const handleItemsChange = (e) => {
    setItems(e.target.value);
  }

  return (
    <div className='app'>
      <form>
        <label>
          Category:
          <select value={category} onChange={handleCategoryChange}>
            <option value=''>Please select an option</option>
            <option value='Food'>Food</option>
            <option value='Drink'>Drink</option>
          </select>
        </label>
        
        <br />
      
        <label>
          Items:
          <select value={items} onChange={handleItemsChange}>
            <option value=''>Please select an option</option>
            {category === 'Food' ? (foodList.map(item => (
              <option key={item} value={item}>
                {item}
              </option>
            ))) : (drinkList.map(item => (
              <option key={item} value={item}>
                {item}
              </option>
            )))}
          </select>
        </label>

        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App;
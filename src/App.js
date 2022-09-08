import { useState } from 'react'
import './App.css'
import Button from './сomponents/Button'
import Counter from './сomponents/Counter'
import ResetButton from './сomponents/ResetButton'

function App() {
  const [count, setCount] = useState(0)
  // стандартная деструктуризация при запуске setCount изменяемтся count
  // начальное значение count 0
  const incrementCount = () => {
    setCount(count + 1)
  }  
  const resetCount = () => {
    setCount(0)
  }
  // sozdaem funkciy kotoraya sbrosit nash schetchik
  // прибавление в счетчику
  const buttonStyle = { backgroundColor: 'lightgreen' }
  // sozdaem peremennyy dlya togo chtobi zadat' stil'

  return (
    <div className="App">
      <Counter count={count} />
      <Button onClick={incrementCount} />
      <Button onClick={incrementCount} />
      <Button onClick={incrementCount} />
      <Button onClick={incrementCount} />
      {count > 0 && (//а тут мы её рендерим если условие правдиво
        <ResetButton          
          style={buttonStyle}
          onClick={resetCount}//мы передаем эти значения нашей кнопке          
        />
      )}
    </div>
    // если счетчик больше 0 кнопка кнопка появиться т.к. оба значения правдивы
    // тут мы присваиваем свойство-функцию которая увеличивает наш счетчик
    // тут мы даем нашей кнопки принажатии функцию которая сбросит нашу кнопку
  )
}

export default App

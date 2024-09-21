import {useState} from 'react'
import TodoItem from '../TodoItem'
import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
    isActive: false,
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
    isActive: false,
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
    isActive: false,
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
    isActive: false,
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
    isActive: false,
  },
  {
    id: 6,
    title: 'Fix the production issue',
    isActive: false,
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
    isActive: false,
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
    isActive: false,
  },
]

// Write your code here
const SimpleTodos = () => {
  const [todo, setTodo] = useState(initialTodosList)
  const [todoText, setTodoText] = useState('')
  const deleteItem = id => {
    const filteredData = todo.filter(each => each.id !== id)
    setTodo(filteredData)
  }
  const handleText = e => {
    setTodoText(e.target.value)
  }
  const handleAdd = () => {
    const match = todoText.match(/ (\d+)$/)
    if (match) {
      const count = parseInt(match[0], 10)
      const text = todoText.slice(0, match.index).trim()
      const newTodos = Array.from({length: count}, (_, i) => ({
        id: todo.length + i + 1,
        title: `${text} ${i + 1}`,
        isActive: false,
      }))
      setTodo(prev => [...prev, ...newTodos])
      setTodoText('')
    } else {
      setTodo(prev => [
        ...prev,
        {id: todo.length + 1, title: todoText, isActive: false},
      ])
      setTodoText('')
    }
  }

  const toggleTitle = id => {
    // const status = isActive: true
    setTodo(prev =>
      prev.map(eachtodo =>
        eachtodo.id === id
          ? {...eachtodo, isActive: !eachtodo.isActive}
          : eachtodo,
      ),
    )
  }
  const handleEditInput = (e, id) => {
    // console.log(id, e.target.value)
    setTodo(prev =>
      prev.map(eachTodo =>
        eachTodo.id === id ? {...eachTodo, title: e.target.value} : eachTodo,
      ),
    )
  }

  console.log(todo)
  return (
    <div className="bg-container">
      <div className="todo-list-container">
        <h1 className="heading">Simple Todos</h1>
        <div className="input-container">
          <input
            type="text"
            className="text-input"
            value={todoText}
            onChange={handleText}
          />
          <button onClick={handleAdd}>Add</button>
        </div>
        <ul className="list-container">
          {todo.map(each => (
            <TodoItem
              list={each}
              key={each.id}
              deleteItem={deleteItem}
              toggleTitle={toggleTitle}
              handleEditInput={handleEditInput}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}
export default SimpleTodos

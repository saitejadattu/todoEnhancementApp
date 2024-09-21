// Write your code here
import './index.css'

import {useState} from 'react'
const TodoItem = props => {
  const {list, deleteItem, handleEditInput, toggleTitle} = props
  const [toggleBtn, setToggleBtn] = useState(false)
  const {title, id, isActive} = list
  const onDelete = () => {
    deleteItem(id)
  }
  const handleEdit = () => {
    setToggleBtn(prev => !prev)
  }
  const onChangeCheckBox = () => toggleTitle(id)
  const onChangeEdit = e => handleEditInput(e, id)
  const activeTitle = isActive ? 'text-strike' : ''
  return (
    <li className="text-container">
      <div className="input-checkbox-container">
        <input type="checkbox" onChange={onChangeCheckBox} checked={isActive} />
        {toggleBtn ? (
          <input
            type="text"
            className="edit-input"
            onChange={onChangeEdit}
            value={title}
          />
        ) : (
          <p className={`${activeTitle} title-field`}>{title}</p>
        )}
      </div>
      <div className="button-container">
        <button className="delete-button" onClick={onDelete}>
          Delete
        </button>
        <button className="delete-button" onClick={handleEdit}>
          {toggleBtn ? 'Save' : 'Edit'}
        </button>
      </div>
    </li>
  )
}
export default TodoItem

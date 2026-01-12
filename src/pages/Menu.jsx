import { useState } from 'react'
import { menuItems } from '../data/menuItems'
import '../styles/Menu.css'

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('appetizers')

  const categories = [
    { id: 'appetizers', name: 'Appetizers', icon: '🍤' },
    { id: 'mainCourses', name: 'Main Courses', icon: '🍛' },
    { id: 'breads', name: 'Breads', icon: '🫓' },
    { id: 'desserts', name: 'Desserts', icon: '🍰' },
    { id: 'beverages', name: 'Beverages', icon: '🥤' }
  ]

  return (
    <div className="menu-page">
      <div className="menu-header">
        <h1>Our Menu</h1>
        <p>Explore our wide selection of delicious dishes</p>
      </div>

      <div className="menu-categories">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category.id)}
          >
            <span className="category-icon">{category.icon}</span>
            {category.name}
          </button>
        ))}
      </div>

      <div className="menu-items">
        <h2 className="category-title">{categories.find(c => c.id === selectedCategory)?.name}</h2>
        <div className="menu-grid">
          {menuItems[selectedCategory].map((item) => (
            <div key={item.id} className="menu-item-card">
              <div className="menu-item-content">
                <h3>{item.name}</h3>
                <p className="menu-item-description">{item.description}</p>
                <p className="menu-item-price">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Menu

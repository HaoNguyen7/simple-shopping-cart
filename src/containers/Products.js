import { connect } from 'react-redux'

import Products from '../components/Products'
import { setProducts, fetchProducts } from '../redux/product'
import { addTodo, setTodos, fetchTodos } from '../redux/todo'

const mapStateToProps = (state) => ({
    products: state.product.products,
})

const mapActionsToProps = (dispatch) => ({
    setProducts : (products) => dispatch(setProducts(products)),
    fetchProducts : () => dispatch(fetchProducts()),
    addTodo : (text) => dispatch(addTodo(text))
})

export default connect(mapStateToProps, mapActionsToProps)(Products)
import React, { Component } from 'react';
import axios from 'axios'
import { Modal, ModalHeader, ModalBody, ModalFooter, Table, Button } from "reactstrap"

class App extends Component {
  state= {
    books: [],
    newBookModal: false
  }

  componentWillMount() {
    axios.get('http://localhost:3000/books').then((response) => {
      this.setState({
        books: response.data
      })
    })
  }
  toggleNewBookModal() {
    this.setState({
      newBookModal: true
    })
  }

  render() {
    let books = this.state.books.map((book) => {
      return (
        <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.title}</td>
              <td>{book.rating}</td>
              <Button color="success" size="sm">Edit</Button>
              <Button color="danger" size="sm">Delete</Button>
            </tr>

      )
    })
    return (
      <div>
         <Button color="primary" onClick={this.toggleNewBookModal}>Add Book</Button>
        <Modal isOpen={this.state.newBookModal.bind(this)} toggle={this.toggleNewBookModal.bind(this)} >
          <ModalHeader toggle={this.toggleNewBookModal.bind(this)}>Add A New Book</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggleNewBookModal.bind(this)}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggleNewBookModal.bind(this)}>Cancel</Button>
          </ModalFooter>
        </Modal>

        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Rating</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {books}
          </tbody>
        </Table>
        
      </div>
    );
  }
}

export default App;
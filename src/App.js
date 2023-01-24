import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas

class App extends Component {

  constructor() {
    super();
    this.state = {
      list: ['Sacar la ropa', 'Hacer la cama', 'Leer un rato'],
      data: null
    }
  }

  render() {
    const handleSubmit = event => {
      event.preventDefault();
      let r = this.state.list;
      let newA = r.concat(this.state.data);
      this.setState({list:newA,data: null})
    };
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            {this.state.list.map((element) => {
              return <li key={`id${element}`}>{element}</li>
            })}
          </ul>
          <form onSubmit={handleSubmit}>
            <input value={this.state.data || ''} onChange={(e)=>{this.setState({data:e.target.value})}} type="text" id="new-task" placeholder="Ingresa una tarea y oprime Enter" />
          </form>
        </div>
      </div>
    )
  }
}


export default App;

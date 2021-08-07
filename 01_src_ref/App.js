// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
// App.js is normal javascript file which has JSX code inside render function. 
// The name App is user-defined you can keep any name but remember to save as .js file.


// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <h1>Hello World!</h1>
//       </div>
//     );
//   }
// }

// export default App;



// function formatName(user) {
//   return user.firstName + ' ' + user.lastName
// }

// // export function component
// export function myelement(user) {   
//   if (user) {
//     return <h1>hello, {formatName(user)}</h1>
//   } else {
//     return <h1>hello, starnger</h1>
//   }
// }


// class App extends Component {
// state = {
//   name: 'rose',
//   age: 0,
// };

// 多次setState函数方式（preState拿到了上次setState之后的结果，作为参数传递给下一个setState，从感觉上像是立马更新了state）不合并

// click = () => {
//   console.log('start!')

//   this.setState((preState) => {
//     console.log('pre1:', preState)
//     return { name: 'name1', age: preState.age + 1 }
//   })

//   this.setState((preState) => {
//     console.log('pre2:', preState)
//     return { name: 'name2', age: preState.age + 1 }
//   })

//   this.setState((preState) => {
//     console.log('pre3:', preState)
//     return { name: 'name3', age: preState.age + 1 }
//   })


//   console.log('end!')
// };

// 多次setState对象方式（每次setState都执行，执行后没有立马更新this.state,每次setState里取得this.state的值都是最初的值）合并

// click = () => {
//   console.log('start')
//   this.setState((state) => ({ name: 'name1', age: state.age + 1 }))
//   this.setState((state) => ({ name: 'name2', age: state.age + 1 }))
//   this.setState((state) => ({ name: 'name3', age: state.age + 1 }))  // setState触发但是没有render
//   this.setState((state) => ({ name: 'name4', age: state.age + 1 }))   // age：5/10/15...
//   // this.setState({ name: 'name6', age: this.state.age + 1 })   // age: 2/4/6...   从这之后开始算（name4+name5） 0+1+1 = 2
//   this.setState((state) => ({ name: 'name5', age: state.age + 1 }))
//   console.log('end')
// };

// state = {
//   count: 0
// }
// click = () => {
//   this.setState({ count: this.state.count + 1 });
//   console.log("console: " + this.state.count); // count: 0   第一步
//   this.setState({ count: this.state.count + 1 }, () => {   // count: 1   第二步
//     console.log("console from callback: " + this.state.count); // count: 2   第五步
//   });
//   this.setState(prevState => {
//     console.log("console from func: " + prevState.count); // count: 1  第三步
//     return {
//       count: prevState.count + 1  // count:2  第四步  
//     };
//   }, () => {
//     console.log('last console: ' + this.state.count) // count:2  第六步  
//   });

// }
// render() {
//   const { count } = this.state
//   return (
//     <div>
//       <span>{count}</span>
//       <button id='btn' onClick={this.click}>click me!</button>
//     </div>
//   )
// }


// render() {
//   console.log('render...', this.state);
//   const { name, age } = this.state;
//   return (
//     <div>
//       <span>{name + '---' + age}</span>
//       <button id='btn' onClick={this.click}>click me!</button>
//     </div>
//   )
// }
// }

// export default App;

// function BoilingVerdict(props) {
//   if (props.celsius >= 100) {
//     return <p>The water would boil.</p>
//   } else {
//     return <p>The water would not boil.</p>
//   }
// }

// const tempType = {
//   c: 'Celsius',
//   f: 'Fahrenheit'
// }

// function toCelsius(fahrenheit) {
//   return (fahrenheit - 32) * 5 / 9;
// }

// function toFahrenheit(celsius) {
//   return (celsius * 9 / 5) + 32;
// }

// function convert(temperature, func) {
//   const input = parseFloat(temperature)
//   if (Number.isNaN(input)) {
//     return ''
//   }
//   const output = func(input)
//   const rounded = Math.round(output * 1000) / 1000
//   return rounded.toString()
// }

// class TemperatureInput extends React.Component {
//   constructor(props) {
//     super(props)
//     this.handleChange = this.handleChange.bind(this)
//   }
//   handleChange(e) {
//     //this.setState({ temperature: e.target.value })
//     this.props.onTemperatureChange(e.target.value)
//   }
//   render() {
//     const type = this.props.type
//     const temperature = this.props.temperature
//     return (
//       <fieldset>
//         <legend>Enter temperature in :{tempType[type]}</legend>
//         <input
//           value={temperature}
//           onChange={this.handleChange}>
//         </input>
//       </fieldset>
//     )
//   }
// }


// class Calculator extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = { temperature: '', type: 'c' }
//     this.handleCelsiusChange = this.handleCelsiusChange.bind(this)
//     this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
//   }
//   handleCelsiusChange(temperature) {
//     console.log(temperature)
//     this.setState({ temperature, type: 'c' })
//   }
//   handleFahrenheitChange(temperature) {
//     this.setState({ temperature, type: 'f' })
//   }
//   render() {
//     const type = this.state.type
//     const temperature = this.state.temperature
//     const celsius = type === 'f' ? convert(temperature, toCelsius) : temperature
//     const fahrenheit = type === 'c' ? convert(temperature, toFahrenheit) : temperature
//     return (
//       <div>
//         <TemperatureInput 
//           type='c'
//           temperature={celsius} // 温度转换
//           onTemperatureChange={this.handleCelsiusChange} />  
//           {/* 写进< >里的是要传递给子组件的props，props的名字父子组件之间要一样 */}
//         <TemperatureInput 
//           type='f'
//           temperature={fahrenheit} 
//           onTemperatureChange={this.handleFahrenheitChange} />
//         <BoilingVerdict celsius={parseFloat(celsius)}/>
//       </div>

//     )
//   }
// }
// export default Calculator


class Login extends React.Component {
  state = {
    username: '',
    password: ''
  }
  handleSubmit = (event) => {
    event.preventDefault()
    const { username, password } = this.state
    alert(`Username: ${username}, password: ${password}`)
  }

  saveFormData = (dataType, event) => {
    this.setState({ [dataType]: event.target.value })
  }
  render() {
    return (
      <form action="http://www.atguigu.com" onSubmit={this.handleSubmit}>
        User:<input onChange={(event) => { this.saveFormData('username', event) }} type='text' name='username' />
        Password:<input onChange={(event) => { this.saveFormData('password', event) }} type='password' name='password' />
        <button>Login</button>
      </form>
    )
  }
}

export default Login
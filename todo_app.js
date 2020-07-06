<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Toggle App</title>
    <script
      crossorigin
      src="https://unpkg.com/react@16/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"
    ></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  </head>

  <body>
    <div id="div1"></div>

    <script type="text/babel">
      const App = () => {
        const [value, setValue] = React.useState("");
        const [todo, setTodos] = React.useState([]);
        const adding = (index) => {
          return setTodos(todo.concat([value])), setValue("");
        };
        const [todoindex, settodoindex] = React.useState(null);
        return (
          <div>
            <input
              type="text"
              value={value}
              onChange={(event) => setValue(event.target.value)}
            />
            <button onClick={adding}>Click me</button>

            <ul style={{ listStyleType: "none" }}>
              {todo.map((todos, index) => (
                <li
                  onMouseEnter={() => {
                    settodoindex(index);
                  }}
                  
                  onMouseOut={() => settodoindex(null)}
                  key={index}
                >
                  <input type="radio" />
                  {todos}
                  <button
                    onClick={() =>
                      setTodos(todo.filter((count, i) => index !== i))
                    }
                  >
                    &#10006;
                  </button>
                </li>
              ))}
            </ul>
          </div>
        );
      };

      ReactDOM.render(<App />, document.getElementById("div1"));
    </script>
  </body>
</html>

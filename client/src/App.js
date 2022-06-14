import React,{ useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Menu from "./components/Menu";
import map from './utils/map';
const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const [currentNode, setCurrentNode] = useState(0);
  //console.log("current node initial value",currentNode);
  const handleKeyDown = (event) => {
    if(event.keyCode === 38) { 
      let temp = map.getNextNode('north', currentNode);
      //console.log('up arrow pressed', temp);
      if(temp > -1){
        setCurrentNode(temp);
      }
    }
    else if(event.keyCode === 39){
      //console.log("current node inside handleKeyDown",currentNode);
      let temp = map.getNextNode('east', currentNode);
      //console.log('right arrow pressed', temp);
      if(temp > -1){
        setCurrentNode(temp);
      }
    }
    else if(event.keyCode === 40){
      let temp = map.getNextNode('south', currentNode);
      //console.log('down arrow pressed', temp);
      if(temp > -1){
        setCurrentNode(temp);
      }
    }
    else if(event.keyCode === 37){
      let temp = map.getNextNode('west', currentNode);
      //console.log('left arrow pressed', temp);
      if(temp > -1){
        setCurrentNode(temp);
      }
    }
  };

  // useEffect(() => {
  //     document.addEventListener("keydown", handleKeyDown);
  // },[]);

  return (
    <ApolloProvider client={client}>
      <Menu nodeIndex = {currentNode}></Menu>
      <Router>
        <>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;

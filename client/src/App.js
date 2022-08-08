import React,{ useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Menu from "./components/Menu";
import map from './utils/map';
import inventory from './utils/inventory';
import Title from "./components/Title";
import Settings from "./components/Settings";
import Extras from "./components/Extras";
import Help from "./components/Help";
import Achievements from "./components/Achievements";
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
  const [isItemModalHidden, setIsItemModalHidden] = useState(true);
  const [currentItem, setCurrentItem] = useState(-1);
  const [canMove, setCanMove] = useState(false);
  const [gameIsStarted, setGameIsStarted] = useState(false);
  const [currentScreen, setCurrentScreen] = useState("Title");
  const [playerInventory, setPlayerInventory] = useState(new inventory());
  //console.log("inventory ", playerInventory);
  const handleKeyDown = (event) => {
    if(canMove){
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
    }
  };

  useEffect(() => {
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
  },[currentNode, canMove]);

  return (
    <ApolloProvider client={client}>
      {gameIsStarted && <Menu nodeIndex = {currentNode} setIsItemModalHidden = {setIsItemModalHidden} isItemModalHidden = {isItemModalHidden} currentItem={currentItem} setCurrentItem={setCurrentItem} setCanMove = {setCanMove} playerInventory={playerInventory} setPlayerInventory={setPlayerInventory}></Menu>}
      {!gameIsStarted && currentScreen === "Title" && <Title setGameIsStarted = {setGameIsStarted} currentScreen = {currentScreen} setCurrentScreen = {setCurrentScreen}></Title>}
      {!gameIsStarted && currentScreen === "Settings" && <Settings setCurrentScreen = {setCurrentScreen}> </Settings>}
      {!gameIsStarted && currentScreen === "Extras" && <Extras setCurrentScreen = {setCurrentScreen}></Extras>}
      {!gameIsStarted && currentScreen === "Help" && <Help setCurrentScreen = {setCurrentScreen}></Help>}
      {!gameIsStarted && currentScreen === "Achievements" && <Achievements setCurrentScreen = {setCurrentScreen}></Achievements>}
      <Router>
        <>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;

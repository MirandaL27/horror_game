import React, {useState} from 'react';
import Button from '../Button';
import help from '../../utils/help';
const Help = (props) => {
    const { setCurrentScreen} = props;
    const [search, setSearch] = useState(""); 
    const [searchResults, setSearchResults] = useState([]);
    const handleHelpSearchButtonClick = () => {
        let temp = help.searchFileSystem(search);
        setSearchResults(temp);
    }
    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    }
    return (
        <div>
            <h1>Help: </h1>
            <div>
                <label htmlFor='helpsearchbar'>Search Topics: </label>
                <input className="helpersearchbar" id="helpsearchbar" type="text" value = {search} onChange = {handleSearchChange}></input>
                <Button onClick = {handleHelpSearchButtonClick} setSearchResults = {setSearchResults} search = {search} help = {help} text = "Search" className="helpSearch" isDisabled = {false} isShowing={true} height={50} width={200}></Button>
            </div>
            <div>
                {searchResults.map((elem, index) => (
                    <div key={`help${index}`}>
                        <h2>{elem.file.getTopic()}</h2>
                        <p>{elem.file.getText()}</p>
                    </div>
                ))}
            </div>
            <Button text="Back" className = "title" setCurrentScreen = {setCurrentScreen} isDisabled={false} isShowing={true} height={100} width={400}></Button>
        </div>

    );
}

export default Help;
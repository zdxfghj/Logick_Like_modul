import React, { useEffect, useState } from 'react';
import Card from './components/Card';
import Sidebar from './components/Sidebar';
import './App.scss';
import useSiteService from './services/SiteService';
import ErrorMessage from './components/error/Error';
import Spinner from './components/spinner/Spinner';
import CardItems from './components/CardItems';
interface Service {
  loading: boolean;
  error: boolean;
  getAllTopics: any;
  getCardsOfTopic:any
}


function App() {
  const [arrayTopic, setArrayTopic] = useState<string[]>([]);
  const [arrayCards,setArrayCards] = useState<object[]>([]);
  const [newItemLoading, setNewItemLoading] = useState(false);
  const {loading, error, getAllTopics,getCardsOfTopic}:Service = useSiteService();


  useEffect(() => {
    onRequest(true);
}, [])

const onRequest = (initial:boolean) => {
    initial ? setNewItemLoading(false) : setNewItemLoading(true);
    getAllTopics().then((value:string[])=>{
      setArrayTopic(value);
      addToStateArrayCards(null)
    })
        
}

const addToStateArrayCards = async(item:string | null) =>{
  setArrayCards( await getCardsOfTopic(item))
}

  
const errorMessage = error ? <ErrorMessage/> : null;
const spinner = loading && !newItemLoading ? <Spinner/> : null;
  return (
    <div className="App">
      {errorMessage}
     
      <Sidebar arrayTopic={arrayTopic} addToStateArrayCards={addToStateArrayCards} />
     
      <div className=' d-flex flex-column justify-content-center w-100'>
        {spinner}
        <CardItems arrayCards={arrayCards}/>
       
      </div>
      

    </div>
  );
}

export default App;

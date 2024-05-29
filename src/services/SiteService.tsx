import { useHttps } from './../hook/http.hooks';


const useSiteService = () =>{
  const _apiBase = "https://logiclike.com/docs/courses.json"
  const {loading,request,error} = useHttps();


  const getAllTopics = async () => {
    let currentTags:string[] = [];
    const res = await request(`${_apiBase}`);
   
    res.map(function(value:any){
      currentTags = [...currentTags, ...value.tags]  
      currentTags = [...new Set(currentTags)]
  })
  return currentTags
}

  const getCardsOfTopic = async (topic:string|null) =>{
    let currentTags:object[] = [];
    const res = await request(`${_apiBase}`);
    currentTags = topic ?  res.filter((item:any)=>item.tags.find((element:string)=>element === topic)) :  res;
    return currentTags
    }
  




 return {
  loading,
  error,
  getAllTopics,
  getCardsOfTopic
 }
}
    
export default useSiteService;
  
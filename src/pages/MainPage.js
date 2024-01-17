import Header from "../components/common/Header";
import Information from "../components/information/Information";
import Map from "../components/information/Map";
import Main from "../components/main/Main";


const MainPage = () => {
    return (
        <div>
            <Header/>
            <Main/>
            <Information/>
            <Map/>
        </div>
    );
  };
  
  export default MainPage;
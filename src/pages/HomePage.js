import NavBar from '../components/NavBar';
import PageHeader from '../components/PageHeader';
import SearchBar from '../components/SearchBar';

export default function HomePage() {
    return (
        <div>
            <NavBar />
            {/* <h1>Welcome to the Sentiment Analysis App</h1> */}
            <h1 style={{paddingTop: "15px"}}>
                <PageHeader />
            </h1>
            <p> This app will analyze the sentiment of a given text. </p>
            <div style={{margin: "15px"}}>
                <SearchBar />
            </div>
        </div>
    );
}
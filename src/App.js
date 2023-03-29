import Header from "./components/Header";
import AudioLofi from "./components/AudioLofi";

function App() {
  return (
    <>
      <div className="home-background">
        <div className="container m-auto px-48 pt-4 flex flex-col gap-8">
          <Header />
          <AudioLofi />
        </div>
      </div>
    </>
  );
}

export default App;

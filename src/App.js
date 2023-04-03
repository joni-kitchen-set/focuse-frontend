import Header from "./components/Header";
import AudioLofi from "./components/AudioLofi";
import AudioEffects from "./components/AudioEffects";
import Tasks from "./components/Tasks";

function App() {
  // Mengatur height dari home-background

  return (
    <>
      <div className="home-background">
        <div className="container m-auto px-48 pt-4 flex flex-col gap-8">
          <Header />
          <AudioLofi />
          <AudioEffects />
          <Tasks />
        </div>
      </div>
    </>
  );
}

export default App;

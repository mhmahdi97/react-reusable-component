import Button from "./Components/ui/Button";
import Container from "./Components/ui/Container";

function App() {
  return (
    // <>
    //   <MainLayout />
    // </>

    <Container>
      <div className="h-screen w-full flex justify-center items-center">
        {/* <h1>This is h1 tag</h1>
        <h2>This is h2 tag</h2>
        <h3>This is h3 tag</h3> */}

        {/* <button className="btn btn-primary">This is a button primary</button>
            <button className="btn btn-danger">This is a button danger</button> */}
        <Button className="w-[500px]">Click</Button>
      </div>
    </Container>
  );
}

export default App;

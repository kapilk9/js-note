import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
function App() {
  return (
    <><Navbar />
    <div className="d-flex gap-4 justify-content-center pt-5">
      
      <Cards title="JavaScript" src="https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Card cap"
        prag="lolem kala tha or kala hi rahega i dont know you" />

      <Cards title="React js" src="https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Card cap"
        prag="lolem kala tha or kala hi rahega i dont know you" />

      <Cards title="Node js" src="https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Card cap"
        prag="lolem kala tha or kala hi rahega i dont know you" />

    </div> </>
  );
}
export default App;
import Button from "react-bootstrap/esm/Button";
import CardDetails from "./component/CardDetails";
import NavBar from "./component/NavBar";
import NotFound from "./component/NotFound";
import FormInput from "./component/FormInput";
import img1 from "./img/1.png";
import img2 from "./img/2.png";
import img3 from "./img/3.png";
import img4 from "./img/4.png";
function App() {
  const data = [
    { title: "title1", description: "description1", img: img1 },
    { title: "title2", description: "description2", img: img2 },
    { title: "title3", description: "description3", img: img3 },
    { title: "title4", description: "description4", img: img4 },
  ];
  const onChangehandler=(e)=>{
    console.log(e.target.value)

  }
  const printTitle=(message)=>{
    alert ("this from app file" + message);
  };
  return (
    <div>
      <NavBar />
      <FormInput/>
      <Button className="btn btn-info p-3 m-2" onClick={printTitle}>Click</Button>
      <input className="p-2 m-2" onChange={onChangehandler}></input>


      {data.length ? (
        data.map((n, index) => {
          return (
            <CardDetails
              key={index}
              title={n.title}
              description={n.description}
              img={n.img}
            >
              <h1>hello</h1>
              <p>lorem</p>
            </CardDetails>
          );
        })
      ) : (
        <NotFound message="No Data Found" />
      )}
    </div>
  );
}

export default App;

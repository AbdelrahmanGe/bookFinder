
import Carousel from 'react-bootstrap/Carousel'
export default function Home() {
    
let photos=[
'https://images.unsplash.com/photo-1533327325824-76bc4e62d560?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
'https://images.unsplash.com/photo-1553635331-3296745611d2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1049&q=80',
'https://images.unsplash.com/photo-1429511154996-f753b4dfbf87?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    
]

    return(
        <>

<div className="row">
<div className='container-fluid' style={{ width:'800px'}}>
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={photos[0]}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={photos[1]}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={photos[2]}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
</div>

<div className="jumbotron jumbotron-fluid m-5">
  <div className="container">
    <h1 className="display-4">Book Finder App</h1>
    <p className="lead">Find your favorite book and enjoy it.</p>
  </div>
</div>



        </>
    )
}
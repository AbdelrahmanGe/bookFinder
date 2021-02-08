export default function About() {

let imgLink='https://images.unsplash.com/photo-1547980562-3c008cd4b769?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'

    return(
        <>
      


<div className='container'>



<div class="card bg-dark text-white">
  <img src={imgLink} class="card-img" alt="..."></img>
  <div class="card-img-overlay">
    <h5 class="card-title">Engadin, st.moritz, st. moritz, switzerland</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text">Last updated 3 mins ago</p>
  </div>
</div>


</div>




        </>
    )
}
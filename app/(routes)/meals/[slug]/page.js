



const page = async ({ params }) => {
    console.log('ddddd');
    console.log( await params);
   
  return (
    <div>Dynamic Route</div>
  )
}

export default page
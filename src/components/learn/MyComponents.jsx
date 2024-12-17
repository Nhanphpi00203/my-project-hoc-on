// fragment <></>
import './style.css'
const Mycomponents = () => {
  // const hoidanit = 'eric'
  // const hoidanit = 25
  // const hoidanit = true
  // const hoidanit = undefined
  // const hoidanit = null
  const hoidanit = [1, 2, 3]
  // const hoidanit = {
  //   name: 'hoidanit',
  //   age: 25,
  // }
  return (
    <>
      <div className="">{JSON.stringify(hoidanit)} & hoidanit update</div>
      <div>{console.log('eric')}</div>
      <div className="child" style={{ borderRadius: '10px' }}>
        Child
      </div>
    </>
  )
}
export default Mycomponents

import MyContext from "./MyContext"

const MoneyState = (props) => {
    const yojna = {
        money:2000,
        rashan:true,
        penstion: 500
    }

  return (
    <>
  <MyContext.Provider value={{
    yojna
  }}>
    {props.children}
  </MyContext.Provider>
    </>
  )
}

export default MoneyState
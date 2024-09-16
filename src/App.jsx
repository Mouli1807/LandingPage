import Header from "./component/Header"
import Body from "./component/Body"
import Footer from "./component/Footer"
function App() {


  return (
    <>
     <div className="bg-amber-50 min-h-screen px-6 py-3 flex flex-col gap-16 md:py-7 md:px-10 md:justify-between lg:py-30 lg:px-40">
      <Header/>
      <Body/>
      <Footer/>
     </div>

    </>
  )
}

export default App

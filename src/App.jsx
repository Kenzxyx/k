import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Components/Navbar'
import './App.css'

function App() {


  return (
    <>
    {/* navbar start */}
     <Navbar />
     {/* navbar end */}
     {/* hero section start*/}
     <div className="hero">
    <div className="konten">

      <p>FUEL UP</p>
      <br />
      <br />
      <br />
      <br />
      <h1>WELCOME TO YOUR PRIME</h1>
      <a href="#" class="cta">DRINK PRIME</a>
     </div>
    </div>
    <br />
    <br />
    <div className="jajaran">
      <div className="judul">
      <h1>H  Y D R A T I O N</h1>
      </div>
      <div className="list">
        <div className="list1">
        <img src="https://drinkprime.com/cdn/shop/files/GB_Product_Page_-_Front_200x.png?v=1722366864" alt="" />
        <h2>GLOWBERRY</h2>
        <p>12PK/$29.99</p>
        <br />
        <div className="btn1">
          <p>add to cart</p>
        </div>
        {/* <h1>SPORTSTERS</h1>
        <p>dibangun dari legasi yang lahir pada tahun 1957,sportster S 2024 yang canggih dan kasar ini secepat kilat,dan sangat gesit,dan amat sangat menyenagkan dikendarai.</p> */}
        </div>

        <div className="list2">
         <img src="https://drinkprime.com/cdn/shop/files/PrimeX_Web_ProductPage_Blue_Front_94b506ea-f8d6-439e-8764-19173ba4baa5_200x.png?v=1717432079" alt="" />
         <h2>X</h2>
         <p>12PX/$29.99</p>
         <br />
         <div className="btn2">
          <p>add to cart</p>
         </div>
        </div>
        <div className="list3">
         <img src="https://drinkprime.com/cdn/shop/files/CherryFreeze-Front_2_200x.png?v=1703182111" alt="" />
         <h2>CHERRY FREEZE</h2>
         <p>12PK/$29,99</p>
         <br />
         <div className="btn3">
          <p>add to cart</p>
         </div>
        </div>
        <div className="list4">
          <img src="https://drinkprime.com/cdn/shop/products/PrimeHydration_1serve_IcePop_0000_200x.png?v=1656076690" alt="" />
          <h2>ICE POP</h2>
          <p>12PK/$29,99</p>
          <br />
          <div className="btn4">
            <p>add to cart</p>
          </div>
        </div>
        <div className="list5">
          <img src="https://drinkprime.com/cdn/shop/files/SBHydrationFront_200x.png?v=1708725252" alt="" />
          <h2>BERRY  BANANA</h2>
          <p>12PK/$29,99</p>
          <br />
          <div className="btn5">
            <p>add to cart</p>
          </div>
        </div>
        <div className="list6">
          <img src="https://drinkprime.com/cdn/shop/products/Front_200x.png?v=1672937745" alt="" />
          <h2> WATERMELON</h2>
          <p>12PK/$29,99</p>
          <br />
          <div className="btn6">
            <p>add to cart</p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
     

    </div>
     <div className="down">
      <div className="downimg">

      <img src="https://drinkprime.com/cdn/shop/files/GB_Hydration_Group_Image_600x.jpg?v=1722369334" alt="" />
      <div className="downet">

      <img src="https://drinkprime.com/cdn/shop/files/PR-Icon-Group_36_600x.png?v=1704748198" alt="" />
      </div>

   
     
        
        

        </div>
      </div>

      <div className="downnew">
       
      </div>
    

    

      
    
  


    </>
  )
}

export default App

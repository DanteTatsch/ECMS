import './style.css'
import Modal from "react-modal";
import {useState, useEffect} from 'react';


Modal.setAppElement("#root");


export function Home(){


 const [modalIsOpen, setIsOpen] = useState(false)
 const [modalIsOpen2, setIsOpen2] = useState(false)
 const [modalIsOpen3, setIsOpen3] = useState(false)

 function openModal(){
  setIsOpen(true);
 }
 function closeModal(){
  setIsOpen(false);
 }
 function openModal2(){
  setIsOpen2(true);  
 }
 function closeModal2(){
  setIsOpen2(false);
 }
 function openModal3(){
  setIsOpen3(true);  
 }
 function closeModal3(){
  setIsOpen3(false);
 }

return(

 <div id="areas">   
<header className="cabeca">


</header>

<section1>

<div id="general-information">

<article >

<div className="container">

      
      <h3> Área de atuação 1 </h3>
      <p class="text"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book..</p>
      
      
      <button class="botao" onClick={openModal}>Saiba Mais</button>
      
          
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel ="Example Modal"
      overlayClassName="modal-overlay"
      className="modal-content"
      >

      <h2>Área de Atuação 1</h2>
      <hr/>
      <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.</p>


        <button class="botao" onClick={closeModal}>Close</button>
      </Modal>     

  </div>

</article>

<article >

<div className="container">

      
      <h3> Área de atuação 2 </h3>
      <p class="text"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      
      
      <button class="botao" onClick={openModal2}>Saiba Mais</button>
      
          
    <Modal
      isOpen={modalIsOpen2}
      onRequestClose={closeModal2}
      contentLabel ="Example Modal"
      overlayClassName="modal-overlay"
      className="modal-content"
      >

      <h2>Área de atuação 2</h2>
      <hr/>
      <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.</p>


        <button class="botao" onClick={closeModal2}>Close</button>
      </Modal>     

  </div>

</article>

<article >

<div className="container">

      
      <h3> Área de atuação 3 </h3>
      <p class="text"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      
      
      <button class="botao" onClick={openModal3}>Saiba Mais</button>
      
          
    <Modal
      isOpen={modalIsOpen3}
      onRequestClose={closeModal3}
      contentLabel ="Example Modal"
      overlayClassName="modal-overlay"
      className="modal-content"
      >

      <h2>Área de atuação 3</h2>
      <hr/>
      <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.</p>


        <button class="botao" onClick={closeModal3}>Close</button>
      </Modal>     

  </div>

</article>


</div>
</section1>

<div className="box">
<div class="caixa">
<h5 class="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h5>
<a href="/card"><button>Nosso Time</button></a>
</div>
<img class="foto" src= "./source/Socios.jpg"></img>
</div> 

<footer id="contato" class="footer">

    <div class="contato">
    <h2>Contato</h2>
    <p>Rio de Janeiro</p>
    <p>Avenida Atlântica</p>
    <p>2516, Copacabana</p>
    <p>21 98896-2256</p>
    </div>   


  
  
</footer>

</div>
)

}
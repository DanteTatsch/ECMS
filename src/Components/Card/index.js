import "./style.css"
import Modal from "react-modal";
import {useState, useEffect} from 'react';
  



export function Card (){

    const [modalIsOpen, setIsOpen] = useState(false)
    const [modalIsOpen2, setIsOpen2] = useState(false)
   
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

    return(

        <div class="page">
                       	            
            <div className="card" >
                <img class = "avatar" src="./source/Dante.jpg"></img>
                <div class="teste">
                
                    <h4><b>John Doe</b></h4>
                    <p>Architect & Engineer</p>
                    <div className="modal">
                    <button class="botao" onClick={openModal}>Saiba Mais</button>
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        contentLabel ="Example Modal"
                        overlayClassName="modal-overlay"
                        className="modal-content"
                        >
                        <h2>Dante Tatsch</h2>
                        <hr/>
                        <p>Advogado muito bem sucedido e muito mais bonito que o Marcus!!!!</p>
                        <button class="botao" onClick={closeModal}>Close</button>
                    </Modal>
                    </div>
                </div>         

            </div>  


            <div className="card" >
                <img class = "avatar" src="./source/Dante.jpg"></img>
                <div class="teste">
                
                    <h4><b>John Doe</b></h4>
                    <p>Architect & Engineer</p>
                    <div className="modal">
                    <button  class="botao" onClick={openModal}>Saiba Mais</button>
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        contentLabel ="Example Modal"
                        overlayClassName="modal-overlay"
                        className="modal-content"
                        >
                        <h2>Dante Tatsch</h2>
                        <hr/>
                        <p>Advogado muito bem sucedido e muito mais bonito que o Marcus!!!!</p>
                        <button class="botao" onClick={closeModal}>Close</button>
                    </Modal>
                    </div>
                </div>         

            </div>

       </div>
    )
}
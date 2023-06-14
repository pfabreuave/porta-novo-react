import React from 'react'
import './App.css';


function Home() {
    return (
        
        
        <div>

            <div className='home__banner'>
                <div>
      	  		    <img src='Pedro4.jpg' alt=' ' className='home__img'/>
                          
    		    </div>
                <div>
                    <h1> ........... Pedro Abreu A.</h1>
                </div>
            </div>
            <div className='home__subBanner'>
                    <h1>Desenvolvedor Full Stack</h1>   
            </div>    
            <div className='home__subBanner'>
            <div className='skills'>
					    <i className='fab fa-html5'></i>
					    <i className='fab fa-css3-alt'></i>
					    <i className='fab fa-js'></i>
				      	<i className='fab fa-react'></i>
					    <i className='fab fa-angular'></i>
					    <i className='fas fa-database'></i>
					    <i className='fab fa-node'></i>
			</div>
            </div>
            <div className='home__content' id='proyectos'>

                <div className='home__content__title'>
                    <h2>Proyectos</h2>
                </div>

                <div className='home__content__clusters'>
                    <div>
                        <a href='https://pfabreuave.github.io/api-github-javascript/?user=pfabreuave' target='_blank' rel='noreferrer'>
                            <h3>Repositorios Github</h3>
                        </a>
                    </div>

                    <div>
                        <a href='https://pfabreuave.github.io/API-Codewars-JS/?user=pfabreuave' target='_blank' rel='noreferrer'>
                            <h3>Desafios Codewars</h3>
                        </a>
                    </div>

                    <div>
                        <a href='https://port-mundo-rt.web.app/' target='_blank' rel='noreferrer'>
                            <h3>Presentacion Dinamica</h3>
                        </a>
                    </div>

                    <div>
                        <a href='pfabreuave.github.io/STONE_simulacion/' target='_blank' rel='noreferrer'>
                            <h3>Simulacion stone</h3>
                        </a>
                    </div>

                    <div>
                        <a href='https://presenta-rt.web.app/' target='_blank' rel='noreferrer'>
                            <h3>Presentacion</h3>
                        </a>
                    </div>

                    <div>
                        <a href='https://calcula-react.web.app/' target='_blank' rel='noreferrer'>
                            <h3>Calculadora en React</h3>
                        </a>
                    </div>

                    <div>
                        <a href='https://team-ls-rt.web.app/' target='_blank' rel='noreferrer'>
                            <h3>Local storage</h3>
                        </a>
                    </div>

                    <div>
                        <a href='https://pfabreuave.github.io/Receta-arepas/' target='_blank' rel='noreferrer'>
                            <h3>Receta Arepas</h3>
                        </a>
                    </div>
                    
                </div>

            </div>
        </div>
      
    )
}

export default Home
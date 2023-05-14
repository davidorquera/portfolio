import {SiJavascript, SiCss3,SiHtml5,SiReact,SiMaterialui,SiPostgresql,SiExpress,SiPassport,SiNodedotjs,SiNestjs,SiTypescript} from 'react-icons/si';
import './experience.css'

const Experience = () =>{

    return (
        <section id="experience"> 
            <h5> Mis skills </h5>
            <h2> Mi  experiencia </h2>
            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3> Frontend Developer </h3>
                    <div className="experience__content">
                        <article className="experience__details"> 
                            <SiJavascript className="experience__details-icon"/>
                            <h4>JAVASCRIPTS</h4>
                        </article>
                    </div>
                    <div className="experience__content">
                        <article className="experience__details"> 
                            <SiTypescript className="experience__details-icon"/>
                            <h4>TYPESCRIPT</h4>
                        </article>
                    </div>

                    <div className="experience__content">
                        <article className="experience__details"> 
                            <SiHtml5 className="experience__details-icon"/>
                            <h4> HTML </h4>
                        </article>
                    </div>
                    
                    <div className="experience__content">
                        <article className="experience__details"> 
                            <SiCss3 className="experience__details-icon"/>
                            <h4> CSS </h4>
                        </article>
                    </div>
                    <div className="experience__content">
                        <article className="experience__details"> 
                            <SiReact className="experience__details-icon"/>
                            <h4> REACT </h4>
                        </article>
                    </div>
                    <div className="experience__content">
                        <article className="experience__details"> 
                            <SiMaterialui className="experience__details-icon"/>
                            <h4> MATERIAL UI </h4>
                        </article>
                    </div>
                </div>
                <div className="experience__backend">
                <h3> Backend Developer </h3>
                    <div className="experience__content">
                        <article className="experience__details"> 
                            <SiNodedotjs className="experience__details-icon"/>
                            <h4>NODE JS</h4>
                        </article>
                    </div>

                    <div className="experience__content">
                        <article className="experience__details"> 
                            <SiPostgresql className="experience__details-icon"/>
                            <h4>POSTGRESQL</h4>
                        </article>
                    </div>
                    
                    <div className="experience__content">
                        <article className="experience__details"> 
                            <SiExpress className="experience__details-icon"/>
                            <h4> EXPRESS </h4>
                        </article>
                    </div>
                    <div className="experience__content">
                        <article className="experience__details"> 
                            <SiPassport className="experience__details-icon"/>
                             <h4> PASSPORT </h4>
                        </article>
                    </div>
                    <div className="experience__content">
                        <article className="experience__details"> 
                            <SiNestjs className="experience__details-icon"/>
                             <h4> NEST JS </h4>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Experience;
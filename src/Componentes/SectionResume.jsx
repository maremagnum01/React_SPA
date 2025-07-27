export default function SectionResume() {
    return (
        <section className="section" id="resume">
            <div className="container">
                <h2 className="mb-5">
                    <span className="text-danger">Mi</span> historial académico
                </h2>
                <div className="row justify-content-center">

                    {/* Secundario */}
                    <div className="col-md-6 col-lg-4 d-flex mb-4">
                        <div className="card flex-fill">
                            <div className="card-header">
                                <h4 className="mt-2">Secundario</h4>
                                <span className="line"></span>
                            </div>
                            <div className="card-body">
                                <h6 className="title text-danger">CENS N°52</h6>
                                <p><b>Herramientas informáticas</b></p>
                                <p className="subtitle">Paquete Office completo: Excel, Word, PowerPoint, Access, Outlook.</p>
                                <hr />
                                <p><b>Programación</b></p>
                                <p className="subtitle">Introducción a la programación con PHP. Proyectos simples como calculadoras.</p>
                                <hr />
                                <p><b>Perito auxiliar en informática</b></p>
                                <p className="subtitle">Conocimientos básicos para resolver problemas informáticos.</p>
                                <h6 className="title text-danger">2016 - 2018</h6>
                            </div>
                        </div>
                    </div>

                    {/* Full Stack PHP */}
                    <div className="col-md-6 col-lg-4 d-flex mb-4">
                        <div className="card flex-fill">
                            <div className="card-header">
                                <h4 className="mt-2">Full Stack PHP</h4>
                                <span className="line"></span>
                            </div>
                            <div className="card-body">
                                <h6 className="title text-danger">Telefónica de Movistar</h6>
                                <p><b>Front end</b></p>
                                <p className="subtitle">HTML, CSS, JavaScript y Bootstrap.</p>
                                <hr />
                                <p><b>Back end</b></p>
                                <p className="subtitle">PHP con MySQL. Consultas SQL y lógica backend.</p>
                                <hr />
                                <p><b>Base de datos</b></p>
                                <p className="subtitle">Modelado y uso de MySQL.</p>
                                <h6 className="title text-danger">2022</h6>
                            </div>
                        </div>
                    </div>

                    {/* Full Stack Java */}
                    <div className="col-md-6 col-lg-4 d-flex mb-4">
                        <div className="card flex-fill">
                            <div className="card-header">
                                <h4 className="mt-2">Full Stack Java</h4>
                                <span className="line"></span>
                            </div>
                            <div className="card-body">
                                <h6 className="title text-danger">Codo a Codo 4.0</h6>
                                <p><b>Front end</b></p>
                                <p className="subtitle">HTML, CSS, JavaScript y conexión con APIs.</p>
                                <hr />
                                <p><b>Back end</b></p>
                                <p className="subtitle">Java con Spring Web y conexión a bases de datos.</p>
                                <hr />
                                <p><b>Base de datos</b></p>
                                <p className="subtitle">SQL con MySQL.</p>
                                <h6 className="title text-danger">2024</h6>
                            </div>
                        </div>
                    </div>

                    {/* WordPress */}
                    <div className="col-md-6 col-lg-4 d-flex mb-4">
                        <div className="card flex-fill">
                            <div className="card-header">
                                <h4 className="mt-2">Desarrollador WordPress</h4>
                                <span className="line"></span>
                            </div>
                            <div className="card-body">
                                <h6 className="title text-danger">Fundación SES</h6>
                                <p className="subtitle text-center">
                                    <p>Capacitación en construcción web con WordPress.</p>
                                    <p>Diseño UX/UI, estructura web, CMS, Divi, Elementor, WooCommerce.</p>
                                    <p>Uso de herramientas como Local y diseño responsive.</p>
                                </p>
                                <h6 className="title text-danger">2024</h6>
                            </div>
                        </div>
                    </div>

                    {/* Análisis de Sistemas */}
                    <div className="col-md-6 col-lg-4 d-flex mb-4">
                        <div className="card flex-fill">
                            <div className="card-header">
                                <h4 className="mt-2">Análisis de sistemas</h4>
                                <span className="line"></span>
                            </div>
                            <div className="card-body">
                                <h6 className="title text-danger">IFTS N°11</h6>
                                <p><b>Tecnicatura</b></p>
                                <p className="subtitle text-center">
                                    Actualmente cursando. Iniciado en 2024, finalización estimada en 2026. 
                                    En el presente realizando el segundo año de la tecnicatura.
                                </p>
                                <h6 className="title text-danger">2024 - Presente</h6>
                            </div>
                        </div>
                    </div>

                    {/* Front End React */}
                    <div className="col-md-6 col-lg-4 d-flex mb-4">
                        <div className="card flex-fill">
                            <div className="card-header">
                                <h4 className="mt-2">Front End React</h4>
                                <span className="line"></span>
                            </div>
                            <div className="card-body">
                                <h6 className="title text-danger">Talampaya</h6>
                                <p><b>Front end</b></p>
                                <p className="subtitle">HTML, CSS, JavaScript, React y TypeScript.</p>
                                <hr />
                                <p><b>Librería</b></p>
                                <p className="subtitle">Uso de ReactJS con TypeScript.</p>
                                <hr />
                                <p><b>Aprendizaje</b></p>
                                <p className="subtitle">
                                    Hooks, componentes, Git, consumo de APIs, rutas, autenticaciones, etc.
                                </p>
                                <h6 className="title text-danger">2025</h6>
                            </div>
                        </div>
                    </div>

                    {/* Habilidades */}
                    <div className="col-md-6 col-lg-4 d-flex mb-4 flex-column">
                        <div className="card mb-3 flex-fill">
                            <div className="card-header">
                                <h4 className="mt-2">Habilidades</h4>
                                <span className="line"></span>
                            </div>
                            <div className="card-body pb-2">
                                {[
                                    { name: 'HTML & CSS3', width: '80%' },
                                    { name: 'JavaScript', width: '80%' },
                                    { name: 'PHP', width: '70%' },
                                    { name: 'SQL', width: '85%' },
                                    { name: 'Laravel', width: '70%' },
                                    { name: 'React', width: '65%' },
                                ].map((skill) => (
                                    <div key={skill.name}>
                                        <h6>{skill.name}</h6>
                                        <div className="progress mb-3">
                                            <div
                                                className="progress-bar bg-danger"
                                                role="progressbar"
                                                style={{ width: skill.width }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Lenguajes */}
                        <div className="card flex-fill">
                            <div className="card-header">
                                <h4 className="mt-2">Lenguajes</h4>
                                <span className="line"></span>
                            </div>
                            <div className="card-body pb-2">
                                <h6>English</h6>
                                <div className="progress mb-3">
                                    <div className="progress-bar bg-danger" role="progressbar" style={{ width: '40%' }}></div>
                                </div>
                                <h6>Spanish</h6>
                                <div className="progress mb-3">
                                    <div className="progress-bar bg-danger" role="progressbar" style={{ width: '100%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
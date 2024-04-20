

const ProjectCard = ({title, tech, details, path}) => {
    return (
        <>
            
            <div className="project my-5">
                    <div className="container  text-center ">
                        <div className="row ">
                            <div className="col-md-8">

                                <div className="row ">
                                    <div className="col rounded">
                                        <p style={{ display: 'block' }}>{title}</p>
                                        {/* <div className="p-3 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3">
                                        <p style={{ display: 'block' }}>This is a block-level paragraph.</p>
                                    </div> */}
                                    </div>
                                </div>
                                <div className="row ">
                                    <div className="col">
                                        {tech}
                                    </div>
                                    {/* <div className="col-6">.col-6</div> */}
                                </div>
                                <div className="row ">
                                    <div className="col-6">
                                        <details>
                                            <summary>More Details</summary>
                                            <p>{details}</p>
                                        </details>
                                    </div>
                                    <div className="col-6">
                                        <a href={path} target='_blank'>
                                            View Full Gif {" "}
                                            <i className="bx bx-link-external"></i>
                                        </a>
                                    </div>
                                </div>
                                




                            </div>
                            <div className=" col-md-4">
                                <div className="image-container">
                                    <small className='fst-italic'> hover to enlarge gif (desktop) </small>
                                    <img src={path} alt="Image" className="zoom-image" />
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
        </>
      );
}
 
export default ProjectCard;
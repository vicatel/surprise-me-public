
import { Happy_Monkey } from "next/font/google";

const hm = Happy_Monkey({ subsets: ["latin"], weight: '400' });

const CertificateCard = ({ title, details, progress }) => {


    return (

        <>
            <div className={"certificate my-5"} >
                <div className="container  text-start ">
                    <div className="row ">
                        <div className="col">

                            <div className="row ">
                                <div className="col rounded">
                                    {/* <i class='bx bxs-certification'></i>  */}
                                    {title}
                                    <details>
                                        <summary>
                                            View Details</summary>
                                        <p>{details}</p>
                                    </details>

                                    <div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                        <div className="progress-bar" style={{width: `${progress}%`}}>{progress}% complete</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default CertificateCard;

{/* <p style={{ display: 'block' }}></p> */ }
{/* <div className="p-3 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3">
                                        <p style={{ display: 'block' }}>This is a block-level paragraph.</p>
                                    </div> */}
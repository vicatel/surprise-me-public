

const Item = ({name, desc, price, link, image , dark}) => {
// console.log( process.env.NEXT_PUBLIC_SUPABASE_URL + "/storage/v1/object/public/" +image);

let url = process.env.NEXT_PUBLIC_SUPABASE_URL + "/storage/v1/object/public/" +image;
    return (
        <>
            
            <div className={` ${dark ? 'item-light' : 'item-dark'} " my-5 "`}>
                    <div className="container  text-center ">
                        <div className="row ">
                            <div className="col-md-8" >

                                <div className="row ">
                                    <div className="col rounded">
                                        <p style={{ display: 'block', color: dark ? 'white' : 'black' }}>{name} - ${price}</p>
                                        {/* <div className="p-3 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3">
                                        <p style={{ display: 'block' }}>This is a block-level paragraph.</p>
                                    </div> */}
                                    </div>
                                </div>
                                <div className="row ">
                                    <div className="col">
                                    <p style={{ display: 'block', color: dark ? 'white' : 'black' }} >{desc}</p>
                                    </div>
                                    {/* <div className="col-6">.col-6</div> */}
                                </div>
                                <div className="row ">
                                    <div className="col-6">
                                        <details>
                                            <summary style={{ color: dark ? 'white' : 'black' }} >More Details </summary>
                                            <p style={{ color: dark ? 'white' : 'black' }}>For Comments...</p>
                                        </details>
                                    </div>
                                    <div className="col-6">
                                        <a href={link} target='_blank' style={{ color: dark ? 'white' : 'black' }}>
                                            
                                           <p style={{ color: dark ? 'white' : 'black' }}> Go to Item {" "}   <i className="bx bx-link-external"></i></p>
                                        </a>
                                    </div>
                                </div>
                                




                            </div>
                            <div className=" col-md-4">
                                <div className="image-container">
                                    {/* <small className='fst-italic'> hover to enlarge gif (desktop) </small> */}
                                    <img style= {{height: "300px", width:"150px" }} src={url} alt="Image" className="zoom-image" />
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
        </>
      );
}
 
export default Item;
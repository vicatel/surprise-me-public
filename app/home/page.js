'use client'
import { useEffect, useState } from 'react'

import "../../styles/primary.css";
import 'bootstrap/dist/css/bootstrap.min.css';
// import NavbarComponent from '@/components/NavBar';
import Title from '../../components/Title';
import Item from '../../components/Item';
import { auth, getAuth, getCookies, getCurrentUser, setCurrentUser } from '../actions';
import ParticlesComponent from '../../components/Particles';
import { supabase } from '../supabase';
import { Spinner } from 'react-bootstrap';



//TO-DO
// can edit
//react performance stuff

// const getAuthStatus = () => {
//     const response = getAuth().then((result) => {
//         console.log(result, "here is result");
//     });
// };


export default function LandingPage() {
    const [authenticated, setAuth] = useState(false)
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const wait = async () => {
            await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for 2 seconds
            setLoading(false); // Set loading to false after 2 seconds
        };
        wait();
    }, []);

    useEffect(() => {
        const response = getAuth().then((result) => {
            console.log(result, "here is authentication status");
            setAuth(result)
        });
    }, []);

    const handleLogin = () => {
        console.log('Logging in with username:', username, 'and password:', password);
        const response = auth(password).then((result) => {
            console.log(result, "here is other auth status");
            setAuth(result)

        });
        setUsername("");
        setPassword("");
    };

    if (loading) {
        return <div className='app mt-4 px-5 text-center text-dark'>

            Loading...
            <Spinner animation="border" role="status" variant='info'>
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>;
    }

    return (
        <>
            {/* <NavbarComponent /> */}
            {
                authenticated ?
                    <HomePage />
                    :
                    <div className="app mt-4 text-center text-dark">
                        <div>
                            <label>
                                Username: {" "}
                                <input id="username" className='mb-3 bg-light text-dark' type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                            </label>
                            <label>
                                Password: {" "}
                                <input type="password" className='bg-light text-dark' value={password} onChange={(e) => setPassword(e.target.value)} />
                            </label>
                        </div>
                        <button className="btn btn-outline-dark mx-5 mt-3 " onClick={handleLogin}>Login</button>
                    </div>
            }
        </>
    )
}




const HomePage = () => {
    const [user, setUser] = useState(null);
    const [isChecked, setIsChecked] = useState(false);

    function toggleDarkMode() {
        setDarkMode(prevMode => !prevMode);
    }

    function handleSwitchChange() {
        // console.log("Switching value:", isChecked);

        setIsChecked(!isChecked);
        // console.log("Now its value:", isChecked);


    }

    useEffect(() => {
        // console.log(isChecked);
        document.body.style.backgroundColor = isChecked ? 'black' : 'white';

    }, [isChecked])

    // let res = getCurrentUser();
    // console.log(res);

    useEffect(() => {
        const response = getCurrentUser().then((result) => {
            console.log(result, "here is current user");
            if (result) setUser(result);
        });
    }, [])



    function goBack() {
        setUser(null);
    }




    return (
        <>

            <div className={` app text-center text-light `}

                style={{ backgroundColor: isChecked ? 'black' : 'white' }}>

                {
                    user ?
                        <>
                            <Wishlist user={user} back={goBack} dark={isChecked} />
                        </>
                        :
                        <>

                            {/* <div className={` ${isChecked ? '' : '' }  ' text-dark float-none mb-2' `} > */}
                            <div className={`mb-2 ${isChecked ? 'text-light' : 'text-dark'}`} >
                                <div className="form-check form-switch ">
                                    <input style={{ marginLeft: "210px", paddingLeft: "50px" }} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" checked={isChecked} onChange={handleSwitchChange} />
                                    <label style={{ paddingRight: "40px" }} className="form-check-label" htmlFor="flexSwitchCheckDefault">
                                        <p>
                                            {
                                                isChecked ?
                                                    <>
                                                        <i className='bx bxs-moon' ></i>

                                                    </> :
                                                    <>
                                                        <i className='bx bxs-sun'></i>

                                                    </>
                                            }
                                        </p>
                                    </label>
                                </div>
                            </div>
                            <div>
                                <Title title="WELCOME" />
                            </div>
                            <button id="home" className={`my-2 mx-auto btn btn-outline-light ${isChecked ? 'text-light' : 'text-dark'}`}
                                onClick={() => {
                                    setUser("Victor");
                                    setCurrentUser("Victor");
                                }}>Victor</button>

                            <button id="home" className={`my-2 mx-auto btn btn-outline-light ${isChecked ? 'text-light' : 'text-dark'}`}
                                onClick={() => {
                                    setUser("Sister 1");
                                    setCurrentUser("Sister 1");
                                }}>Sister 1</button>
                            <button id="home" className={`my-2 mx-auto btn btn-outline-light ${isChecked ? 'text-light' : 'text-dark'}`}
                                onClick={() => {
                                    setUser("Sister 2");
                                    setCurrentUser("Sister 2");

                                }}>Sister 2</button>
                            <button id="home" className={`my-2 mx-auto btn btn-outline-light ${isChecked ? 'text-light' : 'text-dark'}`}
                                onClick={() => {
                                    setUser("Brother 1");
                                    setCurrentUser("Brother 1");
                                }}>Brother 1</button>
                            <button id="home" className={`my-2 mx-auto btn btn-outline-light ${isChecked ? 'text-light' : 'text-dark'}`}
                                onClick={() => {
                                    setUser("Friend 1");
                                    setCurrentUser("Friend 1");

                                }}>Friend 1</button>
                            <button id="home" className={`my-2 mx-auto btn btn-outline-light ${isChecked ? 'text-light' : 'text-dark'}`}
                                onClick={() => {
                                    setUser("Friend 2");
                                    setCurrentUser("Friend 2");
                                }}>Friend 2</button>
                            {/* <button id="home" className="btn btn-outline-light my-2 mx-auto" onClick={() => {
                                console.log(user)
                            }}>Log User</button> */}
                        </>
                }

                <ParticlesComponent />

            </div>
        </>
    );
}



// const Button = () => {
//     'use client'

//     return (<button className="my-2" onClick={() => {
//         console.log("hey there")
//     }}>Login</button>);
// }


const Wishlist = ({ user, back, dark }) => {
    const [items, setItems] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [sortByPriceAsc, setSortByPriceAsc] = useState(true);
    const [addingItem, setAddingItem] = useState(false);


    const handleSortByPrice = () => {
        const sortedItems = [...items].sort((a, b) => {
            return sortByPriceAsc ? a.price - b.price : b.price - a.price;
        });
        setItems(sortedItems);
        setSortByPriceAsc(!sortByPriceAsc);
    };



    const handleAddItem = async (newItem) => {
        // setItems([...items, newItem]);
        console.log(newItem);

        // Wishlist({user, back})

        try {
            // const { data , error } = await supabase
            //     .from('surprise') // Replace 'your_table_name' with your actual table name
            //     .insert([newItem]);

            setAddingItem(true);
            const { data, error } = await supabase
                .from('surprise')
                .insert([
                    { user, item_name: newItem.itemName, description: newItem.description, price: newItem.price, item_link: newItem.link, image_url: newItem.url },
                ])
                .select()
            if (error) {
                console.log(error)
                alert(error)
                setAddingItem(false);
            };
            console.log(data);
            alert('Added successfully!!!')
            setAddingItem(false);
            setShowForm(false);

        } catch (error) {
            console.log(error);
            alert(error)
            setAddingItem(false);

        }
        
        location.reload();

    };
    const handleShowForm = () => {
        setShowForm(!showForm);
    };

    useEffect(() => {
        const getItems = async () => {
            const { data, error } = await supabase.from('surprise').select('*').eq('user', user)
            if (error) {
                console.log(error, "hereeee");
                alert(error)
            }
            console.log(data);

            setItems(data)

        }

        getItems();
    }, [])
    return (
        <>
            <div className='wishlist'>
                <p className='pt-5 mt-2 mb-0' style={{ color: dark ? 'white' : 'black' }}>Wishlist for </p>
                {/* {" " + user} */}
                <Title title={user} dark={dark} />

                {/* className={`my-2 mx-auto btn btn-outline-light ${isChecked ? 'text-light' : 'text-dark'}`} */}
                <button className={` btn ${dark ? 'btn-outline-light' : 'btn-outline-dark'}`} onClick={back}>Go back</button>
                {!showForm &&
                    <button style={{ backgroundColor: "rgb(137, 155, 223)", color: "white" }} className='btn btn-light mx-2 ' onClick={handleShowForm}>Add New Item</button>
                }
                <button className={`btn ${dark ? 'btn-outline-light' : 'btn-outline-dark'}`} onClick={handleSortByPrice}>
                    {sortByPriceAsc ? '↑' : '↓'}
                </button>

                <AddItemForm onAddItem={handleAddItem} show={showForm} click={handleShowForm} dark={dark} />
                <div>
                    {/* <Item name="Nike Shoes" desc="Please" price={90} link="/idgaf" /> */}

                    {
                        items.length > 0 ?
                            <>
                                {
                                    items.map((item) => (
                                        <Item
                                            key={item.id}
                                            name={item.item_name}
                                            desc={item.description}
                                            price={item.price}
                                            link={item.item_link}
                                            image={item.image_url}
                                            dark={dark}
                                            processingAdd={addingItem}
                                        />
                                    ))
                                }
                            </> :
                            <>
                                <div>
                                    <p style={{ marginTop: "25%", fontSize: "1.4em", color: "#899bdf" }}>Empty... Add something</p>
                                </div>
                            </>

                    }
                </div>
            </div>
        </>
    );
}



function AddItemForm({ onAddItem, show, click, dark, processingAdd }) {
    const [showForm, setShowForm] = useState(false);
    const [itemName, setItemName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [link, setLink] = useState('');
    const [url, setURL] = useState(null);
    const [imageFile, setImageFile] = useState(null);
    const [processing, setProcessing] = useState(false);

    const handleFileChange = (e) => {
        setImageFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        if (!imageFile) {
            alert('Please select an image file');
            return;
        }
        setProcessing(true);

        const { data, error } = await supabase.storage
            .from('surprise')
            .upload('images/' + imageFile.name, imageFile);

        if (error) {
            console.error('Error uploading image:', error.message);
            alert(error.message + "Try again.")
            setProcessing(false);
        } else {
            alert('Image uploaded successfully!');
            setProcessing(false);
            console.log('Image URL:', data);
            setURL(data.fullPath)
            // You can save the image URL in your database here
        }

        // return data.key;
    };

    const handleAddItem = () => {
        // Validate form fields
        if (!itemName.trim() || !description.trim() || !price.trim() || !url) {
            alert('Please fill in all fields & upload image');
            return;
        }

        // Call the onAddItem callback with the new item
        onAddItem({ itemName, description, price, link, url });

        // Reset form fields
        setItemName('');
        setDescription('');
        setPrice('');
        setLink('');
        setURL(null);
        setShowForm(false); // Hide the form after adding the item
    };



    return (
        <div>
            {show &&
                <div className='my-2'>
                    <input
                        type="text"
                        placeholder="Item Name"
                        value={itemName}
                        className={` d-block ${dark ? '' : 'bg-light text-dark'}`}
                        onChange={(e) => setItemName(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Description"
                        value={description}
                        className={` d-block mt-2 ${dark ? '' : 'bg-light text-dark'}`}

                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Price"
                        value={price}
                        className={` d-block mt-2 ${dark ? '' : 'bg-light text-dark'}`}

                        onChange={(e) => setPrice(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Link"
                        value={link}
                        className={` d-block my-2 ${dark ? '' : 'bg-light text-dark'}`}

                        onChange={(e) => setLink(e.target.value)}
                    />
                    <div>
                        <input type="file" onChange={handleFileChange} />
                        <button className='btn btn-light ms-2' disabled={processing} onClick={handleUpload}> {processing ? 'Wait...' : 'Upload Image'}</button>
                    </div>
                    <button className={` btn my-2 mx-2 ${dark ? 'btn-outline-light' : 'btn-outline-dark'}`} onClick={click}>Cancel</button>

                    <button style={{ backgroundColor: "rgb(137, 155, 223)", color: "white" }} className="btn btn-light" disabled={processingAdd} onClick={handleAddItem}>Create Item</button>
                </div>
            }

        </div>
    );
}
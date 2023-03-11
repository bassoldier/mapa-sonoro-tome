import Layout from "../layouts/Layout";

const Contacto = () => {
    return(
        <>
            <Layout>
                <div className="home-container">
                <h1 className="home-title">About</h1>
                <h2 className="home-subtitle">
                    This is a simple example of how to build a simple React app.
                </h2>
                <button className="home-button" onClick={() => setCount(count + 1)}>
                    Click Me
                </button>
                </div>
            </Layout>
        
        </>
    );
}

export default Contacto;
import Navbar from "../_components/site-header";

const LandingLayout = ({children}:{children: React.ReactNode}) => {
    return(
        <div>
            <Navbar/>
            {children}
        </div>
    )
}

export default LandingLayout;
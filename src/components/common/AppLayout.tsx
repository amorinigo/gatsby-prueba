import Navbar from './Navbar';
import Footer from './Footer';

interface AppLayoutProps {
    children ?: React.ReactNode
}

const AppLayout = ({ children }: AppLayoutProps) => {

    return (
        <>
            <Navbar />

            <main className='bg-red-400'>
                { children }
            </main>

            <Footer />
        </>
    );

}

export default AppLayout;

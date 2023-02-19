import { AppLayout } from '@components';
import type { HeadFC, PageProps } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

const IndexPage: React.FC<PageProps> = () => {

    return (
        <AppLayout>
            {/* <h1>Home Page</h1> */}
            <StaticImage alt="Prueba" src="../images/icon.png" />
        </AppLayout>
    );
    
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;